Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

$.modal = function(options) {
    function noop() {}

    function _createModalFooter(buttons = []) {
        if (buttons.length === 0) {
            return document.createElement('div')
        }
        const wrap = document.createElement('div')
        wrap.classList.add('modal-footer')

        buttons.forEach(btn => {
            const $btn = document.createElement('button')
            $btn.textContent = btn.text
            $btn.classList.add('btn')
            $btn.classList.add(`btn-${btn.type || 'secondary'}`)
            $btn.onclick = btn.handler || noop

            wrap.appendChild($btn)
        })

        return wrap
    }
    function _createModal(options) {
        options = {
            ...defaultOptions,
            ...options
        }
        const {title, closable, width, content} = options
        const modal = document.createElement('div')
        modal.classList.add('modal-w')
        modal.insertAdjacentHTML('afterbegin',`
            <div class="modal-overlay" data-close="true">
                <div class="modal-window" style="{width:${width};}">
                    <div class="modal-header">
                        <span class="modal-title">${title}</span>
                        ${closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
                    </div>    
                    <div class="modal-body" data-content>
                        ${content}
                    </div>
                </div>
            </div>
        `)
        const footer = _createModalFooter(options.footerButtons)
        footer.appendAfter(modal.querySelector('[data-content]'))
        document.body.appendChild(modal)
        return modal
    }

    const defaultOptions = {
        title: 'Modal window',
        closable: true,
        width: '200px',
        content: '<p>Lorem ipsum dolor sit.</p>',
    }
    const $modal = _createModal(options)
    const ANIMATION_SPEED = 200
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
    }
    
    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener) 

    return Object.assign(modal, {
        destroy() {
           $modal.parentNode.removeChild($modal);
           $modal.removeEventListener('click', listener)
           destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}
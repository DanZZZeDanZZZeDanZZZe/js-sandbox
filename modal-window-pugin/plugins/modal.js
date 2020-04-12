$.modal = function(options) {
    function _createModal(options) {
        options = {
            ...defaultOptions,
            ...options
        }
        const {title, closable, width, content} = options
        const modal = document.createElement('div')
        modal.classList.add('modal-w')
        modal.insertAdjacentHTML('afterbegin',`
            <div class="modal-overlay">
                <div class="modal-window" style="{width:${width};}">
                    <div class="modal-header">
                        <span class="modal-title">${title}</span>
                        ${closable ? '<span class="modal-close">&times;</span>' : ''}
                    </div>    
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer">
                        <button>OK</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        `)
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

    return {
        open() {
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
        destroy() {
          
        }
    }
}
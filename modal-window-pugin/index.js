const modal = $.modal({
    title: 'helloModal',
    width: '500px',
    content: '<p>my content</p>',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Dnger btn clicked')
            modal.close()
        }}
    ]
})

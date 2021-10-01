 $.confirm = function(options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      maxWidth: '400px',
      closable: false, 
      content: options.content,
      onClose() {
        modal.destroy()
      },
      footerButtons: [{
      text: 'Отмена', type: 'button', handler() {
      modal.close()
      reject()
    }}, {
      text: 'Удалить', type: 'button-close', handler() {
      modal.close()
      resolve()
    }}]
  })
  setTimeout(()=> {
     modal.open()
  }, 200)
  })
 }
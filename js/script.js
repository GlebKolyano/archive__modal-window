const modal = $.modal({
  title: 'My Modal',
  closable: true,
  content: `
    <h2>Modal is working </h2>
    <p>lorem ipsum dolor sit.</p>`,
  maxWidth: '500px',
  footerButtons: [{
    text: 'Ok', type: 'button', handler() {
      console.log('1 clicked')
      modal.close()
    }
  },
  {
    text: 'Cancel', type: 'button-close', handler() {
      console.log('2 clicked')
      modal.close()
    }
  }]
})
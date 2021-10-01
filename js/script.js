const fruits = [
  {id: 1, title: 'Огурец', price: 5, img: '/img/1.jpg'},
  {id: 2, title: 'Помидор', price: 8, img: '/img/2.jpg'},
  {id: 3, title: "Перец", price: 10, img: '/img/3.jpg'}
]

const toHTML = fruit => `
            <div class="fruits-card">
              <h2 class="sub-title">${fruit.title}</h2>
              <img src="${fruit.img}" class="img" alt="${fruit.title}">
              <div class="buttons">
                <button class="button-price">Посмотреть цену</button>
                <button class="button-del">Удалить</button>
              </div>
            </div>
`
function render() {
  const html = fruits.map(fruit => toHTML(fruit)).join('') 
  document.querySelector('#fruits').innerHTML = html
}
render()

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
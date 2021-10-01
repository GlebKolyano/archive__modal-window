let fruits = [
  {id: 1, title: 'Огурец', price: 5, img: '/modal__window__js/img/1.jpg'},
  {id: 2, title: 'Помидор', price: 8, img: '/modal__window__js/img/2.jpg'},
  {id: 3, title: "Перец", price: 10, img: '/modal__window__js/img/3.jpg'}
]

const toHTML = fruit => `
            <div class="fruits-card">
              <h2 class="sub-title">${fruit.title}</h2>
              <img src="${fruit.img}" class="img" alt="${fruit.title}">
              <div class="buttons">
                <button class="button-price" data-btn="price" data-id="${fruit.id}">Посмотреть цену</button>
                <button class="button-del" data-btn="delete" data-id="${fruit.id}">Удалить</button>
              </div>
            </div>
`
function render() {
  const html = fruits.map(fr => toHTML(fr)).join('') 
  document.querySelector('#fruits').innerHTML = html
}
render()

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
  maxWidth: '400px',
  footerButtons: [{
    text: 'Ok', type: 'button', handler() {
      console.log('1 clicked')
      priceModal.close()
    }
  }]
})



document.addEventListener('click', event=>{
  event.preventDefault()
  const id = +event.target.dataset.id
  
  
  if (event.target.getAttribute('data-btn') === 'price') {
    const fruit = fruits.find(f => f.id === id)
    priceModal.setContent(`<p>Цена на ${fruit.title}: <strong>${fruit.price}$</p>`)
    priceModal.open()
  } else if (event.target.getAttribute('data-btn') === 'delete') {
    const fruit = fruits.find(f => f.id === id)
    $.confirm({
      title: 'Вы уверены?',
      content: `<p>Вы удаляете фрукт: <strong> ${fruit.title} </strong></p>`
    
    }).then( () => {
      fruits = fruits.filter(f => f.id !== id)
      render()
      console.log('remove')
    }).catch(()=> {
      console.log('cansel')
    })
    
  } 
  
})

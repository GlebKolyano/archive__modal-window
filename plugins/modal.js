function _createModal(options) {
  const DEFAULT_WIDTH = '600px'
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.insertAdjacentHTML('afterbegin', `
      <div class="modal-overlay" data-close="true"></div>
      <div class="modal-window" style="max-width: ${options.maxWidth || DEFAULT_WIDTH}">
        <div class="modal-header">
          <span class="modal-title">${options.title || 'Window'}</span>
          ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
        </div>
        <div class="modal-body">
          ${options.content || ''}
        </div>
        <div class="modal-footer">
          <button>Ok</button>
          <button data-close="true">Cancel</button>
        </div>
      </div>
    `)
  document.body.appendChild(modal)
  return modal
}
//
$.modal = function(options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  const modal = { 
    open() {
      if (destroyed) {
        return console.log('Modal is destroyed')
      } else {
        !closing && $modal.classList.add('open')
      }
      
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')  
      setTimeout(()=> {
        $modal.classList.remove('hide')
        closing = false
      }, ANIMATION_SPEED)
    }
  }
  $modal.addEventListener('click', event => {
    if (event.target.getAttribute('data-close')) {
      modal.close()
    }
  })

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      destroyed = true
    }
  })
}


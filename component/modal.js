Vue.component('modal-video', {
  template: `      
    <div 
      class="modal modal-custom"
      :class="{'active': visible}">
      <div class="modal-dialog">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-header border-bottom-0">
            <button 
              type="button" 
              class="close" 
              @click="$emit('hidden', false)">
              <svg class="bi bi-x" width="45px" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <iframe width="100%" height="315" :src="link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>  
  `,
  props: ['link', 'visible'],
})
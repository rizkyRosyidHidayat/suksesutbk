Vue.component('hover-menu', {
  template: `
  <div>
    <a 
      @click="active"         
      :href="data.link" 
      class="nav-item nav-link font-weight-bold text-white mx-2">
      {{ data.text }}
    </a>
    <div
      v-if="visible"
      class="card mt-2 border-0 hover-menu shadow">
      <div class="card-body text-black-50">
        <div class="row">
          <div class="col-5">
            <ul class="list-group list-group-flush">
              <li 
                v-for="item in data.child" :key="item.text" 
                @mouseover="activated(item.text)"
                class="list-group-item px-0 d-flex justify-content-between">
                  <div>{{ item.text }}</div>
                  <div class="icon-list-animate">
                    <svg class="bi bi-arrow-right" width="25" fill="#F57045" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                    </svg>
                  </div>
              </li>
            </ul>
          </div>
          <div class="col-7">
            <template>
              <div class="h3 font-weight-bold">{{desc.title}}</div>
              <p>{{ desc.desc }}</p>
              <a href="#">
                <button 
                  @mouseover="iconColor = '#F57045'"
                  @mouseleave="iconColor = '#7F7F7F'"
                  class="btn btn--text font-weight-bold text-black-50 px-0">
                  HUBUNGI KAMI
                  <span class="icon-text-animate">
                    <svg class="bi bi-arrow-right" width="30" :fill="iconColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                    </svg>
                  </span>
                </button>
              </a>
            </template>
          </div>
        </div>          
      </div>
    </div>
  </div>  
  `,
  props: ['data'],
  data: () => ({
    visible: false,
    iconColor: '#7F7F7F'
  }),
  methods: {
    handleMouseLeaveOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.visible = false      
      }
    },
    active(){
      if (this.data.child.length > 0) {
        this.visible = true
      }
    },
    activated(text) {
      this.data.child.filter(c=>{
        if (c.text == text) {
          c.aktif = true
        } else {
          c.aktif = false          
        }
      })
    }
  },
  computed: {
    desc() {
      return this.data.child.filter(c=>c.aktif==true)[0].desc
    }
  },
  mounted() {
    document.addEventListener('click', this.handleMouseLeaveOutside);  
  },
  destroyed() {
    document.removeEventListener('click', this.handleMouseLeaveOutside);
  },
})
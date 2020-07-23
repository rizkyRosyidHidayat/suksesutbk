import './header/hover_menu.js'

Vue.component('header-section', {
  template: `  
    <header class="navbar navbar-expand-md dark my-4 z-index-3">
      <div class="container-lg">
        <a href="javascript:void(0)" class="navbar-brand d-block d-lg-none">              
          <img src="./icon/align_right.svg" alt="icon" height="40px">
        </a>
        <a href="index.html" class="navbar-brand">              
          <img src="./img/logo_white.svg" alt="logo" height="40px">
        </a>
        <a href="javascript:void(0)" class="navbar-brand d-block d-lg-none">              
          <img src="./icon/account.svg" alt="icon" height="40px">
        </a>
        <nav class="navbar-nav align-items-center position-relative d-none d-lg-flex">
          <hover-menu
            v-for="item in navbar" 
            :key="item.text"
            :data="item"
          />
          <div>
            <a href="#" class="nav-item nav-link">
              <button 
                @mouseover="iconColor = '#F57045'"
                @mouseleave="iconColor = '#ffffff'"
                class="btn btn-outline--white rounded-pill font-weight-bold px-3">
                LOGIN
                <span class="icon-btn-outline-animate">
                  <svg class="bi bi-arrow-right" width="30" :fill="iconColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  `,
  props: ['navbar'],
  data: () => ({
    iconColor: '#ffffff',
    visible: false
  }),
})
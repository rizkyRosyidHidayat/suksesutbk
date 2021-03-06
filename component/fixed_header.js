Vue.component('fixed-header', {
  template: `  
    <header id="fixedHeader" class="navbar navbar-expand-md bg-white shadow fixed-top">
      <div class="container-lg px-0">
        <a 
          @click="$emit('change-visible', true)"
          href="javascript:void(0)" 
          class="navbar-brand d-block d-lg-none">              
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" height="40px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="#F57045"/>
          </svg>
        </a>
        <a href="index.html" class="navbar-brand">              
          <img src="./img/logo_color.svg" alt="logo" height="40px">
        </a>
        <a href="javascript:void(0)" class="navbar-brand d-block d-lg-none">              
          <img src="./icon/account2.svg" alt="logo" height="40px">          
        </a>
        <nav class="navbar-nav align-items-center position-relative d-none d-lg-flex">
          <a 
            v-for="(data, i) in navbar"       
            :href="data.link" 
            class="nav-item nav-link font-weight-bold text--primary mx-2">
            {{ data.text }}
          </a>
          <div>
            <a href="#" class="nav-item nav-link">
              <button 
                @mouseover="iconColor = '#ffffff'"
                @mouseleave="iconColor = '#F57045'"
                class="btn btn-outline--primary rounded-pill font-weight-bold px-3">
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
    iconColor: '#F57045',
    visible: false
  }),
})
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
          <svg fill="#F57045" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" height="40px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11z"/>
          </svg>
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
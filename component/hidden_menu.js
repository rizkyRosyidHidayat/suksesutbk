Vue.component('hidden-menu', {
  template: `
  <section 
    class="hidden-menu fixed-top bg--purple"
    :class="{'active': visibleMenu}">
    <img 
      src="./img/toggle-bg.svg" 
      alt="image" 
      class="toogle-bg"
      :class="{'active': visibleMenu}">
    <header class="navbar dark my-4">
      <div class="container-lg px-0">
        <a 
          @click="$emit('change-visible', false)"
          href="javascript:void(0)" 
          class="navbar-brand d-block d-lg-none">              
          <img src="./icon/close.svg" alt="icon" height="40px">
        </a>
        <a href="index.html" class="navbar-brand">              
          <img src="./img/logo_white.svg" alt="logo" height="40px">
        </a>
        <a href="javascript:void(0)" class="navbar-brand d-block d-lg-none">              
          <img src="./icon/account.svg" alt="icon" height="40px">
        </a>
      </div>
    </header>
    <div class="container-fluid">
      <nav class="nav flex-column">
        <a 
          v-for="item in navbar" :key="item.text"
          class="nav-link font-weight-bold h5 text-white" :href="item.link">
          {{ item.text }}
        </a>
      </nav>
      <div class="dropdown-divider"></div>
      <div class="row">
        <div 
          v-for="item in list" :key="item.text"
          class="col-6">
          <a             
            :href="item.link"
            class="nav-link h5 font-weight-bolder text-white-50">
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="dropdown-divider"></div>
      <a href="#" class="btn mb-5 bg-white rounded-pill btn-lg text--primary btn-block font-weight-bold mt-5 py-3">
        MARKETE GIT
      </a>
    </div>
  </section>
  `,
  props: ['navbar', 'visible-menu'],
  data: () => ({
    list: [
      { text: 'S.S.S', link: '' },
      { text: 'Gallery', link: '' },
      { text: 'Blog', link: '' },
      { text: 'Haberler', link: '' },
      { text: 'Etkinloer', link: '' },
    ]
  })
})
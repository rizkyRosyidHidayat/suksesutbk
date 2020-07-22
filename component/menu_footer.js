Vue.component('menu-footer', {
  template: `
  <section class="menu-footer mt-5 d-none d-md-block">
    <div class="container-lg">
      <div class="mx-5">
        <div class="row text-black-50">
          <div 
            v-for="(item, i) in menu" :key="i"
            class="col-3">
            <h5 class="font-weight-bold">{{ item.title }}</h5>
            <nav class="nav flex-column">
              <a 
                v-for="menu in item.submenu" :key="menu.text"
                class="nav-link pl-0 text-black-50" 
                :href="menu.link">
                {{ menu.text }}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    menu: [
      {
        title: 'Title Menu',
        submenu: [
          { text: 'Home', link: '' },
          { text: 'Penawaran', link: '' },
          { text: 'Daftar', link: '' },
          { text: 'Fitur', link: '' },
          { text: 'Hubungi', link: '' },
        ]
      },
      {
        title: 'Title Menu',
        submenu: [
          { text: 'Home', link: '' },
          { text: 'Penawaran', link: '' },
          { text: 'Daftar', link: '' },
          { text: 'Fitur', link: '' },
          { text: 'Hubungi', link: '' },
        ]
      },
      {
        title: 'Title Menu',
        submenu: [
          { text: 'Home', link: '' },
          { text: 'Penawaran', link: '' },
          { text: 'Daftar', link: '' },
          { text: 'Fitur', link: '' },
          { text: 'Hubungi', link: '' },
        ]
      },
      {
        title: 'Title Menu',
        submenu: [
          { text: 'Home', link: '' },
          { text: 'Penawaran', link: '' },
          { text: 'Daftar', link: '' },
          { text: 'Fitur', link: '' },
          { text: 'Hubungi', link: '' },
        ]
      },
    ]
  })
})
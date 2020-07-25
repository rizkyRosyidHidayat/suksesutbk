Vue.component('desc-section', {
  template: `
  <section class="mt-5">
    <div class="container-lg">
      <div class="d-flex justify-content-center">
        <div class="w-50 text-center text-white">
          <h3 class="text-warning font-weight-bold">
            TENTANG SUKSESUTBK
          </h3>
          <div class="card-body rounded-pill bg-white py-0 shadow my-4 d-inline-block">
            <nav class="nav justify-content-center">
              <a class="nav-link text-black-50 font-weight-bold px-0" href="index.html">
                Home
                <span class="mx-2">
                  <img src="./icon/chevron_right.svg" alt="icon">
                </span>
              </a>
              <a class="nav-link text-black-50 font-weight-bold px-0" href="tentang.html">
                Tentang Kami
              </a>
            </nav>
          </div>
          <h3>
            <span class="text-warning font-weight-bold">SUKSESUTBK</span>
            adalah lorem ipsum dolor sit amet hugos gitul diyutre
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor 
            totam ad harum nam odit doloremque repellendus ratione in?
          </p>
          <div class="row">
            <div 
              v-for="(item, i) in icon"
              class="col-3 text-center px-4">
              <div class="card rounded--lg border-0 box-icon-2 mb-3">
                <img :src="'./img/'+item.img" alt="tentang" class="w-50">
              </div>
              <p class="font-weight-bold text-black-50 h5">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    nav: [
      { text: 'Active' },
      { text: 'Active' },
      { text: 'Active' },
      { text: 'Active' },
      { text: 'Active' }
    ],
    icon: [
      { text: 'Lorem ipsum', img: 'icon-fitur.PNG' },
      { text: 'Lorem ipsum', img: 'icon-fitur.PNG' },
      { text: 'Lorem ipsum', img: 'icon-fitur.PNG' },
      { text: 'Lorem ipsum', img: 'icon-fitur.PNG' }
    ]
  })
})
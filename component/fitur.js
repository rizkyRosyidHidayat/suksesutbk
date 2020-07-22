Vue.component('fitur-section', {
  template: `
  <section class="fitur text--purple">
    <div class="container-lg">
      <div class="row align-items-center">
        <div class="col-sm-7 col-md-6 overflow-hidden" :key="fiturIndex">
          <div class="h1 font-weight-bold animate-slide">
            {{ fitur[fiturIndex].title }}
          </div>
          <div class="mb-5 text-black-50 animate-slide delay-2">
            {{ fitur[fiturIndex].desc }}
          </div>
          <div class="d-block d-md-flex align-items-md-center animate-slide delay-3 mb-3">
            <a href="#" class="btn btn--purple rounded-pill font-weight-bold btn-lg bg-white text--purple text-uppercase pr-2 shadow">
              <div class="d-flex align-items-center">
                <div class="mr-3">gabung sekarang</div>
                <span class="icon-btn-primary">
                  <svg class="bi bi-arrow-right" width="25" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                  </svg>
                </span>
              </div>
            </a>
            <a href="#" class="ml-5">
              <button
                class="btn btn--text font-weight-bold text--purple p-0 mt-sm-5 mt-md-0">
                Hubungi Kami
              </button>
            </a>
          </div>
        </div>
        <div class="col-sm-5 col-md-6 d-none d-sm-block">
          <div class="row">
            <div v-for="(item, i) in fitur" :key="i" class="col-6 fitur-item" style="margin-bottom: 32px;">
              <div 
                @click="fiturIndex = i"
                class="card shadow border-0"
                :class="{'active': i==fiturIndex?true:false}">
                <div class="card-body d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img :src="'./img/'+item.img" alt="icon fitur" class="mb-2">
                    <div class="h5 font-weight-bold">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    fitur: [
      {
        title: 'Lorem Ipsum Dolor',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita 
        saepe omnis doloremque a molestiae, illo repellat nisi facere maiores`,
        img: 'icon-fitur.PNG'
      },
      {
        title: 'Senang Sekali',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita 
        saepe omnis doloremque a molestiae, illo repellat nisi facere maiores`,
        img: 'icon-fitur.PNG'
      },
      {
        title: 'Mudah Sekali',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita 
        saepe omnis doloremque a molestiae, illo repellat nisi facere maiores`,
        img: 'icon-fitur.PNG'
      }
    ],
    fiturIndex: 0
  })
})
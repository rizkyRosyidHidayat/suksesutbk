Vue.component('testimoni-section', {
  template: `
  <section class="text-black-50 testimoni">
    <div class="d-flex justify-content-center">
      <div class="text-center testimoni-desc">
        <h2>
          Tertarik <span class="font-weight-bold text--green">Mendaftar ?</span>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Non placeat animi illum? Recusandae aperiam exercitationem 
          laudantium unde ipsam in sit nulla, reprehenderit rerum.
        </p>
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
      </div>
    </div>
    <div class="container-fluid mt-4 px-0 overflow-hidden">
      <div class="swiper-container">
        <div class="swiper-wrapper pb-4">
          <div v-for="(item, i) in testimoni" :key="i" class="swiper-slide pr-4">
            <div class="card-body rounded-lg shadow bg-white d-flex align-items-center">
              <div>
                <div class="h5 font-weight-bold">{{ item.title }}</div>
                <div class="desc-testimoni">
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    iconColor: '#7F7F7F',
    testimoni: [
      {
        title: 'Rizky Rosyid H',
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.
        `
      },
      {
        title: 'Rizky Rosyid H',
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.
        `
      },
      {
        title: 'Rizky Rosyid H',
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.
        `
      },
      {
        title: 'Rizky Rosyid H',
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.
        `
      },
      {
        title: 'Rizky Rosyid H',
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.
        `
      },
    ]
  })
})
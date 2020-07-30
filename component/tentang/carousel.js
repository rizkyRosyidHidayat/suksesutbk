Vue.component('carousel-section', {
  template: `
  <section class="carousel">
    <div class="container-fluid overflow-hidden">
      <div class="row justify-content-between">
        <div class="col-12 col-md-6 text-black-50 z-index-1 mb-5 mb-md-0" style="background-color: #F3F7FC;">
          <h3 class="mb-3">
            <span class="text-warning font-weight-bold">EDUBRAND</span>
            <br>
            PT. EDU INOVASI INDONESIA
          </h3>
          <p>
            Perusahaan startup teknologi yang berfokus pada pendidikan. 
            Edubrand menawarkan platform pembelajaran berbasis teknologi 
            terkini dengan fitur, analisis & benefit terlengkap
          </p>
          <div class="d-flex justify-content-end">
            <div class="navigasi">
              <div class="btn btn-nav-left shadow rounded-pill text-center mr-3 bg-white">
                <svg viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <img src="./icon/dash.svg" alt="icon" class="dash-left">
              </div>
              <div class="btn btn-nav-right shadow rounded-pill text-center bg-white">
                <img src="./icon/dash.svg" alt="icon" class="dash-right">
                <svg viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="swiper-container-tentang">
            <div class="swiper-wrapper position-static">
              <div v-for="(item, i) in img" class="swiper-slide shadow mb-3">
                <img :src="'./img/tentang/'+item" alt="slide">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    img: ['gb1_1.png', 'gb1_1.png', 'gb1_1.png', 'gb1_1.png']
  })
})
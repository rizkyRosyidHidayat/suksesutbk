Vue.component('testimoni-fitur', {
  template: `
  <section class="text-black-50 testimoni">
    <div class="d-flex justify-content-center">
      <div class="text-center testimoni-desc">
        <h2 class="font-weight-bold text-danger">
          Mau kuliah di PTN Favorit ?
        </h2>
      </div>
    </div>
    <div class="container-fluid mt-4 px-0 overflow-hidden">
      <div class="swiper-container-testimoni-fitur">
        <div class="swiper-wrapper pb-4">
          <div v-for="(item, i) in testimoni" :key="i" class="swiper-slide pr-4">
            <div class="card-body rounded--lg shadow bg-white d-flex align-items-center">
              <div class="media">
                <img src="./icon/account_outline.svg" class="mr-1" width="60" alt="icon">
                <div class="media-body">
                  <div class="h5 font-weight-bold mb-0">{{ item.title }}</div>
                  <p>{{ item.subtitle }}</p>
                  <div class="desc-testimoni pl-0 mt-4">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mb-3 mt-5">
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
  </section>
  `,
  data: () => ({
    testimoni: [
      {
        title: 'M.RENDY KURNIAWAN',
        subtitle: '',
        desc: `
        Brand Campus System, dengan analisis lengkap memberikan gambaran utuh pilihan program studi yang saya rencanakan.
        `
      },
      {
        title: 'ANNAFI FIRDAUS SAFITRI',
        subtitle: '',
        desc: `
        Edubrand sangat membantu saya masuk ke perguruan tinggi. Di Edubrand saya diarahkan agar bisa lolos di PTN Favorit.
        `
      },
      {
        title: 'AIDA RAHMA',
        subtitle: '',
        desc: `
        Platform Sukses UTBK Edubrand soal-soal TryOutnya prediktif. Nilai UTBK tinggi, bukan hanya mimpi.
        `
      },
      {
        title: 'ALFATIKA ISTIQOMAH',
        subtitle: '',
        desc: `
        Komposisi soal TryOut Sukses UTBK Edubrand, mirip dengan UTBK yang sesungguhnya. Trima kasih Edubrand!!.
        `
      },
      {
        title: 'SARIFATUL FATIMAH',
        subtitle: '',
        desc: `
        Selama di Edubrand, saya diberikan pemahaman tentang prospek Program Studi dan PTN-PTN Favorit.
        `
      },
    ]
  })
})
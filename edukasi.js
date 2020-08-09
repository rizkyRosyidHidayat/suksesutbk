Vue.component('edukasi-section', {
  template: `
  <section class="edukasi text-black-50">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6 mb-5 mb-sm-0">
          <div class="position-relative text-left">
            <img src="./img/education-bg.svg" alt="edukasi" class="w-75">
            <img src="./img/landing-hero.png" alt="edukasi" class="w-100 position-absolute" style="top: 0;left: 0;">
          </div>
        </div>
        <div class="col-sm-6 col-md-5">
          <div class="h2 font-weight-bold text--blue">Platform TryOut UTBK Terbaik</div>
          <div class="h2 mb-sm-1 mb-md-3">Dengan Fitur & Fasilitas terlengkap</div>
          <p class="mb-sm-3 mb-md-5">
            TryOut Ujian Tulis Berbasis Komputer [UTBK] SBMPTN/MANDIRI 2021, dengan regulasi terbaru LTMPT, berbagai fitur & benefit terlengkap.
          </p>
          <div class="row">
            <div
              v-for="item in edukasi" :key="item.title" 
              class="col-12 col-sm-6">
              <div class="d-flex align-items-center mb-4">
                <div class="box-icon bg-white shadow flex-shrink-0">
                  <img :src="'./img/'+item.img" alt="edukasi">
                </div>
                <b class="ml-3 ml-md-4">
                  {{ item.title }}
                </b>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center mt-sm-3 mt-md-5">
            <a href="#" class="btn btn--blue rounded-pill font-weight-bold btn-lg text-white text-uppercase pr-2 shadow">
              <div class="d-flex align-items-center">
                <div class="mr-3">coba tryout gratis</div>
                <span class="icon-btn-primary bg-white">
                  <svg class="bi bi-arrow-right" width="25" viewBox="0 0 16 16" fill="#428AF7" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                  </svg>
                </span>
              </div>
            </a>
            <a href="https://suksesutbk.com/peserta/signup" target="_blank" class="ml-0 ml-md-5 d-none">
              <button
                class="btn btn--text font-weight-bold text--blue p-0 mt-5 mt-md-0">
                Hubungi Kami
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    edukasi: [
      { title: 'Materi Uji Standar LTMPT', img: 'icon-edukasi1.png' },
      { title: 'Rekomendasi PTN/Prodi', img: 'icon-edukasi2.png' },
      { title: 'Target & Pencapaian Nilai', img: 'icon-edukasi3.png' },
      { title: 'Rasionalisasi UTBK 2021', img: 'icon-edukasi4.png' },
      { title: 'Review & Pembahasan Soal', img: 'icon-edukasi5.png' },
      { title: 'Assessment Report Lengkap', img: 'icon-edukasi6.png' },
      { title: 'Statistik Progress TryOut', img: 'icon-edukasi7.png' },
      { title: 'Bank Soal Prediktif', img: 'icon-edukasi8.png' },

    ]
  })
})
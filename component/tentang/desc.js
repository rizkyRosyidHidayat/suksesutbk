Vue.component('desc-section', {
  template: `
  <section class="mt-5">
    <div class="container-lg">
      <div class="d-flex justify-content-center">
        <div class="w-sm-100 w-50 text-center text-white">
          <h3 class="text-warning font-weight-bold">
            EDUBRAND SYSTEM
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
                About us
              </a>
            </nav>
          </div>
          <h3>
            <span class="text-warning font-weight-bold">PLATFORM APLIKASI</span> <br>
            TryOut Ujian Tulis Berbasis Komputer [UTBK 2021] berbasis web, android dan iOS.
          </h3>
          <p>
            Aplikasi dengan teknologi terkini yang dilengkapi dengan fitur analisa hasil tes yang lengkap serta Assessment Report terbaik.
          </p>
          <div class="row" style="margin-top: 130px;">
            <div 
              v-for="(item, i) in icon"
              class="col-6 col-sm-3 text-center px-2 px-sm-4 mb-4 mb-sm-0">
              <div class="card rounded--lg border-0 box-icon-2 mb-3">
                <img :src="'./img/tentang/'+item.img" alt="tentang" class="w-50">
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
      { text: 'Brand Campus System', img: 'icon-fitur.png' },
      { text: 'Assessment Kompetensi Siswa', img: 'icon-aksi.png' },
      { text: 'Brand Assessment Report', img: 'icon-report.png' },
      { text: 'Tes Bakat Skolastik Terpadu', img: 'icon-tbs.png' }
    ]
  })
})
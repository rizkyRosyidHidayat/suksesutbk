Vue.component('paket-paket', {
  template: `
    <section class="paket">
      <div class="container-lg">
        <div class="row">
          <div 
            v-for="(item, i) in paket" :key="i"
            class="col-12 col-md-4 px-3 mb-4 mb-md-0 card-paket">
            <div class="card border-0 rounded--lg shadow overflow-hidden">
              <div class="card-header bg-white">
                <h5 class="card-title d-flex font-weight-bold justify-content-between my-1">
                  <div>{{ item.title }}</div>
                  <div>Rp. {{ item.price }}</div>
                </h5>
              </div>
              <div class="card-body">
                <div 
                  v-for="(list, i) in item.list" :key="i"
                  class="d-flex align-items-center">
                  <svg :fill="item.color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path d="M10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
                  </svg>
                  <div                     
                    class="ml-2 font-weight-bold">{{ list }}</div>
                </div>
              </div>
              <div class="card-footer border-0 bg-white">
                <a href="#" class="btn btn--primary rounded-pill btn-block font-weight-bold btn-lg text-uppercase pr-2">
                  <div class="d-flex align-items-center">
                    <div class="mr-3 mr-sm-0 w-100 text-center">beli paket</div>
                    <span class="icon-btn-primary shadow flex-shrink-0 ml-auto">
                      <svg class="bi bi-arrow-right" width="25" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data: () => ({
    paket: [
      {
        title: 'SUKSES-1',
        price: '75.000',
        list: [
          '2X TryOut',
          'Penilaian sistem IRT',
          'Materi Uji Standar LTMPT',
          'Peringkat Nasional',
          'Rekomendasi PTN/Prodi',
          'Assessment Report Lengkap',
          'Rasionalisasi UTBK 2021',
          'Review & Pembahasan Soal',
          'Target & Pencapaian Nilai',
          'Statistik Progress TryOut',
          'Bank Soal Lengkap',
        ],
        color: '#ffca2a'
      },
      {
        title: 'SUKSES-2',
        price: '140.000',
        list: [
          '3X TryOut',
          'Penilaian sistem IRT',
          'Materi Uji Standar LTMPT',
          'Peringkat Nasional',
          'Rekomendasi PTN/Prodi',
          'Assessment Report Lengkap',
          'Rasionalisasi UTBK 2021',
          'Review & Pembahasan Soal',
          'Target & Pencapaian Nilai',
          'Statistik Progress TryOut',
          'Bank Soal Prediktif',
        ],
        color: '#3d8cff'
      },
      {
        title: 'SUKSES-3',
        price: '200.000',
        list: [
          '4X TryOut',
          'Penilaian sistem IRT',
          'Materi Uji Standar LTMPT',
          'Peringkat Nasional',
          'Rekomendasi PTN/Prodi',
          'Assessment Report Lengkap',
          'Rasionalisasi UTBK 2021',
          'Review & Pembahasan Soal',
          'Target & Pencapaian Nilai',
          'Statistik Progress TryOut',
          'Bank Soal Prediktif',
        ],
        color: '#ff6845'
      }
    ]
  })
})

import './text_field.js'
import './textarea.js'

Vue.component('form-fitur', {
  template: `
  <section class="form-kontak">
    <div class="container-lg">
      <div class="h2 font-weight-bold mb-5 text-center text--purple">Frequently Asked Questions</div>
      <div class="row">
        <div class="col-12 col-md-6 order-2 order-md-1">
          <ul class="list-group list-group-flush text-black-50">
            <li
              v-for="(item, i) in list" :key="i" 
              class="list-group-item border-bottom-0"
              :class="{'notActive': item.active===false?true:false}">                
              <div class="card border-0 rounded--lg overflow-hidden">
                <div 
                  @click="activated(i, item.active)"
                  class="card-header bg-transparent">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="h5 font-weight-bold mb-0 text--purple">{{ item.title }}</div>
                    <svg class="flex-shrink-0 ml-3" fill="#7569de" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30px" style="-ms-transform: rotate(90deg); -webkit-transform: rotate(90deg); transform: rotate(90deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                      <path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8M8.6 16.6l4.6-4.6l-4.6-4.6L10 6l6 6l-6 6l-1.4-1.4z"/>
                    </svg>
                  </div>
                </div>
                <div 
                  class="card-body">
                  <p class="card-text">{{ item.desc }}</p>
                </div>
              </div>
            </li>
            <li class="list-group-item"></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 order-1 order-md-2 mb-5 mb-md-0">
          <div class="card border-0 rounded--lg shadow overflow-hidden">
            <div class="card-header h5 text--primary font-weight-bold text-center border-0 bg-white">
              HUBUNGI KAMI
            </div>
            <div class="card-body">
              <text-field-kontak
                label="Nama Lengkap"
                id="namaLengkap"
              ></text-field-kontak>
              <div class="d-flex mt-4 mt-sm-5 flex-column flex-sm-row">
                <text-field-kontak
                  label="E-mail"
                  id="email"
                ></text-field-kontak>
                <text-field-kontak
                  label="Nomor Handphone"
                  id="nomor"
                  class="mt-1 mt-sm-0"
                ></text-field-kontak>
              </div>
              <text-area
                label="Pesan"
                id="pesan"
              ></text-area>
            </div>
            <div class="card-footer bg-white border-0 pb-4">
              <button type="submit" class="btn btn-block btn--primary bg--primary rounded-pill font-weight-bold btn-lg text-white text-uppercase pr-2 shadow">
                <div class="d-flex align-items-center">
                  <div class="flex-grow-1 text-center">kirim pesan</div>
                  <span class="icon-btn-primary icon-plus ml-auto bg-white">
                    <svg width="25px" viewBox="0 0 16 16" class="bi bi-plus" fill="#F57045" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                      <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    list: [
      {
        title: 'Bagaimana sistem penilaian tryout UTBK di Edubrand System?',
        desc: `Penilaian menggunakan sistem IRT (Item Response Theory) mengikuti sistem penilaian LTMPT dengan karakteristik, tingkat kesulitan & skor setiap butir yang berbeda.`,
        active: false
      },
      {
        title: 'Apakah soal tryout Edubrand mengikuti aturan UTBK?',
        desc: `Format, komposisi & kisi-kisi soal Tryout UTBK di Edubrand System mengikuti aturan UTBK LTMPT.`,
        active: false
      },
      {
        title: 'Kapan nilai,peringkat & hasil lainnya keluar?',
        desc: `Assessment Report lengkap, Nilai Nasional, peringkat, dll keluar secara realtime`,
        active: false
      },
      {
        title: 'Apakah saya akan mendapatkan pembahasan setelah mengikuti tryout?',
        desc: `Semua peserta akan mendapatkan pembahasan setelah tryout selesai. Pembahasan akan disertai dengan review pengerjaan setiap butir soal`,
        active: false
      }
    ]
  }),
  methods: {
    activated(index, val) {
      this.list.map((x, i) => {
        if (i == index) {
          x.active = !val
        } else {
          x.active = false
        }
      })
    }
  }
})
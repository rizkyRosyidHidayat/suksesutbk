import './text_field.js'
import './textarea.js'

Vue.component('form-kontak', {
  template: `
  <section class="form-kontak">
    <div class="container-lg d-flex justify-content-center">
      <div class="w-sm-80">
        <div class="row">
          <div class="col-12 col-md-6 order-2 order-md-1 mt-5 mt-md-0">
            <div class="card border-0 rounded--lg shadow overflow-hidden">
              <div class="card-header h5 text--primary font-weight-bold text-center border-0 bg-white">
                Contact Form
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
                    label="Nomor HP/WA"
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
                <button type="submit" class="btn btn-block btn--primary bg--primary rounded-pill font-weight-bold btn-lg text-white text-uppercase pr-2 shadow animate-slide delay-3">
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
          <div class="col-12 col-md-6 order-1 order-md-2">
            <div class="h2 font-weight-bold text--primary">Hubungi Kami</div>                  
            <p class="mb-sm-3">
              Anda dapat mengirimkan komentar, saran, dan pertanyaan Anda menggunakan informasi di bawah ini.
            </p>
            <div class="row">
              <div
                v-for="item in edukasi" :key="item.title" 
                class="col-12">
                <div class="d-flex align-items-center mb-4">
                  <div class="box-icon bg-white shadow flex-shrink-0">
                    <img :src="'./icon/'+item.img" alt="edukasi">
                  </div>
                  <div class="ml-3 ml-md-4">
                    <div class="font-weight-bold text-black-50">
                      {{ item.title }}
                    </div>
                    <b>
                      {{ item.desc }}
                    </b>
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
    edukasi: [
      { title: 'Alamat', img: 'marker.svg', desc: `Jl. Ketileng Indah Raya, Mutiara Gading A7, Kota Semarang, Jawa Tengah` },
      { title: 'Email', img: 'mail.svg', desc: `admin@edubrand.id` },
      { title: 'Telp/HP/WA', img: 'headphone.svg', desc: `085-7272-44-000` },
      { title: 'Instagram', img: 'play.svg', desc: `@suksesutbk` },
    ]
  })
})
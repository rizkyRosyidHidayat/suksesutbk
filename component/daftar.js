import './text_field.js'

Vue.component('daftar-section', {
  template: `
  <section class="daftar">
    <div class="container-lg">
      <img src="./img/footer-bg.svg" alt="footer" class="daftar-bg">
      <div class="card border-0 bg--purple rounded--lg overflow-hidden shadow-lg">
        <div class="card-body p-0">
          <form class="form-bg row justify-content-between align-items-center p-5">
            <div class="text-white col-sm-12 col-md-4 mb-5 mb-sm-0">
              <h2>
                Daftar <span class="text-warning font-weight-bold">Sekarang</span>
              </h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit maiores ipsa inventore facere praesentium ea quisquam.
              </div>
            </div>
            <div class="col-sm-12 col-md-8 d-block d-sm-flex mt-sm-5">
              <text-field
                id="nohp"
                label="Nomor Handphone"
              ></text-field>
              <text-field
                id="nama"
                label="Nama Lengkap"
              ></text-field>
              <button class="btn btn--primary rounded-pill bg-white text--primary text-uppercase ml-0 ml-sm-5 pr-2 shadow">
                <div class="d-flex align-items-center">
                  <div class="mr-3 font-weight-bold">daftar</div>
                  <span class="icon-btn-primary">
                    <svg class="bi bi-arrow-right" width="25" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  `
})
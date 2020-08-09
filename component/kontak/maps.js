Vue.component('maps-section', {
  template: `
  <section class="maps mt-5">
    <div class="container-lg d-flex justify-content-center">          
      <div class="w-md-80 position-relative text-white text-center">
        <h1 class="mb-0">
          <span class="text-warning font-weight-bold">EDUBRAND</span>
          Contact
        </h1>
        <p class="text-white-50 mt-3">
          Hubungi & dapatkan layanan terbaik dari kami
        </p>
        <div class="card-body rounded-pill bg-white py-0 shadow my-4 d-inline-block">
          <nav class="nav justify-content-center">
            <a class="nav-link text-black-50 font-weight-bold px-0" href="index.html">
              Home
              <span class="mx-2">
                <img src="./icon/chevron_right.svg" alt="icon">
              </span>
            </a>
            <a class="nav-link text-black-50 font-weight-bold px-0" href="kontak.html">
              Contact
            </a>
          </nav>
        </div>
        <div class="card border-0 rounded--lg shadow-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.121971465092!2d110.4717987!3d-7.035066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe14a6d7d4a0e6915!2sEDUBRAND%20%5B%20PT%20EDU%20INOVASI%20INDONESIA%20%5D!5e0!3m2!1sid!2sid!4v1595941462500!5m2!1sid!2sid" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class="btn-maps text-center">
          <a href="#" class="btn btn--primary bg--primary rounded-pill font-weight-bold btn-lg text-white text-uppercase pr-2 shadow animate-slide delay-3">
            <div class="d-flex align-items-center">
              <div class="mr-3">daftar sekarang</div>
              <span class="icon-btn-primary bg-white">
                <svg class="bi bi-arrow-right" width="25" viewBox="0 0 16 16" fill="#F57045" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  `
})
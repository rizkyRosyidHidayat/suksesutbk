Vue.component('banner-fitur', {
  template: `
    <section class="overflow-hidden">
      <div class="container-lg">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 col-lg-5 text-white text-center text-md-left">
            <p class="h3 mb-0">Lorem ipsum dolor sit amet</p>
            <div class="h1 font-weight-bold">Suksesutbk punya banyak fitur bermanfaat</div>
            <p class="my-4 d-none d-md-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis accusantium nesciunt minima tempora provident, 
              autem quas perspiciatis voluptas inventore ipsum officia accusamus laborum at odit ullam adipisci quidem consectetur sunt.
            </p>
            <a href="#" class="btn btn--primary rounded-pill font-weight-bold btn-lg bg-white text--primary text-uppercase pr-2 shadow">
              <div class="d-flex align-items-center">
                <div class="mr-3">daftar sekarang</div>
                <span class="icon-btn-primary">
                  <svg class="bi bi-arrow-right" width="25" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                  </svg>
                </span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6 col-lg-7 mt-5 mt-md-0">
            <img src="./img/landing-hero.png" alt="education-bg" class="img-banner">
          </div>
        </div>
      </div>
    </section>
  `
})
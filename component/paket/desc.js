Vue.component('desc-paket', {
  template: `
  <section class="mt-5">
    <div class="container-lg d-flex justify-content-center">          
      <div class="w-md-80 position-relative text-white text-center">
        <h1 class="mb-0">
          <span class="text-warning font-weight-bold">PAKET</span>
          UTBK
        </h1>
        <p class="text-white mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis tempora, veniam nulla sunt impedit <br> numquam eaque 
          natus recusandae beatae doloremque perspiciatis
        </p>
        <div class="card-body rounded-pill bg-white py-0 shadow my-4 d-inline-block">
          <nav class="nav justify-content-center">
            <a class="nav-link text-black-50 font-weight-bold px-0" href="index.html">
              Home
              <span class="mx-2">
                <img src="./icon/chevron_right.svg" alt="icon">
              </span>
            </a>
            <a class="nav-link text-black-50 font-weight-bold px-0" href="paket.html">
              Paket
            </a>
          </nav>
        </div>
      </div>
    </div>
  </section>
  `
})
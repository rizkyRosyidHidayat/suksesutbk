Vue.component('event-section', {
  template: `
  <section class="event">
    <div class="container-lg">
      <div class="row">
        <div class="col-6 col-sm-4 col-md-3 mb-4 order-2 order-md-1">
          <div class="card border-0 position-relative overflow-hidden rounded--lg">
            <img src="./img/ocid.jpg" class="w-100" alt="event">
            <div class="card-body position-absolute d-flex align-items-end desc-event" style="bottom: 0;">
              <div class="text-white">
                <h4>UTBK Online Indonesia</h4>
                <div>11/11/2020</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-4 order-3 order-md-2">
          <div class="card border-0 position-relative overflow-hidden rounded--lg">
            <img src="./img/ocid.jpg" class="w-100" alt="event">
            <div class="card-body position-absolute d-flex align-items-end desc-event" style="bottom: 0;">
              <div class="text-white">
                <h4>UTBK Online Indonesia</h4>
                <div>11/11/2020</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 text-black-50 mb-4 order-1 order-md-3">
          <div class="h3 font-weight-bold text--purple">Event Menarik Sekali</div>
          <p class="h3">Gabung Saja Jika Tertarik</p>
          <p class="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Temporibus nisi magni voluptatibus.
          </p>
          <a href="#">
            <button
              @mouseover="iconColor = '#F57045'"
              @mouseleave="iconColor = '#7F7F7F'"
              class="btn btn--text font-weight-bold text-black-50 px-0">
              HUBUNGI KAMI
              <span class="icon-text-animate">
                <svg class="bi bi-arrow-right" width="30" :fill="iconColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                </svg>
              </span>
            </button>
          </a>
        </div>
        <div class="col-6 col-sm-4 col-md-3 order-4 mb-4">
          <div class="card border-0 position-relative overflow-hidden rounded--lg">
            <img src="./img/ocid.jpg" class="w-100" alt="event">
            <div class="card-body position-absolute d-flex align-items-end desc-event" style="bottom: 0;">
              <div class="text-white">
                <h4>UTBK Online Indonesia</h4>
                <div>11/11/2020</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-8 col-md-6 order-5 mb-4">
          <div class="card border-0 position-relative overflow-hidden rounded--lg diff">
            <img src="./img/ocid.jpg" alt="event">
            <div class="card-body position-absolute d-flex align-items-end desc-event" style="bottom: 0;">
              <div class="text-white">
                <h4>UTBK Online Indonesia</h4>
                <div>11/11/2020</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-3 order-6">
          <div class="card border-0 position-relative overflow-hidden rounded--lg">
            <img src="./img/ocid.jpg" class="w-100" alt="event">
            <div class="card-body position-absolute d-flex align-items-end desc-event" style="bottom: 0;">
              <div class="text-white">
                <h4>UTBK Online Indonesia</h4>
                <div>11/11/2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    iconColor: '#7F7F7F'
  })
})
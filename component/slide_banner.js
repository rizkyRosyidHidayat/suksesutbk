Vue.component('slide-banner', {
  template: `
  <div class="slider text-white overflow-hidden">
    <div class="container-lg">
      <div class="row">
        <div class="col-sm-8 col-md-6 z-index-3">
          <div class="slide-item text-center text-sm-left" :key="slidesIndex">
            <div class="h3 font-weight-light animate-slide delay-1">{{ slide.title }}</div>
            <div class="h1 font-weight-bold text-capitalize mb-5 animate-slide delay-2">
              {{ slide.desc }}
            </div>
            <a :href="slide.link" class="btn btn--primary rounded-pill font-weight-bold btn-lg bg-white text--primary text-uppercase pr-2 shadow animate-slide delay-3">
              <div class="d-flex align-items-center">
                <div class="mr-3">gabung sekarang</div>
                <span class="icon-btn-primary">
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
      <img :src="'./img/'+slide.img" :key="slidesIndex" alt="image change" class="image-change animate-slide-image z-index-1">
      <div class="pagination z-index-3 position-relative">
        <div class="d-flex justify-content-center w-100">
          <span 
            v-for="item in slides.length" :key="item"
            class="dot"
            :class="{'active shadow': item-1==slidesIndex?true:false}"
            @click="changeSlide(item-1)"
          ></span>
        </div>
      </div>
    </div>
  </div>
  `,
  data: () => ({
    slides: [
      { title: 'Penawaran terbaik tahun ini', desc: `
        bergabung bersama kami sekarang juga
      `, link: '#', img: 'image.webp' },
      { title: 'Penawaran terbaik tahun ini', desc: `
        bergabung bersama kami sekarang juga
      `, link: '#', img: 'image1.webp' },
      { title: 'Penawaran terbaik tahun ini', desc: `
        bergabung bersama kami sekarang juga
      `, link: '#', img: 'image2.webp' },
      { title: 'Penawaran terbaik tahun ini', desc: `
        bergabung bersama kami sekarang juga
      `, link: '#', img: 'image3.webp' }
    ],
    slidesIndex: 0
  }),
  computed: {
    slide() {
      return this.slides[this.slidesIndex]
    }
  },
  methods: {
    changeSlide(val) {
      this.slidesIndex = val
    }
  }
})
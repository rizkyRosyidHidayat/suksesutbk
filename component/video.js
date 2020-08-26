import './modal.js'

Vue.component('video-testimoni', {
  template: `
  <div class="container-fluid video px-0">
    <div class="swiper-container-video">
      <div class="swiper-wrapper pb-4">
        <div 
          v-for="(item, i) in video" :key="i"
          class="swiper-slide row mr-4 pb-5">
          <div class="col-12 col-sm-6 mb-3 mb-sm-0">
            <div 
              :style="{'background-image': item.img}"
              class="card shadow-lg border-0 rounded--lg">
              <a 
                href="javascript:void(0)" 
                class="icon-footer"
                @click="visible=true;linkShow=item.link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M8 5.14v14l11-7l-11-7z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="h5 font-weight-bold">
              {{ item.title }}
            </div>
            <div class="desc-testimoni">
              {{ item.desc }}
            </div>
            <a href="https://api.whatsapp.com/send?phone=6285727244000" target="_blank">
              <button                
                @mouseover="iconColor = '#F57045'"
                @mouseleave="iconColor = '#7F7F7F'"
                class="btn btn--text font-weight-bold text-black-50 px-0 mt-5">
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
        </div>
      </div>
      <div class="swiper-pagination-video text-center"></div>
    </div>

    <modal-video :link="linkShow" :visible="visible" @hidden="hidden"></modal-video>
  </div>
  `,
  data: () => ({
    iconColor: '#7F7F7F',
    linkShow: '',
    visible: false,
    video: [
      {
        video: '',
        img: `url(./img/vid-1.JPG)`,
        title: `Protokol Covid19 untuk UTBK 2020`,
        desc: `
        UTBK 2020 di tengah wabah pandemi Covid19, dilaksanakan dengan protokol khusus`,
        link: 'https://www.youtube.com/embed/-BIu2ghBRjg'
      },
      {
        video: '',
        img: `url(./img/vid-2.JPG)`,
        title: `Sosialisasi UTBK-SBMPTN 2020`,
        desc: `
        Sosialisasi Pelaksanaan UTBK-SBMPTN 2020 dalam kondisi pandemi covid-19 [20 Mei 2020]`,
        link: 'https://www.youtube.com/embed/h5woG-mCPu4'
      },
      {
        video: '',
        img: `url(./img/vid-3.JPG)`,
        title: `Konferensi Pers Pelaksanaan UTBK 2020.`,
        desc: `
        Konferensi Pers Daring tentang Pelaksanaan UTBK pada Kondisi Normal Baru (New Normal)`,
        link: 'https://www.youtube.com/embed/P1aLwSwwEUQ'
      },
      {
        video: '',
        img: `url(./img/vid-4.JPG)`,
        title: `Konferensi Pers Pelaksanaan UTBK 2020 Tahap-1.`,
        desc: `
        Konferensi Pers Daring tentang Pelaksanaan UTBK Tahap-1`,
        link: 'https://www.youtube.com/embed/4SwDHmhZsj0'
      },
      {
        video: '',
        img: `url('./img/vid-5.JPG')`,
        title: `Tips Lolos UTBK SBMPTN`,
        desc: `
        Ngobrol Pendidikan : Tips Lolos UTBK PTN Bersama Wakil Ketua II LTMPT Prof.DR. Sutrisna Wibawa`,
        link: 'https://www.youtube.com/embed/Djd4ZBza-QQ'
      },
    ]
  }),
  methods: {
    hidden(val) {
      this.visible = val
    }
  }
})
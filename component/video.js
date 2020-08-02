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
            <a href="#">
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
        img: `url(./img/ocid.jpg)`,
        title: `Lorem ipsum dolor sit, amet consectetur.`,
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.`,
        link: 'https://www.youtube.com/embed/rz-NuNWxHck'
      },
      {
        video: '',
        img: `url(./img/ocid.jpg)`,
        title: `Lorem ipsum dolor sit, amet consectetur.`,
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.`,
        link: 'https://www.youtube.com/embed/QHsBYXrHrfM'
      },
      {
        video: '',
        img: `url(./img/ocid.jpg)`,
        title: `Lorem ipsum dolor sit, amet consectetur.`,
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.`,
        link: 'https://www.youtube.com/embed/rz-NuNWxHck'
      },
      {
        video: '',
        img: `url(./img/ocid.jpg)`,
        title: `Lorem ipsum dolor sit, amet consectetur.`,
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.`,
        link: 'https://www.youtube.com/embed/rz-NuNWxHck'
      },
      {
        video: '',
        img: `url('./img/ocid.jpg')`,
        title: `Lorem ipsum dolor sit, amet consectetur.`,
        desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, 
        eligendi, repellendus impedit voluptates inventore omnis cum corporis.`,
        link: 'https://www.youtube.com/embed/rz-NuNWxHck'
      },
    ]
  }),
  methods: {
    hidden(val) {
      this.visible = val
    }
  }
})
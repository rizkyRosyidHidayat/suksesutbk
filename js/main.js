import '../component/fixed_header.js'
import '../component/header.js'
import '../component/slide_banner.js'
import '../component/fitur.js'
import '../component/edukasi.js'
import '../component/event.js'
import '../component/testimoni.js'
import '../component/daftar.js'
import '../component/menu_footer.js'
import '../component/footer.js'
import '../component/market.js'
import '../component/video.js'
import '../component/hidden_menu.js'
import '../component/kontak/maps.js'
import '../component/kontak/form.js'
import '../component/tentang/desc.js'
import '../component/tentang/carousel.js'
import '../component/tentang/tabs.js'
import '../component/tentang/form.js'
import '../component/fitur/banner.js'
import '../component/fitur/fitur.js'
import '../component/fitur/team.js'
import '../component/fitur/media.js'
import '../component/fitur/testimoni.js'
import '../component/fitur/form.js'

const app = new Vue({
  el: '#app',
  data: {
    navbar: [
      { text: 'Home', link: 'index.html', child: [] },
      // { text: 'Penawaran', link: 'javascript:void(0)', child: [
      //   { 
      //     text: 'Menarik Sekali',
      //     link: '#',
      //     desc: {
      //       title: 'Menarik',
      //       desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      //       Necessitatibus suscipit, alias quia illo harum debitis consequuntur. 
      //       Eius ut facilis, tempore, libero at nemo laudantium hic architecto 
      //       fugit dolore, quidem iste.`
      //     },
      //     aktif: true
      //   },
      //   { 
      //     text: 'Mudah Sekali',
      //     link: '#',
      //     desc: {
      //       title: 'Mudah',
      //       desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      //       Necessitatibus suscipit, alias quia illo harum debitis consequuntur. 
      //       Eius ut facilis, tempore, libero at nemo laudantium hic architecto 
      //       fugit dolore, quidem iste.`
      //     },
      //     aktif: false
      //   },
      // ] },
      { text: 'Tentang Kami', link: 'tentang.html', child: [] },
      { text: 'Fitur', link: 'fitur.html', child: [] },
      { text: 'Paket', link: '#', child: [] },
      { text: 'Kontak', link: 'kontak.html', child: [] }
    ],  
    visibleMenu: false  
  },
  methods: {
    changeVisible(val) {
      this.visibleMenu = val
    }
  }
})

var header = document.querySelector('#fixedHeader')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      header.style.cssText = "top: 0px"
  } else {
      header.style.cssText = "top: -90px"
  }
}

const testimoni = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  // spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})
const video = new Swiper('.swiper-container-video', {
  slidesPerView: 'auto',
  centeredSlides: true,
  // spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination-video',
    clickable: true,
  }
})
const tentang = new Swiper('.swiper-container-tentang', {
  slidesPerView: 'auto',
  // centeredSlides: true,
  spaceBetween: 16,
  grabCursor: true,
  // loop: true
  navigation: {
    nextEl: '.btn-nav-right',
    prevEl: '.btn-nav-left',
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    }
  }
})
const team = new Swiper('.swiper-container-team', {
  slidesPerView: 'auto',
  // centeredSlides: true,
  // spaceBetween: 16,
  grabCursor: true,
  // loop: true,
  navigation: {
    nextEl: '.btn-nav-right',
    prevEl: '.btn-nav-left',
  },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 16
  //   },
  //   500: {
  //     slidesPerView: 1,
  //   }
  // }
})
const testimoni_fitur = new Swiper('.swiper-container-testimoni-fitur', {
  slidesPerView: 'auto',
  centeredSlides: true,
  // spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: '.btn-nav-right',
    prevEl: '.btn-nav-left',
  },
})
import '../component/header.js'
import '../component/slide_banner.js'
import '../component/fitur.js'
import '../component/edukasi.js'
import '../component/event.js'

const app = new Vue({
  el: '#app',
  data: {
    navbar: [
      { text: 'Home', link: '#', child: [] },
      { text: 'Penawaran', link: 'javascript:void(0)', child: [
        { 
          text: 'Menarik Sekali',
          link: '#',
          desc: {
            title: 'Menarik',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Necessitatibus suscipit, alias quia illo harum debitis consequuntur. 
            Eius ut facilis, tempore, libero at nemo laudantium hic architecto 
            fugit dolore, quidem iste.`
          },
          aktif: true
        },
        { 
          text: 'Mudah Sekali',
          link: '#',
          desc: {
            title: 'Mudah',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Necessitatibus suscipit, alias quia illo harum debitis consequuntur. 
            Eius ut facilis, tempore, libero at nemo laudantium hic architecto 
            fugit dolore, quidem iste.`
          },
          aktif: false
        },
      ] },
      { text: 'Tentang Kami', link: '#', child: [] },
      { text: 'Kontak', link: '#', child: [] },
      { text: 'Aplikasi', link: '#', child: [] }
    ],    
  }
})

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
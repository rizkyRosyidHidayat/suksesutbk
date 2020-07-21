Vue.component('market-section', {
  template: `
  <section class="market">
    <div class="container-lg">
      <h1>
        <span class="font-weight-bold text-warning">
          Suksesutbk
        </span>
        Market
      </h1>
      <div class="d-flex justify-content-between align-items-center">
        <div class="w-50">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sit saepe dicta velit eius, sed voluptas molestiae eos.
          </p>
          <div class="d-flex">
            <button 
              v-for="item in kategori" :key="item"
              class="btn btn--market rounded-pill"
              @click="selectedKategori=item"
              :class="{'active': item==selectedKategori?true:false}">
              <img src="./icon/circle.svg" alt="circle">
              <span class="mx-4">{{ item }}</span>
            </button>
          </div>
        </div>
        <a href="#" class="btn bg--primary rounded-pill text-white font-weight-bold px-5">
          Market
        </a>
      </div>
      <div class="row">
        <div 
          v-for="(item, i) in selectedProduk.produk" :key="i"
          class="col-3">
          <div class="card rounded--lg border-0">
            <div class="card-body text-center text--blue">
              <img :src="'./img/'+item.img" alt="market" class="w-75 shadow-lg img-market">
              <div class="mt-5">{{ selectedProduk.kategori }}</div>
              <h5 class="font-weight-bold">{{ item.title }}</h5>
            </div>
          </div>
        </div>
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
  </section>
  `,
  data: () => ({
    iconColor: '#7F7F7F',
    kategori: ['Kategori', 'Kategori 1'],
    selectedKategori: 'Kategori',
    market: [
      {
        kategori: 'Kategori',
        produk: [
          { title: 'Nama Produk', img: 'book.PNG' },
          { title: 'Nama Produk', img: 'book.PNG' },
          { title: 'Nama Produk', img: 'book.PNG' },
          { title: 'Nama Produk', img: 'book.PNG' },
        ]
      },
      {
        kategori: 'Kategori 1',
        produk: [
          { title: 'Nama Produk', img: 'book.PNG' },
          { title: 'Nama Produk', img: 'book.PNG' },
          { title: 'Nama Produk', img: 'book.PNG' },
          { title: 'Nama Produk', img: 'book.PNG' },
        ]
      }
    ]
  }),
  computed: {
    selectedProduk() {
      return this.market.filter(x => x.kategori == this.selectedKategori)[0]
    }
  }
})
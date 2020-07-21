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
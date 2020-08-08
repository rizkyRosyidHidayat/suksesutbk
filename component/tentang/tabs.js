Vue.component('tabs-section', {
  template: `
  <section class="mt-5 pt-5">
    <div class="container-lg text-black-50 text-center">
      <h3 class="font-weight-bold mb-4">
        <span class="text-danger">Layanan</span> Edubrand
      </h3>
      <nav class="nav justify-content-center mb-4">
        <a 
          v-for="(item, i) in tabs" :key="i"
          @click="tabsIndex = i"
          class="nav-link text-black-50" href="javascript:void(0)"
          :class="{'active': i==tabsIndex}">
          <img :src="'./img/tentang/'+item.img" alt="gambar">
          <p class="font-weight-bold mt-3 mb-0">
            {{ item.text }}
          </p>
        </a>
      </nav>
      <p class="text-black-50 text-center animate-fadeAway" :key="tabsIndex">
        {{ desc[tabsIndex] }}
      </p>
    </div>
  </section>
  `,
  data: () => ({
    tabs: [
      { text: 'Full Online', img: 'calendar.PNG' },
      { text: 'Semi Online', img: 'calendar.PNG' },
    ],
    desc: [
      `Layanan Edubrand berbasis Full Online: TryOut AKM, TryOut UTBK, Peminatan Peserta Didik`,
      `Layanan Edubrand berbasis Semi Online: TryOut AKM, TryOut UTBK, Peminatan Peserta Didik`,
    ],
    tabsIndex: 0
  })
})
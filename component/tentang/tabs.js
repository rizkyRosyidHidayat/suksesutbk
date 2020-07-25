Vue.component('tabs-section', {
  template: `
  <section class="mt-5 pt-5">
    <div class="container-lg text-black-50 text-center">
      <h3 class="font-weight-bold mb-4">
        <span class="text-danger">İlkokul İngilizce</span> Eğitim Türleri
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
      { text: 'Lorem ipsum', img: 'calendar.PNG' },
      { text: 'Lorem ipsum', img: 'calendar.PNG' },
      { text: 'Lorem ipsum', img: 'calendar.PNG' }
    ],
    desc: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eum ullam, esse, provident consequuntur ducimus dicta omnis
      magnam assumenda, quam consequatur saepe perferendis. 
      Libero sapiente repellat eum accusantium eos mollitia eaque!`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eum ullam, esse, provident consequuntur ducimus dicta omnis
      magnam assumenda, quam consequatur saepe perferendis. 
      Libero sapiente repellat eum accusantium eos mollitia eaque!`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eum ullam, esse, provident consequuntur ducimus dicta omnis
      magnam assumenda, quam consequatur saepe perferendis. 
      Libero sapiente repellat eum accusantium eos mollitia eaque!`
    ],
    tabsIndex: 0
  })
})
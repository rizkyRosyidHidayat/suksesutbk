Vue.component('fitur-fitur', {
  template: `
  <section class="fitur">
    <div class="container-lg">
      <div class="text-center">
        <h2>
          <span class="font-weight-bold text--purple">Lorem Ipsum Dolor Sit Amet</span><br>
          <span class="text-black-50">Uzman Ellerde</span>
        </h2>
        <p class="text-black-50 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolores dicta cupiditate minus beatae libero nostrum <br>
          recusandae, eos facere repellat omnis.
        </p>
      </div>
      <div class="row mt-5">
        <div 
          v-for="(item, i) in fitur" :key="i"
          class="col-12 col-md-4 px-4 card-fitur">
          <div 
            class="card rounded--lg border-0 shadow mt-5 mt-md-0"
            :class="{'mt-md-5 shadow-lg': i==1?true:false}">
            <div class="card-body text-center text-black-50">
              <img :src="'./img/fitur/'+item.img" alt="fitur" width="80" class="mb-4"> <br>
              <b class="title-card-fitur h5">{{ item.title }}</b>
              <div>{{ item.subtitle }}</div>
              <div class="dropdown-divider my-4"></div>
              <p>
                {{ item.desc }}
              </p>
              <a href="#" class="btn btn--primary rounded-pill my-4 font-weight-bold btn-lg text-uppercase pr-2">
                <div class="d-flex align-items-center">
                  <div class="mr-3">daftar sekarang</div>
                  <span class="icon-btn-primary shadow flex-shrink-0">
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
      </div>
    </div>
  </section>
  `,
  data: () => ({
    fitur: [
      {
        img: 'horse.PNG',
        title: 'Full Online',
        subtitle: 'Online Selalu',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quasi iusto atque nobis exercitationem dolore provident 
        illo, unde repudiandae nemo aut modi, minus amet adipisci 
        animi incidunt error ea tempora iste!`,
        link: ''
      },
      {
        img: 'abjad.PNG',
        title: 'Full Online',
        subtitle: 'Online Selalu',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quasi iusto atque nobis exercitationem dolore provident 
        illo, unde repudiandae nemo aut modi, minus amet adipisci 
        animi incidunt error ea tempora iste!`,
        link: ''
      },
      {
        img: 'lock.PNG',
        title: 'Full Online',
        subtitle: 'Online Selalu',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quasi iusto atque nobis exercitationem dolore provident 
        illo, unde repudiandae nemo aut modi, minus amet adipisci 
        animi incidunt error ea tempora iste!`,
        link: ''
      },
    ]
  })
})
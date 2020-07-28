Vue.component('media-section', {
  template: `
  <section class="media-section">
    <div class="container-lg">
      <div class="row text-black-50 align-items-center">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <h2 class="text-center text-md-left">
            <span class="font-weight-bold text--blue">Online Özel Derslerde</span><br>
            Neler Sunuyoruz
          </h2>
        </div>
        <div 
          v-for="(item, i) in media" :key="i"
          class="col-12 col-md-6 mb-5">
          <div class="media flex-column flex-md-row text-center text-md-left">
            <div class="d-flex justify-content-center w-sm-100 mb-3 mb-md-0">
              <div class="box-icon bg-white shadow-sm flex-shrink-0 mr-0 mr-md-3">
                <img :src="'./img/'+item.img" alt="edukasi">
              </div>
            </div>
            <div class="media-body">
              <h5 class="mt-0 font-weight-bold">{{ item.title }}</h5>
              {{ item.desc }}
            </div>
          </div>              
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    media: [
      {
        img: 'icon-edukasi.PNG',
        title: 'Media Heading',
        desc: `
        Cras sit amet nibh libero, in gravida nulla. 
        Nulla vel metus scelerisque ante sollicitudin. 
        Cras purus odio, vestibulum in vulputate at, 
        tempus viverra turpis. Fusce condimentum 
        nunc ac nisi vulputate fringilla.
        `
      },
      {
        img: 'icon-edukasi.PNG',
        title: 'Media Heading',
        desc: `
        Cras sit amet nibh libero, in gravida nulla. 
        Nulla vel metus scelerisque ante sollicitudin. 
        Cras purus odio, vestibulum in vulputate at, 
        tempus viverra turpis. Fusce condimentum 
        nunc ac nisi vulputate fringilla.
        `
      },
      {
        img: 'icon-edukasi.PNG',
        title: 'Media Heading',
        desc: `
        Cras sit amet nibh libero, in gravida nulla. 
        Nulla vel metus scelerisque ante sollicitudin. 
        Cras purus odio, vestibulum in vulputate at, 
        tempus viverra turpis. Fusce condimentum 
        nunc ac nisi vulputate fringilla.
        `
      },
      {
        img: 'icon-edukasi.PNG',
        title: 'Media Heading',
        desc: `
        Cras sit amet nibh libero, in gravida nulla. 
        Nulla vel metus scelerisque ante sollicitudin. 
        Cras purus odio, vestibulum in vulputate at, 
        tempus viverra turpis. Fusce condimentum 
        nunc ac nisi vulputate fringilla.
        `
      },
      {
        img: 'icon-edukasi.PNG',
        title: 'Media Heading',
        desc: `
        Cras sit amet nibh libero, in gravida nulla. 
        Nulla vel metus scelerisque ante sollicitudin. 
        Cras purus odio, vestibulum in vulputate at, 
        tempus viverra turpis. Fusce condimentum 
        nunc ac nisi vulputate fringilla.
        `
      },
    ]
  })
})
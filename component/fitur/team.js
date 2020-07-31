Vue.component('team-section', {
  template: `
  <section class="team">
    <div class="container-lg">
      <div class="text-center">
        <h2>
          <span class="font-weight-bold text--green">Sistem</span>
          <span class="text-black-50">Pembayaran</span>
        </h2>
        <p class="text-black-50 mt-4">
          Berbagai macam pilihan sistem pembayaran, 
          akan mempermudah siswa untuk mengikuti TryOut UTBK
        </p>
      </div>
      <nav class="nav justify-content-center">
        <a 
          v-for="(item, i) in tabs" :key="i"
          @click="tabsActive=item"
          class="nav-link text-black-50 font-weight-bold px-2 px-md-5" 
          :class="{'active': item==tabsActive?true:false}"
          href="javascript:void(0)">
          {{ item }}
        </a>
      </nav>
    <div>
      <div 
        class="swiper-container-team mt-5 overflow-hidden p-3">
        <div class="swiper-wrapper" style="flex-wrap: nowrap;">
          <div 
            v-for="(item, i) in teams[tabsActive]" :key="i"
            class="swiper-slide col-12 col-sm-12 col-md-6 col-lg-4 mr-1">
            <div 
              :key="tabsActive"
              class="card border-0 rounded--lg shadow animate-fadeAway">
              <div class="card-body text-center text-black-50">
                <img :src="'./img/fitur/'+item.img" alt="team" class="rounded-circle mb-3" width="90"><br>
                <b>{{ item.title }}</b>
                <div>{{ item.subtitle }}</div>
                <p class="mt-4">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
      <div class="d-flex justify-content-center mt-5">
        <div class="navigasi">
          <div class="btn btn-nav-left shadow rounded-pill text-center mr-3 bg-white">
            <svg viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            <img src="./icon/dash.svg" alt="icon" class="dash-left">
          </div>
          <div class="btn btn-nav-right shadow rounded-pill text-center bg-white">
            <img src="./icon/dash.svg" alt="icon" class="dash-right">
            <svg viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    tabs: ['Card Payment', 'Bank Transfer', 'Direct Debit', 'e-Wallet', 'Over the Counter'],
    tabsActive: 'Card Payment',
    teams: {
      "Card Payment": [
        {
          img: 'visa.png',
          title: 'VISA',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran menggunakan kartu kredit/debit dari semua Bank yang berlogo VISA`
        },
        {
          img: 'mc.png',
          title: 'MASTERCARD',
          subtitle: 'Kartu kredit/debit MasterCard',
          desc: `Pembayaran menggunakan kartu kredit/debit dari semua Bank yang berlogo MasterCard`
        },
        {
          img: 'jbx.png',
          title: 'JBX',
          subtitle: 'Kartu kredit/debit JBX',
          desc: `Pembayaran menggunakan kartu kredit/debit dari semua Bank yang berlogo JBX`
        },
        {
          img: 'amex.png',
          title: 'AMEX',
          subtitle: 'Kartu kredit/debit AMEX',
          desc: `Pembayaran menggunakan kartu kredit/debit dari semua Bank yang berlogo AMEX`
        },
      ],
      'Bank Transfer': [
        {
          img: 'va.png',
          title: 'VIRTUAL ACCOUNT',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran Transfer dengan Virtual Account semua Bank di Indonesia`
        },
        {
          img: 'bca.png',
          title: 'BCA',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran Transfer baik melalui ATM, mobile, atau internet banking BCA`
        },
        {
          img: 'bni.png',
          title: 'BNI',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran Transfer baik melalui ATM, mobile, atau internet banking BNI`
        },
        {
          img: 'mandiri.png',
          title: 'MANDIRI',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran Transfer baik melalui ATM, mobile, atau internet banking Mandiri`
        },
        {
          img: 'bersama.png',
          title: 'ATM BERSAMA',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran Transfer baik melalui ATM, mobile, atau internet banking ATM Bersama`
        },
        {
          img: 'permata.png',
          title: 'PERMATA BANK',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran Transfer baik melalui ATM, mobile, atau internet banking Permata Bank`
        },
      ], 
      'Direct Debit': [
        {
          img: 'bcaklik.png',
          title: 'BCA KLIK PAY',
          subtitle: '',
          desc: `Pembayaran melalui fasilitas Internet Banking BCA Klik Pay.`
        },
        {
          img: 'mandiriklik.png',
          title: 'MANDIRI CLICKPAY',
          subtitle: '',
          desc: `Pembayaran melalui fasilitas Internet Banking Mandiri Clickpay.`
        },
        {
          img: 'briklik.png',
          title: 'E-PAY BRI',
          subtitle: '',
          desc: `Pembayaran melalui fasilitas Internet Banking E-Pay BRI.`
        },
        {
          img: 'cimbklik.png',
          title: 'CIMB CLICKS',
          subtitle: '',
          desc: `Pembayaran melalui fasilitas Internet Banking Cimb Clicks.`
        },
        {
          img: 'briklik.png',
          title: 'DANAMON ONLINE BANKING',
          subtitle: 'Kartu kredit/debit Visa',
          desc: `Pembayaran melalui fasilitas Internet Banking Damanon Online Banking.`
        },
      ], 
      'e-Wallet': [
        {
          img: 'gopay.png',
          title: 'GOPAY',
          subtitle: '',
          desc: `Pembayaran dengan sistem e-Wallet dari akun/nomor/PIN ponsel pelanggan`
        },
        {
          img: 'tcash.png',
          title: 'T-CASH',
          subtitle: '',
          desc: `Pembayaran dengan sistem e-Wallet dari akun/nomor/PIN ponsel pelanggan`
        },
        {
          img: 'line.png',
          title: 'LINE PAY E-CASH',
          subtitle: '',
          desc: `Pembayaran dengan sistem e-Wallet dari akun/nomor/PIN ponsel pelanggan`
        },

        {
          img: 'emandiri.png',
          title: 'MANDIRI E-CASH',
          subtitle: '',
          desc: `Pembayaran dengan sistem e-Wallet dari akun/nomor/PIN ponsel pelanggan`
        },
      ], 
      'Over the Counter': [
        {
          img: 'indomaret.png',
          title: 'INDOMARET',
          subtitle: '',
          desc: `Pembayaran melalui Toserba dan Kios yang tersebar di seluruh Indonesia`
        },
        {
          img: 'alfamart.png',
          title: 'ALFAMART',
          subtitle: '',
          desc: `Pembayaran melalui Toserba dan Kios yang tersebar di seluruh Indonesia`
        },
        {
          img: 'alfamidi.png',
          title: 'ALFAMIDI',
          subtitle: '',
          desc: `Pembayaran melalui Toserba dan Kios yang tersebar di seluruh Indonesia`
        },
        {
          img: 'dan.png',
          title: 'DAN+DAN',
          subtitle: '',
          desc: `Pembayaran melalui Toserba dan Kios yang tersebar di seluruh Indonesia`
        },
      ]
    }     
  })
})
<script setup>
// Data 5 Core Services berdasarkan mandat PRD dengan copywriting gaya Koderpedia
const services = [
  {
    id: 1,
    title: 'Landing Page',
    description: 'Halaman penjualan dengan konversi tinggi yang dirancang khusus untuk mengoptimalkan campaign produk Anda dan mengubah visitor menjadi pembeli.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z' // Icon Petir (High Conversion/Speed)
  },
  {
    id: 2,
    title: 'Toko Online',
    description: 'Sistem e-commerce lengkap, mandiri, dan responsif. Memudahkan pengelolaan produk, keranjang belanja, hingga siap diintegrasikan dengan payment gateway.',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' // Icon Tas Belanja (E-commerce)
  },
  {
    id: 3,
    title: 'Company Profile',
    description: 'Website representatif, elegan, dan berkecepatan tinggi untuk membangun kredibilitas instansi atau korporasi Anda di mata klien dan investor.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5' // Icon Gedung Korporat
  },
  {
    id: 4,
    title: 'Web Application',
    description: 'Pengembangan sistem informasi internal, dashboard data, atau aplikasi berbasis web kustom yang dirancang khusus untuk otomatisasi bisnis unik Anda.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' // Icon Code/Sistem
  },
  {
    id: 5,
    title: 'Maintenance',
    description: 'Layanan perawatan rutin, optimasi kecepatan berkala, monitoring keamanan siber, dan pembaruan konten agar sistem Anda selalu prima 24/7.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z' // Icon Gear
  }
]
</script>

<template>
  <section id="services" class="bg-offWhite px-6 py-24 transition-colors duration-300 dark:bg-darkBg/50 sm:px-8 border-y border-slate-100 dark:border-slate-800/50">
    <div class="mx-auto max-w-7xl">
      
      <div class="mx-auto max-w-3xl text-center mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-secondary dark:text-primary mb-3">
          Core Services
        </h2>
        <p class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-baseWhite sm:text-4xl">
          Solusi Digital Taktis untuk Skalabilitas Bisnis Anda
        </p>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-400">
          Kami mengombinasikan keahlian teknis modern dengan strategi berorientasi konversi untuk membantu bisnis Anda tumbuh lebih cepat.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        <div 
          v-for="service in services" 
          key="service.id"
          class="group relative rounded-2xl border border-slate-200/60 bg-baseWhite p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md dark:border-slate-800 dark:bg-darkCard"
        >
          <div class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-secondary transition-colors group-hover:bg-secondary group-hover:text-baseWhite dark:bg-sky-950/50 dark:text-primary dark:group-hover:bg-primary dark:group-hover:text-darkBg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" />
            </svg>
          </div>

          <h3 class="text-xl font-bold tracking-tight text-slate-900 dark:text-baseWhite mb-3">
            {{ service.title }}
          </h3>

          <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {{ service.description }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>
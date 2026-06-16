<script setup>
// Fungsi smooth scroll untuk tombol CTA Internal
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-baseWhite px-6 py-20 transition-colors duration-300 dark:bg-darkBg sm:px-8">
    
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20">
      <div class="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-secondary/20 blur-3xl"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-4xl text-center">
      
      <div class="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold tracking-wide text-secondary dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-primary mb-6 animate-fade-in">
        🚀 Platform Digitalisasi Bisnis Terpercaya
      </div>

      <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-baseWhite sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] mb-6">
        Kami Membangun Website <br class="hidden sm:inline" />
        <span class="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Berperforma Tinggi
        </span> 
        Untuk Bisnis Anda
      </h1>

      <p class="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl leading-relaxed mb-10">
        Ubah pengunjung menjadi pelanggan. Kawan Digital menghadirkan solusi landing page, toko online, dan aplikasi web kustom yang elegan, super cepat, dan siap meningkatkan kredibilitas bisnis Anda dari skala UMKM hingga Korporasi.
      </p>

      <div class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        
        <a 
          href="https://api.whatsapp.com/send?phone=6282282029222&text=Halo%20Kawan%20Digital...%20Saya%20ingin%20berkonsultasi%20mengenai%20pembuatan%20website%20untuk%20bisnis%20saya." 
          target="_blank"
          class="w-full sm:w-auto rounded-xl bg-secondary px-8 py-4 text-base font-bold text-baseWhite shadow-lg shadow-secondary/20 transition-all hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-secondary/50"
        >
          Konsultasi Gratis Sekarang
        </a>

        <button 
          @click="scrollToSection('portfolio')"
          class="w-full sm:w-auto rounded-xl border border-slate-300 bg-baseWhite/50 backdrop-blur px-8 py-4 text-base font-bold text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-darkCard/50 dark:text-slate-300 dark:hover:bg-darkCard dark:hover:text-baseWhite hover:scale-[1.02] active:scale-[0.98]"
        >
          Lihat Portofolio Kami
        </button>
      </div>

    </div>
  </section>
</template>
<script setup>
// Fungsi untuk mengambil tahun saat ini secara dinamis
const currentYear = new Date().getFullYear()

// Fungsi smooth scroll ke atas jika logo footer di-klik
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section id="contact" class="bg-baseWhite px-6 pt-20 pb-8 transition-colors duration-300 dark:bg-darkBg sm:px-8">
    <div class="mx-auto max-w-7xl">
      
      <!-- Card Ajakan Kolaborasi Utama (CTA Banner) ala Koderpedia -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-slate-900 px-8 py-12 text-center text-baseWhite shadow-xl dark:from-darkCard dark:to-slate-950 sm:px-16 sm:py-20 mb-20">
        
        <!-- Ornamen Dekoratif Internal Card -->
        <div class="absolute inset-0 -z-0 opacity-10">
          <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary blur-2xl"></div>
          <div class="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-baseWhite blur-2xl"></div>
        </div>

        <!-- Konten Utama Card -->
        <div class="relative z-10 mx-auto max-w-2xl">
          <h3 class="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-6 leading-tight">
            Siap Mendigitalisasi Bisnis Anda Sekarang?
          </h3>
          <p class="text-base text-sky-100 sm:text-lg mb-10 leading-relaxed">
            Jangan biarkan kompetitor mendahului Anda. Diskusikan kebutuhan Landing Page, Toko Online, atau Aplikasi Kustom Anda bersama tim ahli Kawan Digital secara gratis.
          </p>
          
          <!-- Tombol Integrasi WA Mandatori PRD dengan Target _blank -->
          <a 
            href="https://api.whatsapp.com/send?phone=6282282029222&text=Halo%20Kawan%20Digital...%20Saya%20tertarik%20membangun%20sistem%20digital%20dan%20ingin%20memulai%20sesi%20konsultasi." 
            target="_blank"
            class="inline-flex items-center space-x-3 rounded-xl bg-baseWhite px-8 py-4 text-base font-bold text-slate-900 shadow-md transition-all hover:bg-sky-50 hover:scale-[1.03] active:scale-[0.97]"
          >
            <!-- WhatsApp SVG Icon -->
            <svg class="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            <span>Mulai Konsultasi (WhatsApp)</span>
          </a>
        </div>
      </div>

      <!-- Area Ringkas Footer (Informasi Hak Cipta & Brand) -->
      <div class="flex flex-col items-center justify-between border-t border-slate-200/60 pt-8 dark:border-slate-800 sm:flex-row">
        
        <!-- Logo Brand & Trigger Scroll Ke Atas -->
        <div class="flex items-center space-x-2 cursor-pointer mb-4 sm:mb-0" @click="scrollToTop">
          <span class="text-lg font-extrabold tracking-tight text-slate-900 dark:text-baseWhite">
            Kawan<span class="text-primary">Digital.</span>
          </span>
        </div>

        <!-- Info Copyright Mandatori -->
        <p class="text-xs text-slate-500 dark:text-slate-400">
          &copy; {{ currentYear }} Kawan Digital. All rights reserved.
        </p>
      </div>

    </div>
  </section>
</template>
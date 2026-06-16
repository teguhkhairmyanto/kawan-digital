<script setup>
// Mengimpor seluruh komponen yang sudah kita buat secara sistematis
import NavbarComponent from './components/NavbarComponent.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactFooterSection from './components/ContactFooterSection.vue'
</script>

<template>
  <!-- Wrapper utama dengan transisi warna latar belakang dan teks yang smooth -->
  <div class="min-h-screen bg-baseWhite text-slate-800 transition-colors duration-300 dark:bg-darkBg dark:text-baseWhite">
    
    <!-- 1. Header & Navigation (Controls Theme Switcher & Smooth Scroll) -->
    <NavbarComponent />

    <!-- Main Content Area -->
    <main>
      <!-- 2. Hero Section (Conversion-Oriented Area) -->
      <HeroSection />

      <!-- 3. Core Services Section (5 Core Services Grid) -->
      <ServicesSection />

      <!-- 4. Portfolio Section (8 Dummy Tactical Projects v-for Render) -->
      <PortfolioSection />

      <!-- 5. Testimonials Section (Social Proof Area) -->
      <TestimonialsSection />
    </main>

    <!-- 6. Contact & Footer Section (WhatsApp Integration & Closing) -->
    <ContactFooterSection />

  </div>
</template>

<style>
/* Menghilangkan scrollbar default saat smooth scroll aktif agar terasa lebih premium */
html {
  scroll-behavior: smooth;
}

/* Memastikan transisi global untuk semua elemen interaktif */
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
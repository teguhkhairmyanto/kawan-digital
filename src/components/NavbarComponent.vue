<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

// Fungsi untuk mengatur tema pada HTML root element
const setTheme = (dark) => {
  isDarkMode.value = dark
  if (dark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Inisialisasi pengecekan tema saat komponen dipasang (onMounted) sesuai PRD
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    setTheme(savedTheme === 'dark')
  } else {
    // Jika localStorage kosong, cek preferensi OS pengguna
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark)
  }
})

// Fungsi toggle tema manual lewat button
const toggleTheme = () => {
  setTheme(!isDarkMode.value)
}

// Fungsi smooth scroll ke target section
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-baseWhite/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-darkBg/80">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
      
      <!-- Brand Logo ala Koderpedia -->
      <div class="flex items-center space-x-2 cursor-pointer" @click="scrollToSection('hero')">
        <span class="text-xl font-extrabold tracking-tight text-slate-900 dark:text-baseWhite">
          Kawan<span class="text-primary">Digital.</span>
        </span>
      </div>

      <!-- Desktop Navigasi Menu -->
      <div class="hidden items-center space-x-8 md:flex">
        <button @click="scrollToSection('services')" class="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary">
          Layanan
        </button>
        <button @click="scrollToSection('portfolio')" class="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary">
          Portofolio
        </button>
        <button @click="scrollToSection('testimonials')" class="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary">
          Testimoni
        </button>
      </div>

      <!-- Action Buttons (Theme Toggle & CTA) -->
      <div class="flex items-center space-x-4">
        
        <!-- Theme Switcher Button -->
        <button 
          @click="toggleTheme" 
          class="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-darkCard"
          aria-label="Toggle Theme"
        >
          <!-- Icon Sun (Muncul jika sedang Dark Mode) -->
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 text-primary">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.66 6.34l1.58-1.58M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          </svg>
          <!-- Icon Moon (Muncul jika sedang Light Mode) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>

        <!-- Button CTA Utama ke WA Link -->
        <a 
          href="https://api.whatsapp.com/send?phone=6282282029222&text=Halo%20Kawan%20Digital...%20Saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20proyek%20digitalisasi%20bisnis." 
          target="_blank"
          class="rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-baseWhite transition-all hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98]"
        >
          Konsultasi Sekarang
        </a>
      </div>

    </div>
  </nav>
</template>
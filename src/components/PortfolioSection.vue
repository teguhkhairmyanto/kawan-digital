<script setup>
import { ref } from 'vue'
// Mengimpor data static JSON yang sudah diperbarui dengan properti screenshot
import dataStatic from '../projects.json'

const projects = ref(dataStatic.projects)

// State untuk mengatur visibilitas modal dan menyimpan data gambar yang aktif
const isModalOpen = ref(false)
const activeScreenshot = ref('')
const activeTitle = ref('')

// Fungsi untuk membuka modal saat Judul/Title diklik
const openModal = (screenshotUrl, projectTitle) => {
  activeScreenshot.value = screenshotUrl
  activeTitle.value = projectTitle
  isModalOpen.value = true
  // Mengunci scroll body utama saat modal terbuka agar user experience lebih premium
  document.body.style.overflow = 'hidden'
}

// Fungsi untuk menutup modal
const closeModal = () => {
  isModalOpen.value = false
  activeScreenshot.value = ''
  activeTitle.value = ''
  // Mengembalikan scroll body utama ke kondisi normal
  document.body.style.overflow = ''
}
</script>

<template>
  <section id="portfolio" class="bg-baseWhite px-6 py-24 transition-colors duration-300 dark:bg-darkBg sm:px-8">
    <div class="mx-auto max-w-7xl">
      
      <!-- Header Section -->
      <div class="mx-auto max-w-3xl text-center mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-secondary dark:text-primary mb-3">
          Our Portfolio
        </h2>
        <p class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-baseWhite sm:text-4xl">
          Karya Digital Berkelas yang Telah Kami Selesaikan
        </p>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-400">
          Bukti nyata kapabilitas teknis tim kami. Klik pada **Judul Proyek** untuk melihat tampilan screenshot interaktif dari sistem asli yang kami bangun.
        </p>
      </div>

      <!-- Responsive Grid Layout -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        <!-- Card Loop Projek -->
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group overflow-hidden rounded-2xl border border-slate-200/60 bg-baseWhite shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md dark:border-slate-800 dark:bg-darkCard"
        >
          <!-- Container Visual Mockup Beraspek Rasio 16:9 -->
          <div class="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
            <img 
              :src="project.mockup" 
              :alt="project.title"
              loading="lazy" 
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span class="absolute left-4 top-4 rounded-md bg-slate-900/70 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-baseWhite border border-baseWhite/10">
              {{ project.category }}
            </span>
          </div>

          <!-- Konten Card Portofolio -->
          <div class="p-6">
            <!-- Judul Projek (Trigger click untuk membuka modal screenshot) -->
            <h3 
              @click="openModal(project.screenshot, project.title)"
              class="text-lg font-bold tracking-tight text-slate-900 dark:text-baseWhite mb-2 cursor-pointer hover:text-secondary dark:hover:text-primary transition-colors inline-block decoration-dotted hover:underline"
              title="Klik untuk melihat screenshot sistem asli"
            >
              {{ project.title }} ↗
            </h3>

            <!-- Deskripsi Konten -->
            <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-5 min-h-[60px]">
              {{ project.description }}
            </p>

            <!-- Divider Line Tipis -->
            <div class="border-t border-slate-100 dark:border-slate-800 my-4"></div>

            <!-- Tech Stack Badges Container -->
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="inline-flex items-center rounded-md bg-slate-50 border border-slate-200/60 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-darkBg dark:border-slate-700 dark:text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- MODAL POP-UP DIALOG (Akan muncul jika isModalOpen bernilai true) -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm transition-opacity duration-300"
      @click.self="closeModal"
    >
      <div class="relative max-w-5xl w-full rounded-2xl bg-baseWhite p-3 shadow-2xl dark:bg-darkCard animate-in fade-in zoom-in-95 duration-200">
        
        <!-- Header Modal (Judul Sistem & Tombol Close) -->
        <div class="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-3">
          <h4 class="text-sm font-bold text-slate-800 dark:text-baseWhite">
            Screenshot Sistem: <span class="text-secondary dark:text-primary">{{ activeTitle }}</span>
          </h4>
          <button 
            @click="closeModal"
            class="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-darkBg dark:hover:text-baseWhite transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Area Tampilan Utama Gambar Screenshot dari Folder Public -->
        <div class="overflow-hidden rounded-xl border border-slate-200/60 bg-slate-900 dark:border-slate-700 aspect-video flex items-center justify-center">
          <img 
            :src="activeScreenshot" 
            :alt="activeTitle" 
            class="max-h-full max-w-full object-contain mx-auto"
          />
        </div>

      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
// Mengimpor static data JSON yang berisi 8 dummy project mandatori dari PRD
import dataStatic from '../projects.json'

const projects = ref(dataStatic.projects)
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
          Bukti nyata kapabilitas teknis tim kami dalam mengeksekusi solusi digital tangguh, mulai dari otomatisasi internal hingga platform skala enterprise.
        </p>
      </div>

      <!-- Responsive Grid Layout: 1 Kolom (Mobile), 2 Kolom (Tablet), 3 Kolom (Desktop) -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        <!-- Card Loop Projek Dummy Mandatori -->
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
            <!-- Kategori Badge di Pojok Atas Mockup -->
            <span class="absolute left-4 top-4 rounded-md bg-slate-900/70 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-baseWhite border border-baseWhite/10">
              {{ project.category }}
            </span>
          </div>

          <!-- Konten Card Portofolio -->
          <div class="p-6">
            <!-- Judul Projek -->
            <h3 class="text-lg font-bold tracking-tight text-slate-900 dark:text-baseWhite mb-2 group-hover:text-secondary dark:group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>

            <!-- Deskripsi Konten (Copywriting) -->
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
  </section>
</template>
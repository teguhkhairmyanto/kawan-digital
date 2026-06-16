<script setup>
import { ref } from 'vue'
// Mengimpor static data JSON yang berisi data testimoni dummy hasil kesepakatan diskusi
import dataStatic from '../projects.json'

const testimonials = ref(dataStatic.testimonials)
</script>

<template>
  <section id="testimonials" class="bg-offWhite px-6 py-24 transition-colors duration-300 dark:bg-darkBg/50 sm:px-8 border-t border-slate-100 dark:border-slate-800/50">
    <div class="mx-auto max-w-7xl">
      
      <!-- Header Section -->
      <div class="mx-auto max-w-3xl text-center mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-secondary dark:text-primary mb-3">
          Testimonials
        </h2>
        <p class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-baseWhite sm:text-4xl">
          Apa Kata Mereka Tentang Kawan Digital
        </p>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-400">
          Kepuasan klien adalah prioritas utama kami. Berikut adalah umpan balik jujur dari para mitra bisnis yang telah mendigitalisasi sistemnya bersama kami.
        </p>
      </div>

      <!-- Grid Layout Responsif (3 Kolom untuk Testimoni) -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        <!-- Card Loop Testimoni -->
        <div 
          v-for="item in testimonials" 
          :key="item.id"
          class="flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-baseWhite p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-darkCard"
        >
          <!-- Bagian Atas: Isi Komentar & Icon Quote -->
          <div>
            <!-- Icon Quote Minimalis -->
            <div class="text-primary/30 dark:text-primary/20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-8 w-8">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9 gelatin-9l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <!-- Isi Review / Komen -->
            <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400 italic">
              "{{ item.comment }}"
            </p>
          </div>

          <!-- Bagian Bawah: Profil User (Avatar, Nama, Jabatan) -->
          <div class="mt-8 flex items-center space-x-4">
            <img 
              :src="item.avatar" 
              :alt="item.name"
              loading="lazy"
              class="h-12 w-12 rounded-full object-cover border border-slate-100 dark:border-slate-700"
            />
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-baseWhite">
                {{ item.name }}
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                {{ item.position }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
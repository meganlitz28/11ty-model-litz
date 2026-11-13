---
title: Image Gallery
permalink: image.html
layout: base.njk
---

## Welcome

<is-land on:visible>

<div id="gallery" v-scope="{ active: 'all' }">
  <div class="filters">
    <button @click="active = 'all'" :class="{ on: active === 'all' }" :aria-pressed="active === 'all'">All</button>
    <button @click="active = 'sketches'" :class="{ on: active === 'sketches' }" :aria-pressed="active === 'sketches'">AI</button>
    <button @click="active = 'photos'" :class="{ on: active === 'photos' }" :aria-pressed="active === 'photos'">Development</button>
    <button @click="active = 'type'" :class="{ on: active === 'type' }" :aria-pressed="active === 'type'">Ethic Principle</button>
  </div>
  <section class="topic" v-show="active === 'all' || active === 'sketches'">
    <h3>AI</h3>
    <img src="img/images.jpeg" alt="ai image">
    
  </section>
  <section class="topic" v-show="active === 'all' || active === 'photos'">
    <h3>Development</h3>
    <img src="img/development.jpeg" alt="Describe this image">
   
  </section>
  <section class="topic" v-show="active === 'all' || active === 'type'">
    <h3>Ethic Principle</h3>
    <img src="img/ai-ethics-principles.webp" alt="Describe this image">
  </section>
</div>

  <template data-island>
    <script type="module">
      import { createApp } from './js/petite-vue.js'
      createApp().mount('#gallery')
    </script>
  </template>

</is-land>
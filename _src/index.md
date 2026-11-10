---
title: Tech Issue Resource Guide
layout: base.njk
---

## Hello world!

<is-land on:visible type="petite-vue">
  <div v-scope="{ count: 0 }">
    <p>Count: <span v-text="count"></span></p>
    <button @click="count++">Increment</button>
  </div>
</is-land>
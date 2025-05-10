

<template>
  <FloralLayout>
    <template #title>
      Pool of Thoughts
    </template>
    <template #nav>
      <MainNav />
    </template>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.slug">
          <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
          <span class="post-date">({{ post.date }})</span>
        </li>
      </ul>
    </div>
  </FloralLayout>
</template>

<script setup>
import FloralLayout from '@/components/FloralLayout.vue'
import MainNav from '@/components/MainNav.vue'
import { ref, onMounted } from 'vue'
import postsData from '@/posts.json'

const posts = ref(postsData)

</script>

<style scoped>
ul {
  margin-left: 2rem;
}
.post-date {
  color: #888; 
  font-size: 0.9em; 
  margin-left: 0.5em; 
}
</style>
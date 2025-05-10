

<template>
  <FloralLayout>
    <template #title>
      Pool of Thoughts
    </template>
    <template #nav>
      <MainNav />
    </template>
    <div class="blog-post-content">
      <div v-if="html" v-html="html"></div>
      <div v-else>Loading...</div>
    </div>
  </FloralLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import FloralLayout from '@/components/FloralLayout.vue'
import MainNav from '@/components/MainNav.vue'

// import all the blog post .md files at build time to avoid latency 
const postModules = import.meta.glob('@/blog/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
})
const posts = Object.entries(postModules).map(([path, content]) => ({
  slug: path.split('/').pop().replace('.md', ''),
  content,
}))

const route = useRoute()
const html = computed(() => {
  const post = posts.find(p => p.slug === route.params.slug)
  return post ? 
    marked.parse(post.content) : 
    "<p>There doesn't appear to be a post with that name.</p>"
})
</script>

<style>
.blog-post-content {
  padding-bottom: 5rem; 
}

.blog-post-content h2 {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem; 
  margin-bottom: 1rem;
}
.blog-post-content h3 {
  font-size: 1.2rem;
  margin-top: 1.5rem;
}

.blog-post-content ul, 
.blog-post-content ol {
  margin-top: -0.7rem;
  margin-left: 2rem; 
  margin-bottom: 0.7rem;
  line-height: 1.4;
}
.blog-post-content ul li, 
.blog-post-content ol li {
  margin-bottom: 0.2rem;
}

.blog-post-content p {
  margin-bottom: 1rem; 
  line-height: 1.4;
}
.blog-post-content strong {
  color: var(--color-accent-hover); 
}

.blog-post-content blockquote {
  margin: 1em 0;
  padding: 0.5em 1.2em;
  font-style: italic;
  border-radius: 0.5em;
  text-align: center;
}

</style>
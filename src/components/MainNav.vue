
<template>
  <nav class="main-nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/blog">Blog</router-link> | 
    <router-link to="/resume">Résumé</router-link> | 
    <a href="https://github.com/jiyaski" target="_blank" rel="noopener">GitHub</a> |
    <a href="https://x.com/myyoski" target="_blank" rel="noopener">X</a> | 
    <a href="https://linkedin.com/in/jonathan-miyagi-hopkins" target="_blank" rel="noopener">LinkedIn</a>
  </nav>
</template>


<style scoped>
.main-nav {
  margin-top: 2rem;
  font-size: 1.1rem;
}
.main-nav a {
  color: var(--color-accent);
  text-decoration: none;
  margin: 0 0.3em;
  transition: color 0.2s;
}
.main-nav a:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}

@media(max-width: 1000px) {
  .main-nav {
    margin-top: 0.5rem; 
  }
}
</style>
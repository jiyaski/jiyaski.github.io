
<template>
  <FloralLayout>
    <template #nav>
      <MainNav />
    </template>
    <div class="not-found-text">
      <h2><strong>404</strong> &nbsp;&mdash;&nbsp; Page not found.</h2>
    </div>
  </FloralLayout>
</template>

<script setup>
import FloralLayout from '@/components/FloralLayout.vue'
import MainNav from '@/components/MainNav.vue'
</script>

<style scoped>
.not-found-text {
  text-align: center; 
  margin-top: 3rem; 
}
.not-found-text h2 {
  color: var(--color-text); 
}
</style>
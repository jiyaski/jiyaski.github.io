

<template>
  <FloralLayout centered>
    <template #title>
      Résumé
    </template>
    <template #nav>
      <MainNav />
    </template>
    <iframe
      src="/resume_default_2025-5-10_phone_redacted.pdf#pagemode=none"
      title="Resume PDF"
    ></iframe>
  </FloralLayout>
</template>

<script setup>
  import FloralLayout from '@/components/FloralLayout.vue';
  import MainNav from '@/components/MainNav.vue'
</script>

<style scoped>
iframe {
  width: clamp(650px, 72vw, 850px); 
  height: 85vh;
  margin: 0 0.5rem 4rem;
}

</style>
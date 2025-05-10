
<template>
  <div class="container">
    <img src="@/assets/images/blooms_topleft.png" alt="" class="corner-img top-left" />
    <img src="@/assets/images/blooms_topleft.png" alt="" class="corner-img top-right" />
    <img src="@/assets/images/blooms_topleft.png" alt="" class="corner-img bottom-left" />
    <img src="@/assets/images/blooms_topleft.png" alt="" class="corner-img bottom-right" />
    <div class="bottom-glow"></div>

    <div :class="['content-wrapper', { centered }]">
      <header>
        <h1><slot name="title">Hello, traveler.</slot></h1>
        <slot name="nav" />
      </header>
      <slot />
      <section class="contact">
        <h2>Contact</h2>
        <p><a href="mailto:j.miyagi.hopkins@gmail.com">j.miyagi.hopkins@gmail.com</a></p>
      </section>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script setup>
defineProps({
  centered: { type: Boolean, default: false } 
})
</script>

<style scoped>
.container {
  position: relative;
  min-width: 900px; 
  max-width: 1250px;
  min-height: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  padding-top: clamp(1.5rem, 4vw, 2.5rem); 
  padding-bottom: 0rem;
  padding-left: clamp(8rem, 16vw, 12rem); 
  padding-right: clamp(8rem, 16vw, 12rem); 
  font-family: Arial, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
}
.content-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}
.content-wrapper.centered {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
header {
  text-align: center;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2rem;
}
.spacer {
  height: 0.75rem;
}
.contact {
  text-align: center;
  font-size: 0.9rem;
  margin-top: auto;
}
.contact a:hover {
  color: white; 
  transition: color 0.3s;
}
h2 {
  font-size: 1.2rem; 
  margin-bottom: 0; 
}

/* floral borders */
.corner-img {
  position: absolute;
  width: clamp(350px, 35vw, 430px); 
  height: auto;
  pointer-events: none;
  z-index: 0;
  opacity: 0.8;
}
.top-left {
  top: var(--floral-corner-offset);
  left: var(--floral-corner-offset);
}
.top-right {
  top: var(--floral-corner-offset);
  right: var(--floral-corner-offset);
  transform: scaleX(-1);
}
.bottom-left {
  bottom: var(--floral-corner-offset);
  left: var(--floral-corner-offset);
  transform: scaleY(-1);
}
.bottom-right {
  bottom: var(--floral-corner-offset);
  right: var(--floral-corner-offset);
  transform: scaleX(-1) scaleY(-1);
}

.bottom-glow {
  position: absolute;
  left: 50%;
  bottom: -2%;
  transform: translateX(-50%);
  width: 120px;
  height: 40px;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(ellipse at center, var(--color-accent) 0%, var(--color-accent-hover) 60%, transparent 100%);
  filter: blur(60px);
}

@media (max-width: 1000px) {
  .container {
    padding-top: 6rem; 
    padding-bottom: 4.5rem;
  } 
}
</style>
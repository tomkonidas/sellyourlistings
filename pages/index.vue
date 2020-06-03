<template>
  <div>
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    Footer
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

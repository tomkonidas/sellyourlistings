<template>
  <div>
    <Hero />
    <Services />
    <Pricing />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Testimonials from '~/components/Testimonials.vue'
import Pricing from '~/components/Pricing.vue'
import Services from '~/components/Services.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    Testimonials,
    Services,
    Pricing,
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

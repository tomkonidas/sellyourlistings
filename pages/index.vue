<template>
  <div>
    <Hero />
    <Pricing />
    <Features />
    <Matterport />
    <!-- <Testimonials /> -->
    <FAQ />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Testimonials from '~/components/Testimonials.vue'
import Pricing from '~/components/Pricing.vue'
import Features from '~/components/Features.vue'
import FAQ from '~/components/FAQ.vue'
import Matterport from '~/components/Matterport.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    Testimonials,
    Features,
    Pricing,
    FAQ,
    Matterport,
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

<template>
  <PrincipalSlider />
  <GridCakes />
</template>

<script>
// @ is an alias to /src
import GridCakes from '@/components/GridCakes.vue'
import PrincipalSlider from '@/components/PrincipalSlider.vue'

export default {
  name: 'HomeView',
  components: {
    PrincipalSlider,
    GridCakes
  },
  mounted() {
    window.scrollTo(0, 0)
    $('header, footer').show()
    if (location.hash != "")
      if (location.hash == "#our-cakes")
        $('html, body').animate({ scrollTop: $("#our-cakes").offset().top - 150 }, 'slow');
  }
}
</script>

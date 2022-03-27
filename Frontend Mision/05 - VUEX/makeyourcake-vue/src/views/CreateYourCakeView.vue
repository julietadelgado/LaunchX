<template>
    <div class="container" id="personalise-your-cake">
        <div class="row">
			<div class="col-sm-12">
				<form class="row" v-on:submit.prevent>
					<div class="col-sm-12">
						<h1>Crea tu pastel: ${{ $store.state.pricePersonalizeCake }}</h1><br><br>
						<p class="tlt">Elige el/los sabores:</p><br>
					</div>

					<Flavors />

					<div class="col-sm-12">
						<br><p class="tlt">Elige los toppings:</p><br>
					</div>

                    <Toppings />

					<div class="col-sm-12">
						<br><p class="tlt">Elige los adornos:</p><br>
					</div>

					<Accesories />

					<div class="col-sm-12">
						<button class="cake-button btn-small" @click="$store.commit('addToCart', product, $event, this.$router)">Agregar al carrito</button>
					</div>
				</form>
			</div>
		</div>
        <SlideCakes />

        <div class="final-price-cake">Precio pastel personalizado: <strong>${{ $store.state.pricePersonalizeCake }}</strong></div>
    </div>
</template>

<script>
// @ is an alias to /src
import SlideCakes from '@/components/SlideCakes.vue'
import Flavors from '@/components/Flavors.vue'
import Toppings from '@/components/Toppings.vue'
import Accesories from '@/components/Accesories.vue'


export default {
  name: 'CreateYourCakeView',
  components: {
    SlideCakes,
    Flavors,
    Toppings,
    Accesories
  },
  mounted(){
      window.scrollTo(0, 0)
	  $('header, footer').show()
      this.product = this.$store.getters.personalizedCake
      this.$store.state.pricePersonalizeCake = this.$store.getters.personalizedCake.price
  }
}
</script>

<style scoped>
    .final-price-cake { position: fixed; bottom: 0px; right: 0%; z-index: 12; color: white; border-top-left-radius: 5px; border-top-right-radius: 5px; background: #54428E; padding: 5px 10px; }
</style>
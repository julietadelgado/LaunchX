<template>
    <div class="container" id="personalise-your-cake">
        <div class="row"> 
            <div class="col-sm-12" v-if="$store.state.cart.length <= 0">
                <br><br><br><br><h2 class="text-center">Tu carrito está vacío</h2>
            </div>
			<div class="col-sm-12" v-if="$store.state.cart.length > 0">
				<form class="row">
					<DataOrder />
				</form>
			</div>
		</div>
		<br>
		<br>
        <SlideCakes />
    </div>
</template>

<script>
// @ is an alias to /src
import SlideCakes from '@/components/SlideCakes.vue'
import DataOrder from '@/components/DataOrder.vue'


export default {
  name: 'CheckoutView',
  components: {
      SlideCakes,
	  DataOrder
  },
}

</script>

<style scoped>
    span.personalization-cake { position: relative; padding: 0.5rem 0.5rem; }
    span.personalization-cake:after { content: "/"; position: absolute; right: -2px; }
    span.personalization-cake:last-child:after { display: none; }

	

	#personalise-your-cake form label { color: black; }

</style>
<template>
    <div class="container">
		<div class="row" id="our-cakes">
			<div class="col-sm-12">
				<h2>Nuestros Pasteles</h2><br>
			</div>

			<div class="col-md-4 product" v-for="(product) in $store.getters.cakes" :key="product.id">
				<img :src="product.image" class="img-fluid">
				<p class="status" v-if="product.status == 'Out of stock'">Agotado</p>
				<p class="name">{{ product.name }}</p>
				<p class="price">${{ product.price }}</p>
                <router-link to="/crea-tu-pastel" class="cake-button" v-if="product.name == 'Pastel Personalizado'">¡Quiero crear mi pastel!</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'GridCakes'
}
</script>
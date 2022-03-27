<template>
    <div class="row">
		<div class="col-md-12">
			<p class="tlt">Gestionar toppings</p>
			<a href="#" type="button" class="btn btn-primary cake-button add-product">Agregar Sabor</a>		
		</div>
		<div class="col-md-5 offset-md-7 mtop">
			<form method="POST" action="" accept-charset="UTF-8" class="d-flex search-form">
				<input class="form-control me-2" required="" placeholder="Buscar" name="search" type="text">
				<input class="btn btn-outline-primary" type="submit" value="Buscar" style="margin: 0px;">
			</form>
		</div>
				</div>
	<table class="table mtop">
		<thead>
			<tr>
				<td width="50"></td>
				<td>Topping</td>
				<td>Usos restantes</td>
				<td>Precio adicional</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(product) in $store.getters.toppings" :key="product.id">
				<td width="50">
					<img :src="product.image" class="img-fluid">
				</td>
				<td>{{ product.name }}</td>
				<td><input type="number" :value="product.quantity" class="form-control" v-on:input="updateQuantityProduct(product.id, $event.target.value)"></td>
				<td><input type="number" :value="product.price" class="form-control" v-on:input="updatePriceProduct(product.id, $event.target.value)"></td>
			</tr>
		</tbody>
	</table>

	<br><br>
</template>

<script>
export default {
    name: "StockToppings",
    methods: {
      updateQuantityProduct: function (productId, value) {

        if(value != ""){
            this.$store.commit('updateQuantityProduct', {  productId, value })
        }
      },
      updatePriceProduct: function (productId, value) {

        if(value != ""){
            this.$store.commit('updatePriceProduct', {  productId, value })
        }
      }
    }
}
</script>
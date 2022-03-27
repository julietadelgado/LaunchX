<template>
    <div class="col-md-4 col-6 product" v-for="(product) in $store.getters.toppings" :key="product.id">
		<div class="btn-group" role="group">
			<input type="checkbox" class="btn-check" :id="'topping_'+product.name" autocomplete="off" name="topping[]" :value="product.name"  v-model="$store.state.checkedToppings" v-on:click="changePriceCake(product.price, $event)" :disabled="product.quantity == 0">
			<label class="btn btn-outline-primary" :for="'topping_'+product.name"><img :src="product.image" class="img-fluid"><br>{{ product.name }} <strong>+${{ product.price }} </strong></label>
            <p class="status" v-if="product.quantity == 0">Agotado</p>
		</div>
    </div>
</template>

<script>
export default {
    name: "Toppings",
    methods: {
        changePriceCake: function(price){
            if (event.target.checked) {
                this.$store.commit('addToPrice', price)
            }
            else  {
                this.$store.commit('reduceToPrice', price)
            }
        }
    },
    mounted() {
        this.$store.state.checkedToppings = [];
    }
}
</script>
<template>
    <div class="col-md-4 col-6 product" v-for="(product) in $store.getters.accesories" :key="product.id">
		<div class="btn-group" role="group">
			<input type="checkbox" class="btn-check" :id="'ornaments_'+product.name" autocomplete="off" name="ornaments[]" :value="product.name"  v-model="$store.state.checkedAccesories" v-on:click="changePriceCake(product.price, $event)" :disabled="product.quantity == 0">
			<label class="btn btn-outline-primary" :for="'ornaments_'+product.name"><img :src="product.image" class="img-fluid"><br>{{ product.name }} <strong>+${{ product.price }} </strong></label>
            <p class="status" v-if="product.quantity == 0">Agotado</p>
		</div>
    </div>
</template>

<script>
export default {
    name: "Accesories",
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
        this.$store.state.checkedAccesories = [];
    }
}
</script>
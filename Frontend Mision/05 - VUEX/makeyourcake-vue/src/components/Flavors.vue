<template>
    <div class="col-md-4 col-6 product" v-for="(product) in $store.getters.flavors" :key="product.id">
	    <div class="btn-group" role="group">
			<input type="checkbox" class="btn-check" :id="'flavor_'+product.name" autocomplete="off" name="flavor[]" :value="product.name" v-model="changeCheckedFlavors" v-on:click="changePriceCake(product.price, $event)" :disabled="product.quantity == 0" >
			<label class="btn btn-outline-primary" :for="'flavor_'+product.name"><img :src="product.image" class="img-fluid"><br>{{ product.name }}<br><strong class="price">+${{ product.price }}</strong></label>
            <p class="status" v-if="product.quantity == 0">Agotado</p>
        </div>
    </div>
    <!--<span>Checked flavors: {{ $store.state.checkedFlavors }}</span>-->
</template>

<script>
var on_off = "off";

export default {
    name: "Flavors",
    computed: {
        changeCheckedFlavors: {
            get(){
                return this.$store.state.checkedFlavors;
            },
            set(flavor){
                this.$store.commit("changeCheckedFlavors", flavor)
            }
        },
    },
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
        this.$store.state.checkedFlavors = [];
    }
}
</script>
<template>
    <div class="row">
        <div class="col-sm-12" v-if="$store.state.cart.length <= 0">
            <h2 class="text-center">Tu carrito está vacío<br><router-link to="crea-tu-pastel" class="cake-button">Crear pastel</router-link></h2>
        </div>
        <div class="col-sm-12" v-if="$store.state.cart.length > 0">
            <table class="table">
             
                <tr v-for="(product) in $store.state.cart" :key="product.id">
                    <td width="100"><img :src="product.image" width="100"></td>
                    <td>
                        Sabores: <span><span class="personalization-cake" v-if="product.flavors.length == 0">N/A</span><span class="personalization-cake" v-for="(flavor) in product.flavors" :key="flavor.id"> {{ flavor }}</span></span><br>
                        Toppings: <span><span class="personalization-cake" v-if="product.toppings.length == 0">N/A</span><span class="personalization-cake" v-for="(topping) in product.toppings" :key="topping.id"> {{ topping }}</span></span><br>
                        Accesorios: <span><span class="personalization-cake" v-if="product.accesories.length == 0">N/A</span><span class="personalization-cake" v-for="(accessory) in product.accesories" :key="accessory.id"> {{ accessory }}</span></span>
                        <button type="button" @click="$store.commit('removeToCart', product, $event)" class="delete-product"><i class="fas fa-times"></i> Eliminar</button>
                    </td>
                    <td><strong>${{ product.price }}</strong></td>
                </tr>
	        </table>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "SummaryOrder"
}
</script>
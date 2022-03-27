<template>
    <div class="container-fluid cart">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="text-center">Carrito</h2><br><br>

            </div>
        </div>
        <SummaryOrder />
        <div class="col-sm-12" v-if="$store.state.cart.length > 0">
            <router-link to="realizar-pedido" class="cake-button">Realizar Pedido</router-link>
        </div>
    </div>
</template>

<script>
import SummaryOrder from '@/components/SummaryOrder.vue'
export default {
    name: "CartView",
    components : {
        SummaryOrder
    }
    
}
</script>

<style>
    .cart { padding-top: 250px; min-height: 80vh; }
    .cart .table { max-width: 700px !important; margin: 50px auto; text-align: center; }
    .cart table.table { margin: 0px auto 0; max-width: 600px; }
    .cart .cake-button { margin: 50px auto 0 !important; display: table; font-size: 20px; }
    .cart button.delete-product { margin-left: auto; margin-right: auto; }

    @media screen and (max-width: 700px){
        .cart { padding-top: 150px; }
        .cart table.table { max-width: 90%; }
    }
</style>
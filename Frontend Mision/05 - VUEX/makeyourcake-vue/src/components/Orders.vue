<template>
    <div class="col-sm p-3 min-vh-100 summary-orders">
	    <!-- content -->
        <div class="row">
        	<div class="col-md-12">
        		<p class="tlt">Pedidos</p>		
        	</div>
        	<div class="col-md-5 offset-md-7 mtop">
        		<form method="POST" action="" accept-charset="UTF-8" class="d-flex">
        			<input class="form-control me-2" required="" placeholder="Buscar" name="search" type="text">
        			<input class="btn btn-outline-primary" type="submit" value="Buscar" style="margin: 0px;">
        		</form>
        	</div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table mtop">
                    <thead>
                        <tr>
                            <td width="200">Fecha</td>
                            <td width="250">Cliente</td>
                            <td>Status</td>
                            <td width="200">Productos</td>
                            <td>Envío</td>
                            <td>Total</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order) in $store.getters.orders" :key="order.id">
                            <td>
                                {{ order.date }}
                            </td>
                            <td>
                                Nombre: {{ order.name }}<br>
                                Email: {{ order.email }}<br>
                                Teléfono: {{ order.phone }}<br>
                                Domicilio: <span v-if="order.street == ''">N/A</span>{{ order.street }}<br>
                                C.P: <span v-if="order.street == ''">N/A</span>{{ order.zip }}
                            </td>
                            <td>Pagado</td>
                            <td>
                                <div class="products-order">
                                    <div v-for="(product) in order.products" :key="product.id">
                                        <table>
                                            <tr>
                                                <td>
                                                    <img :src="product.image" width="50">
                                                </td>
                                                <td>
                                                    {{ product.name }}<br>
                                                    <div v-if="product.id == 1">
                                                        Sabores: <span><span class="personalization-cake" v-if="product.flavors.length == 0">N/A</span><span class="personalization-cake" v-for="(flavor) in product.flavors" :key="flavor.id"> {{ flavor }}</span></span><br>
                                                        Toppings: <span><span class="personalization-cake" v-if="product.toppings.length == 0">N/A</span><span class="personalization-cake" v-for="(topping) in product.toppings" :key="topping.id"> {{ topping }}</span></span><br>
                                                        Accesorios: <span><span class="personalization-cake" v-if="product.accesories.length == 0">N/A</span><span class="personalization-cake" v-for="(accessory) in product.accesories" :key="accessory.id"> {{ accessory }}</span></span>
                                                    </div>
                                                    Precio: ${{ product.price }}<br><br>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </td>
                            <td>{{ order.shipping }}</td>
                            <td>${{ order.total }}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Orders"
}
</script>

<style scoped>
    .administrator .products-order img { margin-right: 13px; }
    .administrator .products-order table td { vertical-align: top; }
    .administrator .summary-orders { max-width: 100%;  overflow-x: scroll; }
    .administrator form { padding-top: 0px; }
</style>
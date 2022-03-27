<template>
    <div class="container-fluid administrator">
	    <div class="row">
            <DashboardMenu />
            <div class="col-sm p-3 min-vh-100 manage-stock" id="manage-stock">
	            <!-- content -->
	            <StockFlavors />
                <StockToppings />
				<StockAccesories />
                
	        </div>
	    </div>
	</div>
    <ReturnToHome />
</template>

<script>
import DashboardMenu from '@/components/DashboardMenu.vue'
import StockFlavors from '@/components/StockFlavors.vue'
import StockAccesories from '@/components/StockAccesories.vue'
import StockToppings from '@/components/StockToppings.vue'
import ReturnToHome from '@/components/ReturnToHome.vue'

export default {
    name: "ManageStockView",
    components: {
        DashboardMenu,
        StockFlavors,
        StockAccesories,
        StockToppings,
        ReturnToHome
    },
    mounted() {
        $('header, footer').hide()
    }
}
</script>

<style>
    #manage-stock .cake-button { font-size: 18px !important; display: initial; }
    .administrator table .btn-action { color: white; margin: 0px 5px; }
</style>

<style scoped>
    .simulation.to-page { z-index: 2; }
</style>
<template>
    <div class="container-fluid administrator">
	    <div class="row">
            <DashboardMenu />
            <Orders />
           
	    </div>
	</div>
     <ReturnToHome />
</template>

<script>
import DashboardMenu from '@/components/DashboardMenu.vue'
import Orders from '@/components/Orders.vue'
import ReturnToHome from '@/components/ReturnToHome.vue'

export default {
    name: "OrdersView",
    components: {
        DashboardMenu,
        Orders,
        ReturnToHome
    },
    mounted() {
        $('header, footer').hide()
    }
}
</script>

<style scoped>
    .simulation.to-page { z-index: 2; }
</style>
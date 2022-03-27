<template>
    <div class="container-fluid administrator">
	    <div class="row">
            <DashboardMenu />
	        <DashboardContent />
           
	    </div>
	</div>
     <ReturnToHome />
</template>

<script>
import DashboardMenu from '@/components/DashboardMenu.vue'
import DashboardContent from '@/components/DashboardContent.vue'
import ReturnToHome from '@/components/ReturnToHome.vue'

export default {
    name: "DashboardView",
    components: {
        DashboardMenu,
        DashboardContent,
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
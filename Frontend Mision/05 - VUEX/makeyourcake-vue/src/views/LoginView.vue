<template>
    <LoginForm />
    <ReturnToHome />
</template>

<script>
import LoginForm from '@/components/LoginFormJ.vue'
import ReturnToHome from '@/components/ReturnToHome.vue'

export default {
    name: "LoginView",
    components: {
        LoginForm,
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



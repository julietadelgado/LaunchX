<template>
    <div class="container-fluid thank-you-page" style="min-height: 80vh;">
        <div class="row">
            <div class="col-md-12">
                <p class="tlt text-center" style="padding-top: 200px;">Gracias por tu confianza,<br>hemos recibido tu pedido.</p>
                <img src="@/assets/img/baker.png" class="img-fluid">
                <p>Gracias por usar este demo, puedes seguir creando pasteles o hacer click en <router-link to="cmsmyc">Ver administrador</router-link> para explorar un poco más.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThankYouView"
}
</script>

<style scoped>
    .thank-you-page { text-align: center; }
</style>
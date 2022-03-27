<template>
    <div class="container-fluid">
		<div class="row slide-cake">
			<div class="col-md-12">
				<img src="@/assets/img/home/slide-1-cake.jpg" class="full-image">
				<div class="slide-text">
					<h1 class="title-slide">La pastelería en donde podrás crear <span>tu propio pastel</span></h1>
					<router-link to="/crea-tu-pastel" class="cake-button">Crear mi pastel</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: "PrincipalSlider"
}
</script>

<style scoped>
    .slide-cake .col-md-12 { padding: 0px; }
    .slide-cake { margin-bottom: 80px; position: relative; background: #e7ebf6; }
    .slide-cake img { position: relative; top: 7px; }

    .slide-text { position: absolute; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); left: 0px; padding-left: 100px; }
    .title-slide { font-weight: 800; font-size: 30px; }
    .title-slide span { display: block; font-size: 47px; }
    .slide-text .cake-button { margin-top: 50px; }

    @media screen and (max-width: 1350px){
        .slide-cake { margin-top: 50px; }
    }

    @media screen and (max-width: 1100px){
        .slide-cake { overflow: hidden; height: 100vh; min-height: 500px; }
        .slide-cake img { position: absolute; bottom: 0px; top: unset; height: 100%; width: auto !important; max-width: unset; right: 0px; }
    }

    @media screen and (max-width: 991px){
        .title-slide { font-size: 25px; }
        .title-slide span { font-size: 35px; }
        .slick-prev, .slick-next { display: none !important; }
    }

    @media screen and (max-width: 660px){
        .slide-text { width: 100%; padding: 0px 50px; text-align: center; }
        .slide-cake { margin-top: 0px; }
        .slide-text .cake-button { margin-left: auto; margin-right: auto; }
    }
</style>
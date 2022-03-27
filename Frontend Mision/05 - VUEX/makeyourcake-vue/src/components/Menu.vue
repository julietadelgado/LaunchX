<template>
	<header>
		<div class="glazze"></div>
		<div class="logo logo-mobile"><router-link to="/"><img src="@/assets/img/make-your-cake-logo-2.svg" width="110" class="logo"></router-link></div>
		<nav>
			<ul>
				<li><router-link to="/#our-cakes">Nuestros Pasteles</router-link></li>
				<li class="logo"><router-link to="/"><img src="@/assets/img/make-your-cake-logo-2.svg" width="200" class="logo"></router-link></li>
				<li><router-link to="/crea-tu-pastel">Crea tu pastel</router-link></li>
			</ul>
		</nav>
		<div class="right-icons">
			<router-link to="/carrito" class="pay-order"><i class="fas fa-shopping-cart"></i></router-link>
			<i class="fas fa-bars trigger-menu"></i>
		</div>
	</header>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
	header ul { margin: 0px auto; display: table; }
	header ul li { list-style: none; text-align: center; }
	header, header .glazze { height: 130px;  position: fixed; width: 100%; top: 0px; z-index: 9; }
	header .glazze { background-image: url(@/assets/img/wave-cake.svg); background-size: contain; background-repeat: repeat-x; }
	header .logo { position: relative; top: 0px; padding: 0px; }
	header nav li { display: inline-block; color: white; padding: 0px 15px; }
	header nav li:not(.logo) { position: relative; top: -38px; font-weight: 400; }
	header nav a { color: white !important; text-decoration: none; position: relative; }
	header .logo.logo-mobile { display: none; z-index: 9; }
	header .right-icons { position: absolute; z-index: 9; top: 32px; right: 35px; color: white; font-size: 23px; }
	header .right-icons * { color: white; }
	header .right-icons a { margin: 0px 14px; }
	header .trigger-menu { display: none; }
	nav { position: relative; z-index: 9; }

	@media screen and (max-width: 991px){
		header, header .glazze { height: 100px; }
		header .logo { width: 150px; }
		header nav li:not(.logo) { top: -30px; }
		header .right-icons { top: 25px; }
	}

	@media screen and (max-width: 700px){
		header, header .glazze { height: 60px; }
		header .trigger-menu { display: initial; }
		header .logo { width: 100px; display: none; }
		header .logo.logo-mobile, header .logo.logo-mobile img { display: initial; }
		header .logo.logo-mobile { margin-left: 15px; }
		header ul { margin: unset; padding: 0px 20px; width: 100%; }
		header nav li:not(.logo) { top: -10px; font-size: 15px; }
		header .right-icons { top: 6px; right: 10px; }
		header nav { display:none; background-image: url(@/assets/img/bck-cake-things.png); padding-top: 120px; position: absolute; top: 50%; width: 100%; height: 100vh; background-color: rgb(229 231 244); z-index: 8; }
		header nav li { display: block; text-align: center; }
		header nav li a { color: #5f56a5 !important; font-weight: 800; font-size: 23px; }
		header nav ul { position: absolute; top: 50%; }
	}
</style>
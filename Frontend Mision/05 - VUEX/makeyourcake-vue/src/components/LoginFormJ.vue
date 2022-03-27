<template>
    <div class="box box_login">
		<div class="content shadow">
			<router-link to="/">
				<img src="../assets/img/make-your-cake-logo-2.svg" class="logo">
			</router-link>

			<form action="" class="form-login">
				<label for="email">Correo electrónico</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text"><i class="far fa-envelope"></i></div>
					</div>
					<input type="email" name="email" class="form-control" required value="julieta@example.com">
				</div>

				<label for="password" class="mtop16">Contraseña</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text"><i class="fas fa-key"></i></div>
					</div>
					<input type="password" name="password" class="form-control" required value="hello_">
				</div>
				
				<router-link to="/cmsmyc/dashboard" style="text-decoration: none;"><input type="submit" value="Ingresar" id="submit-button"></router-link>
			</form>

		</div>
		<p class="mtop16 text-forgot-password">¿Olvidaste tu contraseña?<br><a href="javascript:void(0)"> Reestablecer contraseña</a></p>

		<p class="mtop16 text-center"><router-link to="/"><i class="fas fa-long-arrow-alt-left"></i> Regresar al sitio</router-link></p>

		<p class="mtop16 text-center">Este es solo un demo, haz clic en ingresar para abrir el administrador</p>
	</div>
</template>

<script>
export default {
    name: "LoginForm"
}
</script>
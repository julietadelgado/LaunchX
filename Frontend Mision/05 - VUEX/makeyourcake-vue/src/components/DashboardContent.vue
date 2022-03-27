<template>
    <div class="col-sm p-3 min-vh-100">
		<!-- content -->
		Bienvenido al administrador de Make your cake.<br>
		<br> Aquí podrás administrar realizar lo siguiente:

		<ul>
			<li><router-link to="/cmsmyc/gestionar-existencias/">Gestionar sabores y adornos</router-link></li>
			<li><router-link to="/cmsmyc/pedidos/">Ver pedidos existentes</router-link></li>
			<li>Administrar productos (Próximamente)</li>
			<li>Administrar usuarios (Próximamente)</li>
		</ul>
	</div>
</template>

<script>
export default {
    name: "DashboardContent"
}
</script>
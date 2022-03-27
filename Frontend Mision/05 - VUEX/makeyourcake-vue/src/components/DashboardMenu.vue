<template>
    <div class="col-sm-auto bg-light sticky-top">
	            <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
	                <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
	                    <li class="nav-item">
	                        <router-link to="/cmsmyc/dashboard/" class="nav-link py-3 px-2" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
	                            <i class="fas fa-home"></i>
	                        </router-link>
	                    </li>
	                    <li>
	                        <router-link to="/cmsmyc/gestionar-existencias/" class="nav-link py-3 px-2" title="Gestionar Sabores y Adornos" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Gestionar Sabores y Adornos">
	                            <i class="fas fa-table"></i>
	                        </router-link>
	                    </li>
	                    <li>
	                        <router-link to="/cmsmyc/pedidos" class="nav-link py-3 px-2" title="Pedidos" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Pedidos">
	                            <i class="fas fa-file-alt"></i>
	                        </router-link>
	                    </li>
	                    <!--<li>
	                        <a to="javascript:void(0)" class="nav-link py-3 px-2" title="Próximamente" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
	                            <i class="fas fa-box"></i>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="javascript:void(0)" class="nav-link py-3 px-2" title="Próximamente" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
	                            <i class="fas fa-users"></i>
	                        </a>
	                    </li>-->
	                </ul>
	            </div>
	        </div>
</template>

<script>
export default {
    name: "DashboardMenu"
}
</script>
<template>
    <div class="col-md-6">
		<br><p class="tlt">Ingresa tus datos</p><br>
		<div class="group-field">
			<input type="text" name="name" placeholder="Nombre" class="form-control" v-on:input="updateOrderName($event.target.value)" required :value="$store.state.currentOrderName"><br>
		</div>
		<div class="group-field">
			<input type="tel" name="telephone" placeholder="Teléfono" class="form-control" v-on:input="updateOrderPhone($event.target.value)" required :value="$store.state.currentOrderPhone"><br>
		</div>
		<div class="group-field">
			<input type="email" name="email" placeholder="Correo Electrónico" class="form-control" v-on:input="updateOrderEmail($event.target.value)" required :value="$store.state.currentOrderEmail"><br>
		</div>
		<div class="group-field">
			<p class="tlt">Envío:</p>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="shipping" id="pickup" value="Recoger en tienda" required v-model="updateCurrentShipping">
			  <label class="form-check-label" for="pickup">
			    Recoger en tienda (Vasco de Quiroga 3200, Ciudad de México, CDMX)
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="shipping" id="delivery" value="Enviar a domicilio" required v-model="updateCurrentShipping">
			  <label class="form-check-label" for="delivery">
			    Enviar a domicilio
			  </label>
			</div>
		</div>

		<div class="group-field address">
			<br><p class="tlt">Domicilio</p>
			<div class="row">
				<div class="col-md-6">
					<input type="text" name="street" placeholder="Calle y número" class="form-control" v-on:input="updateOrderStreet($event.target.value)" required :value="$store.state.currentOrderStreet"><br>
				</div>
				<div class="col-md-6">
					<input type="number" name="zip" placeholder="Código Postal" class="form-control" v-on:input="updateOrderZip($event.target.value)" required :value="$store.state.currentOrderZip"><br>
				</div>
			</div>


		</div>
	</div>
	<div class="col-md-6">
		<br><p class="tlt">Resumen de pedido</p>
		<SummaryOrder />
		<p class="total-checkout"><strong>Total: </strong> ${{ $store.state.totalCart }} </p>
		<button class="cake-button btn-small" @click.stop.prevent="submit()">Realizar pedido</button>
	</div>
</template>

<script>
import SummaryOrder from '@/components/SummaryOrder.vue'

export default {
    name: "DataOrder",
	components: {
		SummaryOrder
	},
	computed: {
        updateCurrentShipping: {
            get(){
                return this.$store.state.CurrentOrderShipping;
            },
            set(shipping){
                this.$store.commit("updateCurrentOrderShipping", shipping)

				if(shipping == "Enviar a domicilio"){
					$(".address").show()
					$(".address input").prop('required',true);
				}
				else{
					$(".address").hide()
					$(".address input").removeAttr("required")
				}
            }
        },
    },
  mounted () {
      window.scrollTo(0, 0)
	  $('header, footer').show()
  },
  methods: {
	  updateOrderName: function (value) {
		  this.$store.commit('updateOrderName', value)
	  },
	  updateOrderPhone: function (value) {
		  this.$store.commit('updateOrderPhone', value)
	  },
	  updateOrderEmail: function (value) {
		  this.$store.commit('updateOrderEmail', value)
	  },
	  updateOrderStreet: function (value) {
		  this.$store.commit('updateOrderStreet', value)
	  },
	  updateOrderZip: function (value) {
		  this.$store.commit('updateOrderZip', value)
	  },
	  submit(){
        let errors = ""
		if($('input[name="name"]').val() == ""){
			errors += "Nombre es un campo requerido\n"
			if(errors == "") $('input[name="name"]').focus();
		}

		if($('input[name="telephone"]').val() == ""){
			errors += "Teléfono es un campo requerido\n"
			if(errors == "") $('input[name="telephone"]').focus();
		}

		if($('input[name="email"]').val() == ""){
			errors += "Email es un campo requerido\n"
			if(errors == "") $('input[name="email"]').focus();
		}
		else{
			if (/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@+([_a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]{2,200}\.[a-zA-Z]{2,6}$/.test($('input[name="email"]').val())){
				
			}
			else{
				errors += "Formato de correo electrónico incorrecto\n"
				if(errors == "") $('input[name="email"]').focus();
			}
		}

		if(!$('input[name="shipping"]').is(':checked')) { 
			errors += "Selecciona un método de envío\n" 
		}
		else{
			if($(".address input[name='street']").prop('required') != false ){
				if($("input[name='street']").val() == ""){
					errors += "Ingresa la Calle y número\n"
					if(errors == "") $("input[name='street']").focus();
				}

				if($("input[name='zip']").val() == ""){
					errors += "Ingresa tu Código Postal\n"
					if(errors == "") $("input[name='zip']").focus();
				}
			}
		}

		if(errors != ""){
			alert(errors);
		}
		else{
			this.$store.commit('createOrder')
        	this.$router.push("/gracias");
		}
      }
  }
}
</script>

<style scoped>
    .form-check label { color: black !important; }
	tr td { padding: 15px 0px; }
	p.total-checkout { font-size: 21px; }
</style>
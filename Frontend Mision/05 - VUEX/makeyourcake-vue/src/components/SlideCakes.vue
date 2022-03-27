<template>
    <div class="row">
		<div class="col-sm-12">
			<br><br><h2>¿Te quedaste con antojo?</h2><br>
		</div>
		<div class="multiple-items">
			<div class="product" v-for="(product) in $store.getters.cakes" :key="product.id" v-show="product.id != 1">
				<img :src="product.image" class="img-fluid">
				<p class="status" v-if="product.status == 'Out of stock'">Agotado</p>
				<p class="name">{{ product.name }}</p>
				<p class="price">${{ product.price }}</p>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    name: "SlideCakes",
    mounted () {
        $('.multiple-items').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			centerPadding: '60px',
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
		    	{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					}
		    	}
			]
	    });
  }
}
</script>
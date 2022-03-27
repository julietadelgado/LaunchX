<template>
  <Menu />
  <router-view/>
  <OpenAdmin />
  <Footer />
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import OpenAdmin from '@/components/OpenAdmin.vue'

export default {
  components: {
    Menu,
    Footer,
    OpenAdmin
  },
  mounted () {
    window.scrollTo(0, 0)
    this.$store.commit('updateCartFromLocalStorage')
    this.$store.commit('updateTotalCart')
    //tooltip.dispose()
    $('header .trigger-menu').click(function(){
      $('header nav').slideToggle();
    });
  }
}
</script>



<style>
  body, html { padding: 0; margin: 0; font-family: 'Poppins', sans-serif; color: #102a43; font-weight: 300;}
  body { background-color: #fbf2ea; } 

  h1, h2, h3, h4, h5, h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 700; line-height: 1.2; color: #5f56a5; }
  strong { font-weight: 700; }
  form { margin: 0 auto; display: table; padding-top: 80px; }

  .tlt { font-weight: 700; font-size: 25px; color: #5f56a5; display: block; }
  .cake-button { text-decoration: none; display: table; font-weight: 800; color: white !important; font-size: 30px; background: #54428E; border: none; padding: 10px 34px 12px; cursor: pointer; }
  .cake-button:hover { background: #fcb13b; }

  .product { margin-bottom: 50px; position: relative; }
  .product p { margin-bottom: 0px; text-align: center; }
  .product p.status { position: absolute; background: #d00808; color: white; padding: 5px; top: 13px; right: 5px; }
  .product p.name { font-weight: 400; margin-top: 10px; }
  .product .price { font-weight: 700; color: #54428e; }
  .product .cake-button, .cake-button.btn-small { font-size: 18px; margin: 0 auto; display: table; margin-top: 15px; color: white; text-decoration: none; }
  .product .cake-button:hover, .cake-button.btn-small:hover { background: #7c62cf; }
  .product label { color: black }

  .slick-prev:before, .slick-next:before { color: #54428e !important; }
  .slick-slide img { width: 95%; margin-left: auto; margin-right: auto; }

  img.full-image { width: 100%; }
  input.quantity-field { width: 68px; display: inline-block; margin-left: 7px; }
  .btn-check:checked+.btn-outline-primary .quantity-field { color: black !important; }

  .product img { margin: 0 auto; display: table; }


  #personalise-your-cake { padding-top: 140px; }
  .btn-group label { border-color: #54428e; }
  .btn-outline-primary:hover { color: #fff; background-color: rgba(84, 66, 140, 0.5); border-color: rgba(84, 66, 140, 0.5); }
  .btn-outline-primary { box-shadow: none !important; }
  .btn-check:active+.btn-outline-primary, .btn-check:checked+.btn-outline-primary, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show, .btn-outline-primary:active { background-color: #54428e; border-color: #54428e; color:  white !important; }
  .btn-check:active+.btn-outline-primary *, .btn-check:checked+.btn-outline-primary *, .btn-outline-primary.active *, .btn-outline-primary.dropdown-toggle.show *, .btn-outline-primary:active * {  color:  white !important; }

  .address { display: none; }
  .form-check { text-align: left; }

  span.personalization-cake { padding: 0px 3px; position: relative; }
  span.personalization-cake:after { content: ","; }
  span.personalization-cake:last-child:after { display: none; }

  button.delete-product { display: block; border: none; color: red; font-weight: 600; }
  
/* ADMIN */
  .administrator { background: white; }
  .mtop16{ margin-top:16px; }
  .box{ position:relative; }
  .box .header{ background:transparent; border-top-left-radius:10px; border-top-right-radius:10px; padding:20px; }
  .box .content{ background-color:#f48a8f; border:1px solid #d6d6d6; border-radius:10px; padding:30px; width:500px; }
  .box .logo { margin: 0 auto 20px; display: table; width: 100px; height: 98px; }
  .box .btn-primary{ background-color:#5912e2; border-color:#5912e2; width:100%; }
  .box .form-control:focus,.box .form-control:active{ outline:none; box-shadow:none; }
  .box_login { margin:0 auto; display:table; padding:5% 20px; }
  .footer-login{ text-align:center; }
  .text-forgot-password{ text-align:center; }
  .box .input-group-text, .box input.form-control { border-radius: 0px; border: none;}
  .box .btn-primary { background-color: #2964B9; border-color: #2964B9; width: 100%; border-radius: 0px; }
  .box .input-group-text{ height:100% !important; background: #54428E; color: white; border-top-left-radius: 4px; border-bottom-left-radius: 4px; }
  .box input.form-control { border-top-right-radius: 4px !important; border-bottom-right-radius: 4px !important; }

  .form-field { margin-bottom: 0px; display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; line-height: 1.5; color: #102a43; background-color: #fff; background-clip: padding-box; border: 1px solid #ced4da; border-radius: 0.25rem; transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; font-family: 'Poppins'; }
  .mtop { margin-top: 16px;  } 
  .btn { outline: none !important; box-shadow: none !important; }

  label { color: white; }
  input[type="submit"] { margin: 23px auto 0px; display: table; background: #54428e; color: white; border: none; border-radius: 4px; padding: 5px 25px; font-weight: 700; }

  .administrator i, .administrator a { color: #f48a8f; }

  .form-login { width: 100% !important; padding-top: 0px !important; }
  .administrator .add-product { display: none !important; }
  .administrator .search-form { display: none !important; }

  @media screen and (max-width: 991px){
    .cake-button { font-size: 25px; }
  }

  @media screen and (max-width: 767px){
    div#personalise-your-cake { text-align: center; }
    .btn-group { height: 100%; }
  }

  @media screen and (max-width: 660px){
    #personalise-your-cake { padding-top: 35px; }
  }

</style>

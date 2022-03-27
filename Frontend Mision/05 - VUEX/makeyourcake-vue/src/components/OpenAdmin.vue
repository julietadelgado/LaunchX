<template>
    <div class="simulation"><router-link to="/cmsmyc">Ver administrador</router-link></div>
</template>

<script>
export default {
    name: "OpenAdmin"
}
</script>

<style>
    .simulation { border-top-left-radius: 5px; border-top-right-radius: 5px; background: #54428E; position: fixed; color: white; top: calc(50% - (195px / 2)); right: 0px; transform: translate(0%,-50%) rotate(-90deg); transform-origin: right bottom; width: 195px; text-align: center; }
    .simulation a { color: white; text-decoration: none; font-weight: 700; }
</style>
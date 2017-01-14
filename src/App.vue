<template>
    <div id="app">
        <div class="container">
            <alert-advice />
            <div class="col-xs-12 col-md-12">
        	   <h1 class="text-center">Pokédex with VueJS</h1>
           </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AlertAdvice from './components/AlertAdvice.vue'
    
    export default {
        components: {
            AlertAdvice
        }
    }
</script>

<style>
</style>

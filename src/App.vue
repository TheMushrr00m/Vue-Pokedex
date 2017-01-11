<template>
    <div id="app">
    	<div class="alert alert-dismissible alert-warning text-center">
    		<button type="button" class="close" @click="closeAlert">&times;</button>
    		<h4>Keep calm!</h4>
    		<p>
    			I'm still working on this project!
    		</p>
		</div>
    	<div class="container">
    		<h1 class="text-center">Pokédex with VueJS</h1>
    		<router-view></router-view>
    	</div>
    </div>
</template>

<script>
    export default {
    	methods: {
    		closeAlert(e) {
    			e.target.parentNode.style.display = "none"
    		}
    	}
    }
</script>

<style>
</style>

<template>
    <div class="container">
    	<div class="col-md-12">
    		<div class="col-md-offset-4" v-show="noPokemon">
    			<img class="img-responsive" src="/src/assets/img/crying.gif"></img>
    			<h2>
    				{{errorMsg}}
    			</h2>
    		</div>
    		<div class="" v-show="!noPokemon">
    			<div class="col-md-8">
	    			<div class="row">
		    			<div class="col-md-6">
			    			<img :src="pokemon.frontView" :alt="pokemon.name" class="img-responsive">
			    		</div>
			    		<div class="col-md-6">
			    			<img :src="pokemon.backView" :alt="pokemon.name" class="img-responsive">
			    		</div>
		    		</div>
			    	<div class="row">
			    		<div class="col-md-6">
			    			<img :src="pokemon.frontViewShiny" :alt="pokemon.name" class="img-responsive">
			    		</div>
			    		<div class="col-md-6">
			    			<img :src="pokemon.backViewShiny" :alt="pokemon.name" class="img-responsive">
			    		</div>
		    		</div>
	    		</div>
    			<div class="col-md-4">
	    			<h2>ID: {{pokemon.id}}</h2>
	    			<h2>Name: {{pokemon.name}}</h2>
	    			<h2>Height: {{pokemon.height}}</h2>
	    			<h2>Weight: {{pokemon.weight}}</h2>
	    		</div>
    		</div>
    	</div>
    </div>
</template>

<script>
	import { config } from '../utils/config'

    export default{
    	data() {
    		return {
    			noPokemon: true,
    			errorMsg: "",
    			pokemon : {}
    		}
    	},
    	created() {
    		this.$http.get(`${config.BASE_PATH+this.$route.params.id}`)
    		.then((response) => {
    			if(!response.status.ok) {
    				this.noPokemon = !this.noPokemon
    				this.errorMsg = response.statusText
    			}
    			this.pokemon = {
    				backView: response.data.sprites.back_default,
    				backViewShiny: response.data.sprites.back_shiny,
    				frontView: response.data.sprites.front_default,
    				frontViewShiny: response.data.sprites.front_shiny,
    				height: response.data.height,
    				id: response.data.id,
    				name: response.data.name,
    				weight: response.data.weight
    			}
    		})
    		.catch((error) => {
                this.errorMsg = error.statusText
            })
    	}
    }
</script>

<style>
</style>
<template>
    <div class="col-xs-12 col-md-12">
        <google-loader v-if="noPokemon === 0" />
        <no-info :errorMsg="errorMsg" v-else-if="noPokemon === 1" />
        <poke-info :pokemon="pokemon" v-else />
    </div>
</template>

<script>
    import GoogleLoader from './GoogleLoader.vue'
    import NoInfo from './NoInfo.vue'
    import PokeInfo from './PokeInfo.vue'
	import { config } from '../utils/config'

    export default{
    	data() {
    		return {
    			noPokemon: 0,
    			errorMsg: "",
    			pokemon : {}
    		}
    	},
    	created() {
    		this.$http.get(`${config.BASE_PATH+this.$route.params.id}`)
    		.then((response) => {
    			if(!response.status.ok) {
    				this.noPokemon = 1
    				this.errorMsg = response.statusText
    			}
                this.noPokemon = 2
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
    	},
        components: {
            GoogleLoader,
            PokeInfo,
            NoInfo
        }
    }
</script>

<style></style>
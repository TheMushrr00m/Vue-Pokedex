<template>
    <div class="col-xs-12 col-md-12" >
        <google-loader v-if="pokemons.length === 0" />
        <div class="row" v-else>
            <div class="col-md-4" v-for="pokemon in pokemons">
                <poke-item :name="pokemon.name" :id="pokemon.id" />
            </div>
            <div class="col-md-12">
                <router-link to="/" class="btn btn-info btn-lg btn-block">Return To Home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import GoogleLoader from './GoogleLoader.vue'
    import PokeItem from './PokeItem.vue'
    import { config } from '../utils/config'

    export default {
        created() {
            this.$http.get(`${config.BASE_PATH}`)
            .then((response) => {
                if(response.status === 200)
                    this.pokemons = response.data.results.map((pokemon) => {
                        let urlItems = pokemon.url.split('/').filter(Boolean)
                        return {
                            name: pokemon.name,
                            id: urlItems[urlItems.length - 1]
                        }
                    })
            })
            .catch((error) => {
                console.log(error)
            })
        },
        components: {
            GoogleLoader,
            PokeItem
        },
        data () {
            return {
                pokemons: []
            }
        },
        methods: {
            loadMore() {
                console.log("Test")
            }
        }
    }
</script>

<style>
</style>

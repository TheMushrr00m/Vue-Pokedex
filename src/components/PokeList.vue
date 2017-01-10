<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="pokemon in pokemons">
                <poke-item :name="pokemon.name" :id="pokemon.id" />
            </div>
            <div class="col-md-4">
                <button class="btn btn-danger btn-lg pull-right" @click.prevent="loadMore">Load More...</button>
            </div>
        </div>
    </div>
</template>

<script>
    import PokeItem from './PokeItem.vue'
    import { config } from '../utils/config'

    export default {
        created() {
            this.$http.get(`${config.BASE_PATH}pokemon`)
            .then((response) => {
                this.pokemons = response.data.results.map((pokemon) => {
                    let urlItems = pokemon.url.split('/').filter(Boolean)
                    return {
                        name: pokemon.name,
                        id: urlItems[urlItems.length - 1]
                    }
                })
            })
        },
        components: {
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
    #app { margin: 4vh 0; }
</style>

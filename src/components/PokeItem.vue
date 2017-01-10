<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <router-link :to="`/pokemons/${id}`" class="btn btn-primary btn-xs pull-right">
                View More
            </router-link>
            <h3 class="panel-title">{{name | capitalize}}</h3>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        filters: {
            capitalize(value) {
                if(!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style>
</style>
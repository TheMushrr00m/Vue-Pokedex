<template>
	<div class="panel panel-danger">
		<div class="panel-heading">
			<h3 class="panel-title text-center">{{pokemon.name | capitalize}}</h3>
		</div>
		<div class="panel-body">
			<div class="row text-center">
				<div class="col-xs-12 col-md-4">
					<h2>Information</h2>
					<div class="list-group">
						<li class="list-group-item">ID: {{pokemon.id}}</li>
						<li class="list-group-item">Height: {{pokemon.height}}</li>
						<li class="list-group-item">Weight: {{pokemon.weight}}</li>
					</div>
				</div>
				<div class="col-xs-12 col-md-8">
					<div class="col-xs-6 col-md-6">
						<h2>Front Sprites</h2>
						<div class="col-xs-12 col-md-6">
							<img :src="pokemon.frontViewShiny" :alt="pokemon.name" class="img-responsive">	
						</div>
						<div class="col-xs-12 col-md-6">
							<img :src="pokemon.frontView" :alt="pokemon.name" class="img-responsive">
						</div>
					</div>
					<div class="col-xs-6 col-md-6">
						<h2>Back Sprites</h2>
						<div class="col-xs-12 col-md-6">
							<img :src="pokemon.backViewShiny" :alt="pokemon.name" class="img-responsive">
						</div>
						<div class="col-xs-12 col-md-6">
							<img :src="pokemon.backView" :alt="pokemon.name" class="img-responsive">
						</div>
					</div>
				</div>
			</div>
		</div>
		<router-link to="/pokemons" class="btn btn-info btn-lg btn-block">Return To List</router-link>
	</div>
</template>

<script>
	export default {
		props: {
			pokemon: {
				type: Object,
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
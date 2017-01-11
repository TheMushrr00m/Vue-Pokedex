<template>
	<div class="col-md-12">
		<img class="img-responsive" src="/src/assets/img/crying.gif"></img>
		<h2>
			{{errorMsg}}
		</h2>
	</div>
</template>

<script>
	export default {
		props: {
			errorMsg: {
				type: String,
				required: true
			}
		}
	}
</script>
<template>
	<div class="col-xs-12 col-md-12">
    	<div class="alert alert-dismissible alert-warning text-center">
    		<button type="button" class="close" @click="closeAlert">&times;</button>
    		<h4>Keep calm!</h4>
    		<p>
    			I'm still working on this project!
    		</p>
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
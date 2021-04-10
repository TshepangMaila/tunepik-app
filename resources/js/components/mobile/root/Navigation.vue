<template>

	<nav class="navbar fixed-top">
		
		<div class="media" style="width : 100%;">
			
			<div class="back-btn-wrapper self-align-center mr-3 b-media btn-top">
				
				<a @click="back()">
					
					<!-- <svg-vue icon="back" class="app-icon"></svg-vue> -->
					<Icon :icon="'back'" :height="24" :width="24" :color="theme.icons.color"></Icon>

				</a>

			</div>

			<slot />

		</div>

		<Snackbar></Snackbar>

	</nav>
	


</template>

<script>

	import { mapGetters } from 'vuex'
	
	export default {

		name : "Navigation",
		methods : {

      back : function(){

        window.history.back();

      }

    },
    computed : {

    	...mapGetters('tunepik', ['theme']),

    }

	};

</script>

<style scoped>

  .navbar{

  	height: 45px;
  	box-shadow: 0 .5px .5px rgba(211, 211, 211, .2)

  }

  .b-media{
		padding: 5px;
		border-radius: 50%;
		background-color: rgba(211, 211, 211, .175); 
	}
	
</style>
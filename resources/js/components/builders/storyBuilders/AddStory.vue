<template>

	<div class="wrapper">
		<center>
			<div class="dropdown">

				<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

					<Picture :user="model" :height="70" :width="70"></Picture>
					<span class="block-text app-grey-text">
						Add Story
					</span>

    		</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">

      	<router-link :to="{ name : 'add-story' }">
      		<span class="app-post-text">
      			Add Your Story
      		</span>
      	</router-link>

      </a>
      <a class="dropdown-item" href="#">

      	<router-link :to="{ name : 'view-story' }">
      		<span class="app-post-text">
      			View Your Story
      		</span>
      	</router-link>

      </a>
    </div>
				
			</div>
		</center>
	</div>
	
</template>

<script type="text/javascript">
	
	import { mapGetters } from 'vuex'
	export default {
		name 		: "AddStory",
		computed : {
			...mapGetters("auth", ['model']),
		}
	};

</script>

<style type="text/css" scoped></style>
<template>

	<div class="wrapper">
			
			<story-skeleton v-if="stories.loading"></story-skeleton>
			<div class="story-body" v-else>
				
				<Flickity :options="options" ref="flickity">
					
					<div class="wrap-story-items" v-for="(story, i) in stories.stories" :key="i">
						
						<story-item></story-item>

					</div>

				</Flickity>

			</div>

	</div>
	
</template>

<script type="text/javascript">

	import StorySkeleton from '../skeletonBuilders/StorySkeleton'
	import StoryItem from './StoryItem'
	import Flickity from 'vue-flickity'
	
	export default {

		name 	: "StoryBundler"
		data  : () => ({
			wrapper  : '.main-carousel',
      options : {

				freeScroll : false,
  	  	contain : true,
       	wrapAround : true,
       	autoPlay : 4000,
       	prevNextButtons : false,
       	pageDots : false

			}
		}),
		props : ['stories'],
		components : {
			StorySkeleton,
			StoryItem,
			Flickity,
		}

	};

</script>

<style type="text/css" scoped>
	
</style>
<template>

	<div class="wrapper">
			
			<story-slide-skeleton v-if="stories.loading"></story-slide-skeleton>
			<div class="story-body" v-else>

				<div class="media">
					
					<slot />
					<div class="media-body">
						
						<Flickity :options="options" ref="flickity">
							<!-- <story-face :user="model"></story-face>
							<story-face :user="model"></story-face>
							<story-face :user="model"></story-face>
							<story-face :user="model"></story-face>
							<story-face :user="model"></story-face>
							<story-face :user="model"></story-face>
							<story-face :user="model"></story-face> -->
							<!-- Show Rest Of The Stories -->
							<story-bundler :stories="stories.stories"></story-bundler>

						</Flickity>

					</div>

				</div>
				
			</div>

	</div>
	
</template>

<script type="text/javascript">

	import StorySlideSkeleton from '../skeletonBuilders/StorySlideSkeleton'
	import StoryFace from './StoryFace'
	import StoryBundler from './StoryBundler'
	import Flickity from 'vue-flickity'
	import { mapGetters, mapActions } from 'vuex'
	
	export default {

		name 	: "StorySlideBundler",
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
		props : ['url'],
		components : {
			StorySlideSkeleton,
			StoryFace,
			StoryBundler,
			Flickity,
		},
		computed : {
			...mapGetters("story", ['stories']),
			...mapGetters("auth", ['model'])
		},
		methods : {
			...mapActions('story', ['getStories'])
		},
		mounted : function(){
			this.$nextTick(() => {
				this.getStories({url : this.url})
			})
		}

	};

</script>

<style type="text/css" scoped>

	.wrapper{
		border-bottom: .04em solid rgba(211, 211, 211, .100)
	}
	
</style>
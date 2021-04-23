<template>

	<div class="wrapper">
		
		<story-grid-skeleton v-if="stories.loading"></story-grid-skeleton>
		<div class="story-grid-wrapper" v-else>
			
			<masonry
			   :cols="{default : 4, 1000 : 3, 700 : 4, 400 : 2}"
			   :gutter="{default : '3px', 700 : '3px', 400 : '3px'}"
					>
	   		<add-story></add-story>
	   		<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
				<story-face :user="model"></story-face>
	   		<story-bundler :stories="stories.stories"></story-bundler>

	   </masonry>

		</div>

	</div>
	
</template>

<script type="text/javascript">

	import { mapGetters, mapActions } from 'vuex'
	import StoryGridSkeleton from '../skeletonBuilders/StoryGridSkeleton'
	import StoryBundler from './StoryBundler'
	
	export default {

		name 		: "StoryGridBundler",
		props 	: ['url'],
		components : {
			StoryGridSkeleton,
			StoryBundler
		},
		methods : {
			...mapActions("story", ['getStories'])
		},
		computed : {
			...mapGetters("story", ['stories'])
		},
		mounted : function(){
			this.$nextTick(() => {
				this.getStories({ url : this.url })
			})
		}

	};

</script>

<style type="text/css" scoped></style>
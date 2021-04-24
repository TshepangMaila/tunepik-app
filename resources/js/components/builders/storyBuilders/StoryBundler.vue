<template>

	<div class="wrapper">
		
		<div class="wrap-story-items" v-for="(story, i) in stories" :key="i">
						
			<story-face :user="story.user"></story-face>

		</div>

	</div>
	
</template>

<script type="text/javascript">
	import StoryFace from './StoryFace'
	export default {
		name 		: "StoryBundler",
		props 	: ['stories'],
		components : {
			StoryFace
		}
	};

</script>

<style type="text/css" scoped></style>
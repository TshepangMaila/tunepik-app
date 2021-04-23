<template>

	<div class="wrapper">
		
		<div class="wrap-story-items" v-for="(story, i) in stories" :key="i">
						
			<story-face :user="story.user"></story-face>

		</div>

	</div>
	
</template>

<script type="text/javascript">
	
	export default {
		name 		: "StoryBundler",
		props 	: ['stories']
	};

</script>

<style type="text/css" scoped></style>
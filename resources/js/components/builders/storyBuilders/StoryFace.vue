<template>

	<div class="wrapper p-2">
		
		<center>
			<Picture :user="user" :width="70" :height="70"></Picture>
			<user-name :user="user"></user-name>
		</center>

	</div>
	
</template>

<script type="text/javascript">
	
	export default {

		name 	: "StoryFace",
		props : ['user'],

	};

</script>

<style type="text/css" scoped></style>
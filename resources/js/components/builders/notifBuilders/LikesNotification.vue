<template>

	<div class="media">
		
		<!-- Image Wrapper For Each Notification Item -->
	 <div class="user-img-wrapper align-self-center">
	 	
	 	  <Picture :height="35" :width="35" :user="notification"></Picture>

	 </div>

	 <!-- Media Body!! -->

	 <!-- Show Like Notification -->
	 <div class="media-body pl-2 align-self-start">
	 	
	 		<span class="app-grey-text-lg" v-if="notification.getNotification().count - 1 <= 0">
	 			
	 			<span class="app-bolder-text">{{ notification.getBasic().name }}</span>
	 			 Has Liked Your Post
	 		</span>
	 		<span class="app-grey-text-lg" v-else>
	 			
	 			 <span class="app-bolder-text">{{ notification.getBasic().name }}</span> and 
	 			 <span class="app-bolder-text">{{ notification.getNotification().count - 1 }} Others</span>
	 			 Liked Your Post
	 		</span>

	 </div>

	 <div class="media-right align-self-center">
	 	
	 		<Icon :icon="'heart'" :height="28" :width="28" :color="'red'"></Icon>

	 </div>

	</div>
	
</template>

<script type="text/javascript">
	
	export default {

		name : 'LikesNotification',
		props : ['notification']

	};

</script>

<style type="text/css" scoped></style>
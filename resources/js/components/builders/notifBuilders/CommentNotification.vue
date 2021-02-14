<template>

	<div class="media">

		<div class="user-img-wrapper align-self-center">
 			 	
	 	  <Picture :height="35" :width="35" :user="notification"></Picture>

	 </div>
		
		<div class="media-body pl-2" >
		 	 			
			  <span class="app-grey-text-lg" v-if="notification.getNotification().count - 1 <= 0">
		 			
		 			<span class="app-bolder-text">{{ notification.getBasic().name }}</span>
		 			 Has Commented Your Post
		 		</span>
		 		<span class="app-grey-text-lg" v-else>
		 			
		 			 <span class="app-bolder-text">{{ notification.getBasic().name }}</span> and 
		 			 <span class="app-bolder-text">{{ notification.getNotification().count - 1 }} Others</span>
		 			 Commented Your Post
		 		</span>

		</div>

		<div class="media-right align-self-center">
			
			<Icon :icon="'comment'" :width="28" :height="28" ></Icon>

		</div>

	</div>
	
</template>

<script type="text/javascript">
	
	export default {

		name : 'CommentNotification',
		props : ['notification']

	};

</script>

<style type="text/css" scoped></style>
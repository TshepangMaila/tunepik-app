<template>

	<div class="media">

		<div class="user-img-wrapper align-self-start">
 			 	
	 	  <Picture :height="35" :width="35" :user="notification"></Picture>

	 </div>
		
		<div class="media-body pl-2">
		 	 			
 			<span class="app-grey-text-lg">
 				<span class="app-bolder-text">{{ notification.getBasic().name }}</span>
 				Has {{ notification.getNotification().notifType }}
 			</span>

 		</div>

	</div>
	
</template>

<script type="text/javascript">
	
	export default {

		name : 'MentionNotification',
		props : ['notification']

	};

</script>

<style type="text/css" scoped></style>
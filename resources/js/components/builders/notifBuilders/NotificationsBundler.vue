<template>
<div>
	 <div class="" v-if="notifications.loading">

	 	
	 	<UserListSkeleton></UserListSkeleton>
	 	

	 </div>
	 <div v-else>
	 	
	 	 <template v-if="notifications.list">
	 	 	<!-- Show Notifications -->

	 	 	<div class="list-group" v-for="(notification, index) in notifications.notifs">

	 	 		<div class="list-group-item list-group-item-action">

	 	 			<LikesNotification :notification="notification" v-if="notification.getNotification().notifType == 'like'"></LikesNotification>

	 	 			<CommentNotification :notification="notification" v-else-if="notification.getNotification().notifType == 'comment'"></CommentNotification>

	 	 			<FollowNotification :notification="notification" v-else-if="notification.getNotification().notifType == 'Started Following You' || notification.getNotification().notifType == 'Unfollowed You'"></FollowNotification>

	 	 			<MentionNotification :notification="notification" v-else></MentionNotification>
	 	 			
	 	 		</div>
	 	 	</div> <!-- End Of Group List Item -->
	 	 	
	 	 </template>
	 	 <template v-else>
	 	    
	 	    <div class="space-large"></div>
	 	    <div class="space-large"></div>

	 	 	  <div class="app-deleted-post grey-matter">
	 	 	  	
	 	 	  	<center>
	 	 	  	
		 	 	  	<span class="app-small-text">
		 	 	  		{{ notifications.message }}
		 	 	  	</span>

		 	 	  </center>

	 	 	  </div>

	 	 </template>

	 </div>
	</div>
	
</template>

<script>

	import UserListSkeleton from '../skeletonBuilders/UserListSkeleton'
	import CommentNotification from './CommentNotification'
	import FollowNotification from './FollowNotification'
	import LikesNotification from './LikesNotification'
	import MentionNotification from './MentionNotification'

  export default {

  	name  : "NotificationsBundler",
  	scrollToTop : false,
  	data  : function(){

  		return {};

  	},
  	components : {
  		UserListSkeleton,
  		CommentNotification,
  		FollowNotification,
  		LikesNotification,
  		MentionNotification
  	},
  	props : ['notifications']

  };


</script>


<style>

   .comment-icon,
   .mention-icon{

   	 color: rgba(211, 211, 211, 1);

   }

   .like-icon{
   	color: red;
   }

</style>
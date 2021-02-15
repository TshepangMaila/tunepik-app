<template>

	<span>
		
		<span class="app-bolder-text">{{ user.getBasic().name }}</span><verified :user="user"></verified>
	   <span class="profile-user-handle app-user-text" style="display: block;line-height: 1;">
	      @{{ user.getBasic().handle }}
	   </span>

	</span>
	
</template>

<script type="text/javascript">

	export default {

		name : 'UserName',
		props : ['user'],

	};
	
</script>

<style type="text/css" scoped></style>
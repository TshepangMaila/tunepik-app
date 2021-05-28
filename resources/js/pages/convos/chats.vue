<template>

	<!-- <columner>
		
		<chats-list></chats-list>

	</columner> -->

	<div class="wrapper">
		
		<div class="row">
			
			<div class="col-lg-4">
				<chats-list class="block chats-list"></chats-list>
			</div>
			<div class="col-lg-8">
				<transition name="fade" mode="out-in">
	        	<router-view class="block messages-list" />
	       </transition>
			</div>

		</div>

	</div>
	
</template>

<script type="text/javascript">

		import ChatsList from '../../components/builders/chatsBuilders/ChatsList'

		export default {

				name 				: "Chats",
				scrollToTop : false,
				components 	: {

					ChatsList

				}

		};
	
</script>

<style type="text/css" scoped>

	@media only screen and (min-width: 700px){
		.block{
			display: inline-block;
			border: .04em solid red;
		}

		.wrapper{
			position: fixed;
			top: 70px;
			bottom: 5px;
			right: 10px;
		}

		.chats-list{
			overflow-y: scroll;
			position: fixed;
			top: 70px;
			bottom: 5px;
			left: 26%;
			width: 30%;
			height: 100%;
		}

		.messages-list{
			overflow-y: scroll;
			position: fixed;
			top: 70px;
			bottom: 5px;
			right: 10px;
			width: 43.5%;
			height: 100%;
		}
	}
	
</style>
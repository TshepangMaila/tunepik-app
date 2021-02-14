<template>
	
	<router-link :to="{ name : 'messages', params : { username : message.getBasic().handle } }">
				 					
			<a @click="MESSAGE_USER({ error : false, message : 'User Found', user : message })">

			<div class="media">
				
				<div class="media-left">

					<Picture :width="45" :height="45" :user="message"></Picture>

				</div>
				<div class="media-body pl-3">
					
					<span class="block-text app-bolder-text">
						{{ trim(message.getBasic().name, 20) }}
					</span>
					<span class="app-post-text" v-if="message.getChat().type == 'text'">
						
						{{ trim(message.getChat().message, 50) }}

					</span>
					<span class="app-post-text" v-else>
						{{ message.getBasic().name }} sent a {{ message.getChat().type }}
					</span>

					<span class="block-text app-grey-text">
						{{ message.getChat().now }}
					</span>

				</div>
				<div class="media-right align-self-center">
					
					<center>
						<div class="app-badge">
							{{ message.getChat().count }}
						</div>
					</center>

				</div>

			</div>

			</a>
			
		</router-link>

</template>

<script type="text/javascript">
	
	import { mapMutations } from 'vuex'
	import globs from '../../../tunepik/attack.js'

	export default {
		name : 'ChatItem',
		data 			: function() {
	 	  return {
	 	  	trim   : globs.trim,
	 	  }
		},
		props : ['message'],
		methods : {

			...mapMutations("messages", ['MESSAGE_USER']),

		}
	};

</script>

<style type="text/css" scoped></style>
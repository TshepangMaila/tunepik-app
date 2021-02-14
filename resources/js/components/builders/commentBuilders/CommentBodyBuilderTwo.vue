<template>

		<div class="wrapper list-group-item p-1 mb-1">
			
			<div class="media">
				
				<div class="media-left ml-2">

					<Picture :width="30" :height="30" :user="comment"></Picture>
					
				</div>
				<div class="media-body ml-1">
					
					<router-link v-bind:to="{ name : 'profile', params : { username : comment.getBasic().handle } }">
					
						<span class="app-bold-text block-text pl-2">
							{{ comment.getBasic().name }}
						</span>

					</router-link>

						<template v-if="comment.getPost().type == 'deleted'">
						
							<DeletedBodyBuilder :post="comment"></DeletedBodyBuilder>

						</template>
						<template v-else>
							
							<TextBodyBuilder :post="comment" class="pl-1"></TextBodyBuilder>

						</template>

						<MediaBodySwitch :post="comment" v-if="comment.getPost().type != 'deleted' && comment.getPost().type != 'text'"></MediaBodySwitch>

						<span class="app-grey-text-sm mt-1 pl-2" style="display:block">{{ comment.getPost().now }}</span>

				</div>
				<div class="media-right align-self-end m-1">
					
					<CommentReact :comment="comment"></CommentReact>

				</div>

			</div>

		</div>
	
</template>

<script>

	import globs from '../../../tunepik/attack.js'
  import DeletedBodyBuilder from '../postBuilders/DeletedBodyBuilder'
  import TextBodyBuilder from '../postBuilders/TextBodyBuilder'
  import MediaBodySwitch from '../postBuilders/MediaBodySwitch'
  import CommentReact from './CommentReact'
	
	export default {

		name 				: "CommentBodyBuilderTwo",
		components 	: {

			DeletedBodyBuilder,
			TextBodyBuilder,
			MediaBodySwitch,
			CommentReact

		},
		props 			: ['comment'],
		data    		: () => {

      return {

        screen : globs.app.isMobile

      }

    }

	};
	
</script>

<style scoped>
	
	.comment-icon{

		width : 15px;
		height : 15px;

	}

	.list-group-item{

		border : 0;
		border-bottom: .04em solid rgba(211, 211, 211, .4);
		padding: 0;

	}

</style>
<template>

	<div class="wrapper list-group">
		
		<template v-for="item in limit">

			<div class="list-group-item skeleton-wrapper">
				
				<div class="media align-self-center">
					
					<div class="skeleton-image skeleton-shimmer align-self-center"></div>
					<div class="media-body ml-2 align-self-center">
						
						<div class="notif-block skeleton-shimmer"></div>

					</div>

				</div>

			</div>

		</template>

	</div>
	
</template>

<script>

		import globs from '../../../tunepik/attack.js'
		
		export default {

			name 			: "NotificationSkeleton",
			data 			: function(){
				return {
					limit : globs.limit,
				};
			}

		};

</script>

<style scoped>


	.list-group-item{

			border : 0;
			padding: 5px;

		}

		.bio-shade{
			width: 80%;
			height: 35px;
			border-radius: 14px;
		}

		.notif-block{
			height: 35px;
			border-radius: 8px;
		}

	
</style>
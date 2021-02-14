<template>

		<div class="root-edit-wrapper">

			<div class="visible-lg space-large"></div>
			<div class="visible-lg space-large"></div>
			<div class="visible-lg space-large"></div>
			<div class="visible-xs space-large"></div>
			<div class="visible-xs space-medium"></div>
			<div class="row">
				
				<div class="col-lg-3">
					
					<div class="sidebar">
						
						<div class="card no-border">
							
							<Navigation v-if="screen">
				
								<div class="media-body align-self-center">
									
										<span class="app-max-text">
											Settings
										</span>

								</div>
								<div class="media-right">
									<Name></Name>
								</div>

							</Navigation>
							<div class="card-header media" v-else>
							
								<div class="media-left">
									
								</div>
								<div class="media-body">
									
									<center>
										<span class="app-max-text">
											Settings
										</span>
									</center>

								</div>
								<div class="media-right"></div>

							</div>

							<!-- SIDE BAR BODY -->
							<div class="card-body list-group">

								<template v-for="(item, index) in list">
										
										<router-link :to="{ name : item.url }" class="list-group-item list-group-item-action" v-if="item.index != 5">

											<div class="media">

												<div class="align-self-center media-left p-2">
													
													<span class="icon-wrapper">
														
														<i :class="[item.icon]"></i>

													</span>

												</div>
											
												<div class="media-body align-self-center">
													<span class="app-small-text">
														{{ item.name }}
													</span>
												</div>
												<div class="media-right align-self-center p-2">
													
													<span class="icon-wrapper">
														
														<!-- ChevronICON -->
														<i class="fa fa-chevron-right app-fa"></i>

													</span>

												</div>

											</div>

										</router-link>

									<div class="list-group-item" v-if="item.index == 5">
										<center>
											<v-button :type="'danger'" :large="true" :block="true">
												Logout
											</v-button>
										</center>
									</div>

									</template>

							</div>

						</div>

					</div>

				</div>
				<div class="col-lg-8">
					
					<transition name="fade" mode="out-in">
	        	<router-view />
	       </transition>

				</div>

			</div>

		</div>
	


</template>

<script>

 		import globs from '../../../tunepik/attack.js'
 		import Navigation from '../../../components/mobile/root/Navigation'
 		import { mapGetters } from 'vuex'

		export default {

			 name 			: "Edit",
			 scrollToTop : false,
			 data : function(){

			 		return {

			 			screen 	: globs.app.isMobile,

			 		};

			 },
			 components : {

			 		Navigation

			 },
			 computed : {

			 	...mapGetters('auth', ['model']),
			 	list : function(){

			 		return [
			 				{	
			 					index : 1,
			 					name  : 'Account',
			 					url   : 'edit.account',
			 					icon 	: 'fa fa-user app-fa'
			 				},
			 				{
			 					index  : 2,
			 					name   : 'Security',
			 					url    : 'edit.password',
			 					icon 	: 'fa fa-lock app-fa'
			 				},
			 				{
			 					index  : 3,
			 					name 	 : 'Blocked Accounts',
			 					url 	 : 'edit.blocked',
			 					icon 	: 'fa fa-ban app-fa'
			 				},
			 				{
			 					index  : 4,
			 					name 	 : 'Display',
			 					url 	 : 'edit.display',
			 					icon 	: 'fa fa-paint-brush app-fa'
			 				},
			 				{
			 					index  : 5,
			 					name 	 : 'Logout',
			 					url 	 : ''
			 				},
			 				
			 		];

			 	}

			 }

		};
	
</script>

<style scoped>

	.list-group-item{

		border: 0;
		padding : 5px;
		padding-left: 10px;

	}

	.card-body{
		padding: 0;
		box-shadow: 0 0 0 0 transparent;
		border: 0;
	}
	
</style>
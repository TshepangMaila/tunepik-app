<template>
       
	<div class="wrapper">
		
		<div class="list-group">
			
			<router-link v-for="(item, i) in menuItems" :key="i" :to="{ name : item.link}" class="list-group-item list-group-item-action no-border">
				
				<a @click="">
					
					<div class="media">
						
						<div class="media-left align-self-center">
							
							<Icon :icon="item.icon" :width="iconSize" :height="iconSize"></Icon>

						</div>
						<div class="align-self-center media-body pl-2">
							<span class="app-max-text">
								{{ item.name }}
							</span>
						</div>

					</div>

				</a>

			</router-link>

		</div>

	</div>

</template>

<script>
  import {mapGetters} from 'vuex';

    export default {
        name: "DesktopNav",
        data : () => ({
        	iconSize : 28,
        }),
        computed : {

        	...mapGetters("tunepik", ['theme']),
        	menuItems(){
        		return [
        			{
        				name : 'Home',
        				icon : 'home',
        				link : 'home',
        			},
        			{
        				name : 'Messages',
        				icon : 'messages',
        				link : 'chats',
        			},
        			{
        				name : 'Notifications',
        				icon : 'notifications',
        				link : 'notifications'
        			}
        		]
        	},

        }
        
    };
</script>

<style scoped>


</style>
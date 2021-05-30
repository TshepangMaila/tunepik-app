<template>

	<div class="wrapper" :style="styles">
    <div class="card no-border">
      
      <div class="card-header media">
        <div class="media-left align-self-center">
          <Picture :height="40" :width="40" :user="model"></Picture>
        </div>
        <div class="media-body align-self-center pl-2">
          <span class="app-max-text">
            Messages
          </span>
        </div>
        <div class="media-right align-self-center">
          
          <a @click="show = !show" v-show="!show">
            <i class="fa app-fa fa-chevron-up"></i>
          </a>

          <a @click="show = !show" v-show="show">
            <i class="fa app-fa fa-chevron-down"></i>
          </a>

        </div>
      </div>
      <div class="card-body" v-if="show">
        <chats-view></chats-view>
      </div>

    </div>
  </div>
	
</template>

<script type="text/javascript">

	import { mapGetters } from 'vuex'
	import ChatsView from './ChatsView'

	export default{
		name : "ChatsBottomPopper",
		data : () => ({
			show : false
		}),
		components : {
			ChatsView
		},
		computed : {
			...mapGetters('auth', ['model']),
			styles : function(){
				return this.show ? {
					height : '60%',
					overflowY : 'auto',
				} : {}
			}
		}
	};
	
</script>

<style type="text/css" scoped>
	
	.wrapper{
    position: fixed;
    bottom: 0;
    right: 4%;
    left: 70%;
    border: .04em solid rgba(211, 211, 211, .175);
    border-bottom: 0;
  }

</style>
<template>
       
  <div class="app-right-side-view pt-4">

    <AddPost ></AddPost>

    <div class="space-medium"></div>

    <Suggestions ></Suggestions>

    <div class="space-small"></div>

    <div class="wrapper">
      <div class="card">
        
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
            
            <a @click="show = !show">
              <i class="fa" :class="[show ? 'fa-chevron-down' : 'fa-chevron-up']"></i>
            </a>

          </div>
        </div>
        <div class="card-body" v-if="show"></div>

      </div>
    </div>

  </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import AddPost from './AddPost'
  import Suggestions from './Suggestions'

    export default {
      name: "RightSideBuilder",
      data : () => ({
        show : false
      }),
      components : {
        AddPost,
        Suggestions
      },
      computed : {
        ...mapGetters('auth', ['model']),
        icon : function(){
          return this.show ? 'fa-chevron-down' : 'fa-chevron-up'
        }
      },
      mounted(){
        console.log(this.model)
      }
        
    };
      
</script>

<style scoped>

    .app-right-side-view{

      position: fixed;
      right: 3%;
      top: 66px;
      bottom : 0;
      width : 28%;
      border-left: .04em solid rgba(211, 211, 211, .100);

    }

    .wrapper{
      position: fixed;
      bottom: 0;
      right: 4%;
      left: 70%;
    }

</style>
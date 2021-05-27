<template>
       
  <div class="app-right-side-view pt-4">

    <AddPost ></AddPost>

    <div class="space-medium"></div>

    <Suggestions ></Suggestions>

  </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import AddPost from './AddPost'
  import Suggestions from './Suggestions'

    export default {
        name: "RightSideBuilder",
        components : {

          AddPost,
          Suggestions

        }
        
    };
</script>

<style scoped>

    .app-right-side-view{

      position: fixed;
      right: 0;
      top: 66px;
      bottom : 0;
      width : 28%;
      border-left: .04em solid rgba(211, 211, 211, .100);

    }

</style>
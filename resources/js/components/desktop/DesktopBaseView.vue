<template>
       
      <div class="app-desktop-base-view">
        
        <div class="row">

        <div class="col-lg-2 icon-nav-wrapper app-col" style="">
          
          <div class="left-fixed-wrapper">
            
            <name></name>

          </div>

        </div> <!-- End of Col-lg-2 -->

        <div class="col-lg-10 app-col">
            
            <child></child>

        </div>  <!-- End Of App View  End Of Col-lg-10 -->


        </div> <!-- End Of Row -->

      </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import DesktopNav from './DesktopNav'

    export default {
       name: "DesktopBaseView",
       components : {
        DesktopNav
       }
    };
</script>

<style scoped>

.app-col{
  padding-bottom : 3%;
}

.col-lg-10{
  position: relative;
  left: 5.5%;
  width: 100%;
}

.left-fixed-wrapper{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 25%;
  height: 100%;
  border-right: .05em solid red;
  background-color: #fff;
  z-index: 99999 !important;
}

</style>
<template>


  <div class="" v-if="profile.loading"> <!-- profile.loading -->
     
     <div class="" v-if="screen">

      <MobileProfileSkeleton></MobileProfileSkeleton>
       
     </div>
     <div class="" v-else>
       
       <DesktopProfileSkeleton></DesktopProfileSkeleton>

     </div>

  </div>
  <div class="" v-else>
    
     <template v-if="screen">

       <MobileProfileView :user="profile.model"></MobileProfileView>
       
     </template>
     <template v-else>

      <div class="space-large"></div>
      <div class="space-large"></div>
      <div class="space-large"></div>
      <DesktopProfileView :user="profile.model"></DesktopProfileView>
       
     </template>

  </div>


	
</template>


<script>

  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import globs from '../../../tunepik/attack.js'
  import DesktopProfileView from '../../desktop/profileComp/DesktopProfileView'
  import MobileProfileView from '../../mobile/profileComp/MobileProfileView'
  import MobileProfileSkeleton from '../skeletonBuilders/MobileProfileSkeleton'
  import DesktopProfileSkeleton from '../skeletonBuilders/DesktopProfileSkeleton'
	
	export default {

		name   : "ProfileBundler",
		data : function(){

          return {

            username : null,
            screen : globs.app.isMobile

          }

        },
        components : {

          DesktopProfileView,
          MobileProfileView,
          MobileProfileSkeleton,
          DesktopProfileSkeleton

        },
        computed : {

          UserName : function(){

            this.username = this.$route.params.username

            return this.username;

          },
          ...mapGetters("profile", ["profile",])

        },
        methods : {

          ...mapActions("profile", ["setUserProfile", "getUserProfile", "MAIN_USER", "getUserPosts", "purge"]),
          ...mapMutations('profile', ['setUserLoading'])

        },
       created(){

           /*if(!this.profile.model){

              this.setUserLoading(true)
              this.getUserProfile(this.UserName)

           }*/

           this.MAIN_USER(this.UserName)

           if(!this.profile.model){

            this.getUserProfile(this.UserName)

           }

        },
        watch : {

          '$route.params.username'(newUsername, oldUsername){

            this.UserName = newUsername;
            this.purge()

            /*this.setUserLoading(true)
            this.getUserProfile(this.UserName);*/

            if(!this.MAIN_USER(this.UserName)){

              this.getUserProfile(this.UserName)


             }

             if(this.UserName == this.profile.model.getBasic().handle) this.getUserPosts(this.profile.model.getBasic().id)

          }

        }

	};

</script>

<style scoped>

</style>
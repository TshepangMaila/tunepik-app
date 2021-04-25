<!-- <template>
    <span class="container text-container" style="text-align:left" v-if="text != ''">
      <span class="app-post-text">{{ text }}</span>
    </span>
</template> -->

<script>

  import globs from '../../../tunepik/attack.js'

    export default {

        name    : "TextBodyBuilder",
        data    : () => ({
          screen : globs.app.isMobile,
        }), 
        props : ['text'],
        render : function(createElement){
          if(this.text != ''){

            return createElement('span', { 
              attrs : { 
                class : 'container text-container'
              } 
            }, [

              createElement('span', this.text,{
                attrs : {
                  class : 'app-post-text'
                }
              })

            ])

          }else{
            return createElement('span', '')
          }
        }

    };
</script>

<style scoped>
  
  .text-container{
    display: block;
  }

</style>

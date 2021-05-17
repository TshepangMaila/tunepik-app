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
              this.textBundler(),
              createElement('span',{
                attrs : {
                  class : 'app-post-text'
                }
              }) // End Of 2nd Create Element
            ]
          ) // End Of Root Create Element

          }else{
            return createElement('span', '')
          }
        },
        methods : {
          mentions(createElement, text){

            return text.replace(/@+([a-zA-Z0-9_]+)/g, (originalText, cleanText) => {
              return createElement('router-link', {
                to : { name : 'profile', params : { username : cleanText } },
                attrs : {
                  class : 'app-highlighted-text'
                }
              }, [originalText])
            })

          },
          hashtags(createElement, text){
            return text.replace(/#+([a-zA-Z0-9_]+)/g, (originalText, cleanText) => {
              return createElement('router-link', {
                to : { name : 'results', query : { type : 'posts' }, params : { term : cleanText } },
                attrs : {
                  class : 'app-highlighted-text'
                }
              }, [ originalText ])
            })
          },
          textBundler(createElement, text){
            return this.hashtags(createElement, this.mentions(createElement, text))
          }
        }

    };
</script>

<style scoped>
  
  .text-container{
    display: block;
  }

</style>

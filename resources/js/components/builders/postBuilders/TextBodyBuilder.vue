<template>
    <span class="container text-container" style="text-align:left" v-if="post.getPost().text != ''">
      <span class="app-post-text">{{ post.getPost().text }}</span>
    </span>
</template>

<script>

  import globs from '../../../tunepik/attack.js'

    export default {

        name    : "TextBodyBuilder",
        data    : () => {

          return {

            screen : globs.app.isMobile,

          }

        }, 
        props : ['post']

    };
</script>

<style scoped>
  
  .text-container{
    display: block;
  }

</style>

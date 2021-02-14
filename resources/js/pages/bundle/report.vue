<template>

  <div class="wrapper">
    <Navigation v-if="screen">

      <div class="media-body">

        <span class="app-max-text">
          Report {{ type == 'post' ? 'Post' : 'User' }}
        </span>

      </div>
      <div class="media-right"></div>

    </Navigation>
    <div class="visible-xs space-large"></div>
    <div class="visible-xs space-large"></div>
    <Reporter></Reporter>

  </div>

</template>

<script>

    import Navigation from "../../components/mobile/root/Navigation"
    import globs from "../../tunepik/attack"
    import Reporter from "../../components/builders/bundlers/Reporter"

    export default {
        name: "report",
        data : () => ({
           screen : globs.app.isMobile,
        }),
        components: {
          Navigation,
          Reporter
        },

    }
</script>

<style scoped>

</style>

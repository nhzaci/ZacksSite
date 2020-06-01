<template>
  <v-app app>

    <NavBar />

    <NavDrawer />

    <v-content height="100%">
      <nuxt />
      <v-btn
        fixed
        fab
        bottom
        right
        color="pink"
        @click="navDrawerOpen=!navDrawerOpen"
        class="hidden-md-and-up"
        large
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-content>

  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import NavDrawer from '@/components/NavDrawer';

export default {
  components: {
    NavBar,
    NavDrawer
  },
  computed: {
      navDrawerOpen: {
        get () {
          return this.$store.state.navDrawerOpen;
        },
        set (bool) {
          this.$store.commit('set_navDrawerOpen', bool);
        }
      }
  }
}
</script>

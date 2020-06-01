<template>
    <v-app-bar
        app
        elevate-on-scroll
        style="background:SteelBlue;"
        class="px-lg-12 justify-lg-center"
        height="120px"
    >

        <v-toolbar-title
            class="display-3 font-weight-bold"
        >ZACK</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
            text
            nuxt
            to="/"
            class="headline font-weight-light hidden-md-and-down"
        >
            Home
        </v-btn>
        <v-btn
            text
            nuxt
            to="/work"
            class="headline font-weight-light hidden-md-and-down"
        >
            My Works
        </v-btn>
        <v-btn
            text
            nuxt
            to="/contact"
            class="headline font-weight-light hidden-md-and-down"
        >
            Contact
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {
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
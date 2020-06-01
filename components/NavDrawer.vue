<template>
    <v-navigation-drawer
        app
        temporary
        v-model="navDrawerOpen"
        right
        align-end
    >
        <v-list>
            <v-list-item>
                Home
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
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
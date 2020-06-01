export const state = () => ({
    navDrawerOpen: false
})

export const mutations = {
    set_navDrawerOpen (state, bool) {
        state.navDrawerOpen = bool;
    }
}

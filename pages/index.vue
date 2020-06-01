<template>
  <v-container class="ma-0 pa-0" style="background:SteelBlue" fluid>
    <v-row align="center" no-gutters>
      <v-col cols="6" :class="($vuetify.breakpoint.mdAndUp) ? 'display-3' : 'display-1'">
        <v-row justify="center" class="font-weight-bold">
          Creating Experiences
        </v-row>
        <v-sheet height="40px" class="transparent"></v-sheet>
        <v-row justify="center">
          <v-btn 
            class="mx-2" 
            x-large
            color="orange darken-2"
            to="/work"
          >My works</v-btn>
          <v-btn 
            class="mx-2" 
            x-large
            outlined
            to="/contact"
          >Contact Me</v-btn>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-parallax src="./computers.jpg" height="500"></v-parallax>
      </v-col>
    </v-row>

    <v-row class="pa-0" align="center" no-gutters>
      <v-col cols="6">
        <v-parallax src="./computers.jpg" height="600"></v-parallax>
      </v-col>
      <v-col cols="6">
        <v-row justify="center">
          <v-card color="orange darken-2" height="400" width="70%">
            <v-card-title class="justify-center">
              <span :class="$vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-1'" style="font-weight:bold">My Motto</span>          
              </v-card-title>
            <v-card-text class="text-center">
              <span 
                :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'headline'" 
                style="font-style:oblique; font-family:'Times New Roman', Times, serif"
              >
                "Nothing but the best"
              </span>          
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-sheet height="2000px">

      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
  }
}
</script>

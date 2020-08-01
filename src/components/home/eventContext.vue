<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
      fill-height
      class="hidden-sm-and-down ma-2"
    >
    <v-col cols="12" sm="5" md="4" lg="3" xl="3" class="text-center pa-5">
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="pa-3"
          :elevation="hover ? 0 : 0" 
          :class="$vuetify.theme.dark ? 'grey darken-4' : ''"
        >
        <v-icon size="50px">mdi mdi-account-multiple</v-icon>
          <p class="google-font my-0" style="font-size:120%;">
            TFUGs
          </p>
          <br />
          <p class="google-font" style="font-size:95%;">
            TFUGs are a community of curious, passionate machine learning developers and researchers around the world.

          </p>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="pa-3"
          :elevation="hover ? 0 : 0" 
          :class="$vuetify.theme.dark ? 'grey darken-4' : ''"
        >
          <v-icon size="50px">mdi-microphone</v-icon>
          <p class="google-font my-0" style="font-size:120%;">
            Sessions
          </p>
          <br />
          <p class="google-font" style="font-size:95%;">
            A plethora of talks on TensorFlow, TF.js, TensorFlow Lite, TensorFlow Extended, TensorFlow Core, TF for Research and much more.         
          </p>
        </v-card>
      </v-hover>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-3" :elevation="hover ? 0 : 0" :class="$vuetify.theme.dark ? 'grey darken-4' : ''">
            <v-icon size="50px">mdi-desktop-mac</v-icon>
            <p class="google-font my-0" style="font-size:120%;">
              Community Projects
            </p>
            <br />
            <p class="google-font" style="font-size:95%;">
             Unique opportunity for you to share what you have developed with others and inspire the next generation of audience. 

            </p>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-3" :elevation="hover ? 0 : 0" :class="$vuetify.theme.dark ? 'grey darken-4' : ''">
            <v-icon size="50px">mdi-forum</v-icon>
            <p class="google-font my-0" style="font-size:120%;">
              Q&As
            </p>
            <br />
            <p class="google-font" style="font-size:95%;">
              <!-- Your chance to ask the expert live. <br -->
              Q&A session after each talk.
              <br>
              Get cleared your doubts related to TensorFlow or Machine Learning directly from the experts.
              
            </p>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      align="center"
      fill-height
      class="hidden-sm-and-up py-1"
    >
    <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="google-font"
          style="font-size: 150%;"
          >TFUGs</span>
        <p class="google-font mt-3" style="font-size:100%;">
            TFUGs are a community of curious, passionate machine learning developers and researchers around the world.
        </p>
      </v-col>
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5">
        <span
          class="google-font"
          style="font-size: 150%;"
          >Sessions</span
        >
        <p class="google-font mt-3" style="font-size:100%;">
          A plethora of talks on TensorFlow, TF.js, TensorFlow Lite, TensorFlow Core, TF for Research and much more.         


        </p>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="google-font"
          style="font-size: 150%;"
          > Community Projects</span>
        <p class="google-font mt-3" style="font-size:100%;">
                         Unique opportunity for you to share what you have developed with others and inspire the next generation of audience. 


        </p>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="google-font"
          style="font-size: 150%;"
          >Q&As</span
        >
        <p class="google-font mt-3" style="font-size:100%;">
                      Q&A session after each talk.
              <br>
              Get cleared your doubts related to TensorFlow or Machine Learning directly from the experts.

        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>



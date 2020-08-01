<template>
  <v-container fluid class="mb-0 pb-0">
    <v-row align="center" justify="center">
      <v-col cols="12" md="7" sm="7" lg="7" xl="6" class="">
        <p class="google-font mb-1" style="font-weight: 350;font-size:200%">
          <b class="google-font" :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'" >TFUG Project Showcase</b> <br>

        </p>
        <p class="google-font mt-3" style="text-align:justify">
         In a bid to recognize the best projects made by various TensorFlow practitioners across India, we will be showcasing the best projects made by the community members across all of India. 

          <br> 
          <!-- 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdI60725RKEF0N9Fhpt8Gr3GxqYlZVjzD245pVpY7rPYLGVeg/viewform" 
          large
          -->
          <v-btn
              title="Registartion Starts soon!"
              target="_blank"
              color="#CCCCCC"
              style="text-transform: capitalize; margin-right:2%"
              class="google-font mt-2"
              depressed
              dark
              >
               Registartion starts soon
            </v-btn>
            <br>
            <br>
            Follow 
            <a href="https://twitter.com/TFUGIndia" rel="noreferrer" target="_blank" style="text-decoration:none;">
              <span style="color:#FFA800">
                @TFUGIndia                    
              </span>
            </a>
            on Twitter to get notified!
          <br> <br>
           
        </p>
      </v-col>

      <v-col cols="12" md="5" sm="5" lg="5" xl="6" class="">
        <v-row justify="center" align="center" class="px-5">
          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #FFA800;font-size:300%">
              <b>
                <span>4</span>
              </b>
            </p>
            <p class="google-font">Days</p>
          </v-col>

          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #FFA800;font-size:300%">
              <b>
                <span>16</span>
              </b>
            </p>
            <p class="google-font">Speakers</p>
          </v-col>
          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #FFA800;font-size:300%">
              <b>
                <span>20</span>
              </b>
            </p>
            <p class="google-font">Sessions</p>
          </v-col>
          <v-col md="6" class="text-center" cols="6">
            <p class="google-font mb-0" style="font-weight: 350;color: #FFA800;font-size:300%">
              <b>
                <span>8</span>
              </b>
            </p>
            <p class="google-font">Community Project Showcase</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

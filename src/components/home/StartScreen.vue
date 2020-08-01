<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="5" lg="4" class="text-center">
        <v-img :src="require('@/assets/img/common/home.png')">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" md="7" lg="7">
        <h1
          class="google-font mt-5 mb-0"
          :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'"
        >Hello tensors! 👋</h1>
        <!-- <p class="google-font mt-0" style="font-size:80%">
          Follow up event of
          <a rel="noreferrer" href="https://web.dev/live/" target="_blank">web.dev</a>
        </p> -->
        <br>
        <p class="google-font" style="text-align:justify;">
          The core open source library to develop and train Machine Learning models, you know this already 😒.  
          Let’s keep it simple -- TFUG India Summit is a 4 day event organized end-to-end by 
          TFUGs with the aim to bring together all the curious machine learning enthusiasts, developers 
          and researchers. 
        </p>
        <p class="google-font" style="text-align:justify;">
          Join TFUG India Summit, from the comfort of your homes, to learn about the 4 tracks of TensorFlow from the experts, 
          see what your peers are making with TensorFlow and of course connect with each other, ah well digitally :-) 
        </p>
        
        <p
          class="google-font"
          :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'"
          style="font-size:120%"
        >September 3-6, 2020 | 18:00 to 20:30 IST</p>

        <p class="google-font" style="font-size:100%;color:#E6E6E6">
          <span v-for="(item,i) in mainData.hashtags" :key="i">
            <v-chip
              :href="'https://twitter.com/hashtag/'+item"
              rel="noopener"
              target="_blank"
              small
              label
              class="mr-1"
            >#{{item}}</v-chip>
            <!-- &nbsp; -->
          </span>
        </p>
        <!-- <router-link to="/register">
          <v-btn
            aria-label="Home BTN"
            color="primary"
            style="text-transform: capitalize;"
            class="google-font mr-4 mt-2"
            depressed
            large
            dark
          >Submit Talk</v-btn>
        </router-link> -->
        <v-btn
          href="https://docs.google.com/forms/d/e/1FAIpQLSdI60725RKEF0N9Fhpt8Gr3GxqYlZVjzD245pVpY7rPYLGVeg/viewform"
          target="_blank"
          color="#FFA800"
          style="text-transform; margin:1%"
          class="google-font"
          depressed
          dark
        ><span style="color:#FFFFFF">Apply to be a Speaker</span></v-btn>
        
        <v-btn
          href="https://www.youtube.com/channel/UCQwfKyTWgagok-oX7sCgUmA/"
          target="_blank"
          color="red"
          style="text-transform; margin:1%"
          class="google-font"
          dark
          depressed
        >
        Subscribe on   <v-icon  style="margin-left:5%" large:color="this.$vuetify.theme.dark == true?'white':'white'">mdi-youtube</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aboutEvent from "@/assets/data/about.json";
export default {
  data: () => ({
    mainData: {}
  }),
  mounted() {
    this.mainData = aboutEvent;
  }
};
</script>
<template>
  <v-footer app inset padless absolute>
    <v-container
      fluid
      :class="
        this.$vuetify.theme.dark == true ? 'grey darken-4' : 'grey lighten-4'
      "
    >
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <v-card-text class="mx-0 px-0" style="height: 40px; position: relative;">
            <v-fab-transition>
              <v-btn
                aria-label="FAB Button"
                style="margin-top:-20px;"
                :color="this.$vuetify.theme.dark ? '#FF6F00' : 'white'"
                :dark="this.$vuetify.theme.dark?true:false"
                absolute
                top
                right
                fab
                @click="toTop"
              >
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </v-fab-transition>
            <h1
              class="google-font"
              :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-2'
              "
            >TFUG India Summit 2020</h1>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="5" sm="11" xl="10" cols="12">

        <a href="https://tensorflow.org/" target="_blank"
          rel="noreferrer"
          :class="
            $vuetify.theme.dark == true
            ? 'white--text'
            : 'grey--text text--darken-3'
            "
          class="mr-3 google-font"
          style="text-decoration:none;"
          >
          TensorFlow
        </a>

        <a href="https://developers.google.com" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-3 google-font"
            style="text-decoration:none;"
          >
          Google Developers
        </a>
        </v-col>
        
        <v-col md="5" sm="11" xl="10" cols="12" style="text-align:right">
          <router-link
            to="/faq"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-3 google-font"
            style="text-decoration:none;"
          >
          FAQ
        </router-link>
        
        <a href="https://www.instagram.com/tfugindia/" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-2 google-font"
            style="text-decoration:none;"
          >
          Instgram
        </a>
          
        <a href="https://twitter.com/TFUGIndia" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-2 google-font"
            style="text-decoration:none;"
          >
          Twitter
        </a>

        <a href="https://www.youtube.com/channel/UCQwfKyTWgagok-oX7sCgUmA/" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-2 google-font"
            style="text-decoration:none;"
          >
          YouTube
        </a>

         <a href="https://www.facebook.com/TFUGIndia" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-2 google-font"
            style="text-decoration:none;"
          >
          Facebook
        </a>

        <!-- <a href="https://twitter.com/TFUGIndia" rel="noreferrer" title="Twitter" target="_blank" style="text-decoration:none;">
                        <v-icon  :color="this.$vuetify.theme.dark == true?'white':'#1da1fa'">mdi-twitter</v-icon>
                    </a>
                    <a href="https://www.facebook.com/TFUGIndia" rel="noreferrer"  title="Facebook" target="_blank" style="text-decoration:none;">
                        <v-icon  :color="this.$vuetify.theme.dark == true?'white':'#1a4789'">mdi-facebook</v-icon>
                    </a>
                    <a href="https://www.instagram.com/TFUGIndia" rel="noreferrer" title="Instagram" target="_blank" style="text-decoration:none;">
                        <v-icon   :color="this.$vuetify.theme.dark == true?'white':'#bc3018'">mdi-instagram</v-icon>
                    </a> -->

        </v-col>
     
      
      
      
      
      
      
      
      </v-row>
      
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<template>
  <v-container fluid class="mb-0 pb-0 px-5">
    <v-row class="mb-0 pb-0 ">
      <v-col cols="12" class="mb-0 pb-0 px-0">
        <p class="google-font" offset-cols="1" :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'" style="font-weight: 350;font-size:200%">Themes</p>
        <v-tabs
          v-model="model"
          :color="this.$vuetify.theme.dark?'white':'#FF6F00'"
          :grow="getMobileTab()"
          left
          show-arrows
          :centered="getMobileTab()"
          :slider-color="this.$vuetify.theme.dark?'white':'#FF6F00'"
          class="grey lighten-2 mx-0"
          :background-color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          :class="$vuetify.theme.dark ? 'row-border-dark' : 'row-border-white'"
        >
          <v-tab
            href="#day1"
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            TensorFlow    
          </v-tab>
          <v-tab
            href="#day2"
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            For JavaScript
          </v-tab>
          <v-tab
            href="#day3"
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            For Mobile and IoT
          </v-tab>
          <v-tab
            href="#day4" 
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            For Production
          </v-tab>
           <v-tab
            href="#day5"
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            For Research   
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="my-0 py-0" >
      <v-col cols="12" class="my-0 py-0 " >
        <v-tabs-items v-model="model" :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
          <v-tab-item
            value="day1"
            class="my-0 py-0"
            :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container fluid class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    The core open source library to help you develop and train ML models. Get started quickly by 
                    running Colab notebooks directly in your browser.  <br>
                    <a href="https://www.tensorflow.org/overview/" rel="noreferrer" target="_blank" style="text-decoration:none;">
                    <p style="color:#FFA800">
                    Get started with TensorFlow.
                    </p>
                    </a>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item
            value="day2"
            class="my-0 py-0"
            :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container fluid class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    TensorFlow.js is a JavaScript library for training and deploying models in the browser and on Node.js.
                    <br>
                    <a href="https://www.tensorflow.org/js/" rel="noreferrer" target="_blank" style="text-decoration:none;">
                    <p style="color:#FFA800">
                    Get started with TensorFlow.js.
                    </p>
                    </a>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>

          <!-- day3 -->
          <v-tab-item
            value="day3"
            class="my-0 py-0"
           :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container fluid class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    TensorFlow Lite is a lightweight library for deploying models on mobile and embedded devices.
                    <br>
                    <a href="https://www.tensorflow.org/lite/" rel="noreferrer" target="_blank" style="text-decoration:none;">
                    <p style="color:#FFA800">
                    Get started with TensorFlow Lite.
                    </p></a>

                    
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>

          <!-- day4 -->
          <v-tab-item
            value="day4"
            class="my-0 py-0"
            :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container fluid class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    TensorFlow Extended is an end-to-end platform for preparing data, training, validating, and deploying models in large production environments.
                    <br>
                    <a href="https://www.tensorflow.org/tfx/" rel="noreferrer" target="_blank" style="text-decoration:none;">
                    <p style="color:#FFA800">
                    Get started with TensorFlow Extended.
                    </p>
                    </a>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>

          <!-- day 5 -->
           <v-tab-item
            value="day5"
            class="my-0 py-0"
           :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container fluid class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    Accelerate your cutting-edge machine learning research with free Cloud TPUs. The TensorFlow Research Cloud (TFRC) program enables researchers to apply for access to a cluster of more than 1,000 Cloud TPUs. 
                    <br>
                    <a href="https://www.tensorflow.org/tfrc" rel="noreferrer" target="_blank" style="text-decoration:none;">
                    <p style="color:#FFA800">
                    Read more : TensorFlow Research Cloud
                    </p></a>

                    
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "overview",
  data: () => ({
    model: "day1",
  }),
  methods: {
    getMobileTab() {
      if (window.innerWidth < 500) return true;
      else return false;
    },
  },
};
</script>

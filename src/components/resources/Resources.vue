<template>
  <v-container fluid class="mb-0 pb-0">
    <v-row align="justify">
      <v-col cols="12" md="12" sm="7" lg="12" xl="12" class="">
        <p class="google-font mb-1" style="font-weight: 350;font-size:200%">
          <b class="google-font" :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'" >
            Let’s overfit..err...all come together
          </b> 
        </p>
        <p class="google-font mt-3" style="text-align:justify">
          A lot of the TensorFlow India Summit is going to cover the fundamentals, so if you are starting out, don’t miss out - Join us.
        </p>
        <p class="google-font mt-3" style="text-align:justify">
          We have broken down the summit into 4 days, covering four tracks - <br>
          Day 1 - TensorFlow Core and TF for Web <br>
          Day 2 - TF for Mobile <br>
          Day 3 - TF For Production <br>
          Day 4 - TF for Research <br>
        </p>
        <p class="google-font mt-3" style="text-align:justify">
          While we are open to welcome everyone and a digital event means anyone can join, the content will be tailored to India region audiences.
        </p>
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

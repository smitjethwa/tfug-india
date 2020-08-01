<template >
  <v-content class="ma-0">
    <v-container
      fluid
      class="pb-0" 
      :class="this.$vuetify.theme.dark == true?'grey darken-4 elevation-1':'white-border white'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" class="">
          <v-container fluid class="my-2">
            <v-row justify="start" align="center" class="">
              <v-col md="12" class="text-center" >
                <!-- <v-img :src="require('@/assets/img/webdevlogo.png')" style="margin-left:auto;margin-right:auto" width="5vh"></v-img> -->
                <h1 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'" class="google-font mb-0" style="font-size:180%">Check out our speaker lineup</h1>
                <p class="google-font" style="width:80%;margin-left:auto;margin-right:auto;font-size:110%">
                  Hear from the Googlers, and Guest Speakers who are building the future. Check back often as we add more speakers, including CFP Speakers.
                  </p>
                  
                   <v-btn
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdI60725RKEF0N9Fhpt8Gr3GxqYlZVjzD245pVpY7rPYLGVeg/viewform"
                      target="_blank"
                      aria-label="Home BTN"
                      color="#FFA800"
                      style="text-transform"
                      class="google-font mt-2"
                      depressed
                      large
                      dark
                    ><span style="color:#FFFFFF">Apply to be a Speaker</span></v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="mb-5 pb-5">
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12">
          
          <v-container>
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in SpeakersData"
                :key="index"
              >
                <Speakers :data="item" :SessionDetails="SessionDetails" />
              </v-col>
              <!-- <ComingSoon class="text-center" /> -->
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="8" xl="7">
          <SocialShare/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import SpeakersData from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
export default {
  name: "SpeakersPage",
  components: {
    Speakers:()=>import('@/components/speaker/SpeakerDetails'),
    // ComingSoon:()=>import('@/components/common/ComingSoon'),
    SocialShare: () => import("@/components/common/SocialShare")
  },
  data: () => ({
    SpeakersData: [],
    SessionDetails:[]
  }),
  mounted() {
    this.SpeakersData = this.sortByName(SpeakersData)
    this.SessionDetails = SessionDetails.sort((a,b)=>{
      return (a.id > b.id)?1:-1;
    });
  }
};
</script>

<style scoped>
.white-border{
  border-bottom: 1px solid #e0e0e0 !important;
}
</style>
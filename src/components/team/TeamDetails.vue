<template v-slot:activator="{ on }">
  <div
    v-on="on"
    class="text-center py-1 ma-2 fill-height"
    :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'"
  >
    <v-container>
      <v-row>
        <v-col md="12" col="12" class="text-center">
          <v-avatar width="100%" height="90%">
            <img :src="getTeamImgUrl(data.image)" :lazy-src="getTeamImgUrl(data.image)" alt />
          </v-avatar>
          <p class="mt-0 mb-0 google-font" style="font-size:89%">{{ data.name }}</p>
          <!-- <p class="mt-0 mb-0 google-font" style="font-size:79%">{{ data.orgs }}</p> -->
          <socialMediaDetails :data="data.social" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import socialMediaDetails from "@/components/common/SocialInfo";
export default {
  components: {
    socialMediaDetails
  },
  inject: ["theme"],
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  mounted() {},
  methods: {
    goToTeam(id) {
      this.$router.push("/team/" + id);
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) return val.substring(0, num) + "..";
      else return val;
    }
  }
};
</script>

<style>
.darkModeCard {
  background-color: #292929;
  border: 1px solid #212121;
  border-radius: 5px;
}
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>

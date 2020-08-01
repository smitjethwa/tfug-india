<template>
    <v-container fluid >
        <v-row>
            <v-col md="6" cols="12" sm="6">
                <v-card class="pa-5 elevation-0" outlined :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'" rel="noreferrer"  target="_blank">
                    <h2 class="google-font mt-2 mb-2">Stay connected</h2>
                    <p class="google-font">Keep up with the latest news and announcements. Join the conversation on Social Media.</p>
                    <p class="google-font mt-5 mb-0" style="font-size:120%">Follow us on  
                    <a href="https://twitter.com/TFUGIndia" rel="noreferrer" title="Twitter" target="_blank" style="text-decoration:none;">
                        <v-icon  :color="this.$vuetify.theme.dark == true?'white':'#1da1fa'">mdi-twitter</v-icon>
                    </a>
                    <a href="https://www.facebook.com/TFUGIndia" rel="noreferrer"  title="Facebook" target="_blank" style="text-decoration:none;">
                        <v-icon  :color="this.$vuetify.theme.dark == true?'white':'#1a4789'">mdi-facebook</v-icon>
                    </a>
                    <a href="https://www.instagram.com/TFUGIndia" rel="noreferrer" title="Instagram" target="_blank" style="text-decoration:none;">
                        <v-icon   :color="this.$vuetify.theme.dark == true?'white':'#bc3018'">mdi-instagram</v-icon>
                    </a>

                    </p>
                </v-card>
            </v-col>
            <v-col md="6" cols="12" sm="6">
                <v-card class="pa-5 elevation-0" outlined :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'" to="/faq">
                    <!-- <v-icon color="#FBBC04">mdi-star</v-icon> -->
                    <h2 class="google-font mt-2 mb-2">Frequently Asked Questions</h2>
                    <p class="google-font">Get all the details about TFUG India Summit including event content, schedule, access, what to expect, and more.</p>
                    <p class="google-font mt-5 mb-0" style="font-size:120%">See FAQs</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
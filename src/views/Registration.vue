<template>
  <v-content class="ma-0">
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="5" xl="5" sm="11" cols="12" class="text-center">
          <br />
          <v-img
            style="margin-left:auto;margin-right:auto"
            width="5vh"
          ></v-img>
          <p
            class="google-font mb-1"
            :class="
              this.$vuetify.theme.dark
                ? 'white--text'
                : 'grey--text text--darken-2'
            "
            style="font-weight: 350;font-size:200%"
          >TFUG India Summit Registration</p>
          <!-- <p
            class="google-font"
            :class="
              this.$vuetify.theme.dark
                ? 'white--text'
                : 'grey--text text--darken-2 mt-0'
            "
            style="font-weight: 350;font-size:130%"
            v-if="!formSubmitted"
          >Bringing Indian web devs together, from home</p> -->
          <v-divider></v-divider>

          <p class="google-font mt-4"  v-if="!formSubmitted" style="font-size:110%;">
            Connect with us at
            <a
              href="https://twitter.com/TFUGIndia"
              rel="noreferrer"
              target="_blank"
              style="text-decoration:none;"
            >
              <span style="color:#FF6F00">
                @TFUGIndia
              </span>
            </a> for the
            latest updates.
            <br />For any query, contact us at:
            <a
              href="mailto:tensorflow@gmail.com"
              style="text-decoration:none"
              :class="$vuetify.theme.dark == true ? 'white--text' : 'black--text'"
            >tensorflow@gmail.com</a>
          </p>
          <p class="google-font mt-4" style="font-size:100%;">
            <span v-for="(item,i) in mainData.hashtags" :key="i">
              <v-chip
                :href="'https://twitter.com/hashtag/'+item"
                rel="noopener"
                target="_blank"
                outlined
                color="#FF6F00"
                label
                class="mr-1"
              >#{{item}}</v-chip>
              <!-- &nbsp; -->
            </span>
          </p>
        </v-col>

        <!-- Form -->
        <v-col md="12" sm="11" xl="10" cols="12" v-if="!formSubmitted">
          <form ref="formElement" @submit.prevent="response">
            <v-container>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Email"
                    v-on:change="validateForm()"
                    v-model="userInfo.email"
                    name="emailAddress"
                    :rules="[rules.required, rules.email]"
                    outlined
                    required
                    id="email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="First Name"
                    :rules="[rules.required]"
                    v-on:change="validateForm()"
                    v-model="userInfo.fname"
                    name="entry.468300441"
                    outlined
                    required
                    id="fname"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Last Name"
                    v-on:change="validateForm()"
                    v-model="userInfo.lname"
                    outlined
                    :rules="[rules.required]"
                    name="entry.2146700190"
                    required
                    id="lname"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Company / Institute Name "
                    outlined
                    v-on:change="validateForm()"
                    v-model="userInfo.company"
                    :rules="[rules.required]"
                    required
                    name="entry.996142731"
                    id="organization"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Role"
                    v-on:change="validateForm()"
                    v-model="userInfo.role"
                    outlined
                    :rules="[rules.required]"
                    required
                    name="entry.868615869"
                    id="role"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="City"
                    outlined
                    v-on:change="validateForm()"
                    v-model="userInfo.city"
                    :rules="[rules.required]"
                    required
                    name="entry.1550631012"
                    id="city"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Country"
                    outlined
                    v-on:change="validateForm()"
                    v-model="userInfo.country"
                    :rules="[rules.required]"
                    required
                    name="entry.1772296180"
                    id="country"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-radio-group
                    id="gender"
                    name="entry.1737451561"
                    v-model="userInfo.genderRadioGroup"
                    v-on:change="validateForm()"
                    :rules="[rules.required]"
                  >
                    
                      How would you like to identify yourself as?
                    <v-radio value="Male" v-slot:label id="male">
                      Male
                    </v-radio>
                    <v-radio value="Female"  id="female" v-slot:label>
                      Female
                    </v-radio>
                    <v-radio value="Prefer not to say"  id="none" v-slot:label>
                      Prefer not to say
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-radio-group
                    name="entry.757164378"
                    id="experience"
                    v-model="userInfo.expRadioGroup"
                    v-on:change="validateForm()"
                    :rules="[rules.required]"
                    value="hello"
                  >
                    <div
                      class="google-font"
                      style="font-size:120%;"
                      :style="$vuetify.theme.dark ? 'color:white !important' : 'color:black !important'"
                    >
                      Years of experience

                    </div>
                    <v-radio value="0 - 5 years" id="experience" v-slot:label>
                      0 - 5 years
                    </v-radio>
                    <v-radio value="6 - 10 years"  id="experience" v-slot:label>
                      6 - 10 years
                    </v-radio>
                    <v-radio value="11 - 20 years" id="experience" v-slot:label>
                      11 - 20 years
                    </v-radio>
                    <v-radio value="21+ years" id="experience" v-slot:label>
                      21+ years
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
                       
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-textarea
                    outlined
                    id="message"
                    label="Anything else you want to share with us?"
                    name="entry.1763016329"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-btn
                    color="primary"
                    :loading="loader"
                    large
                    type="submit"
                    :disabled="invalidEntry"
                  >Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </form>
        </v-col>

        <!-- Thank you msg -->
        <v-col
          md="8"
          sm="11"
          xl="8"
          cols="12"
          class="text-center"
          v-if="formSubmitted && formClosed === false"
        >
          <h1 class="google-font">Bringing Indian web devs together, from home</h1>
          <br />
          <p class="google-font" style="font-size:110%">
            Thank you for registering for
            <a
              href="https://twitter.com/WebDevLiveIndia"
              rel="noreferrer"
              target="_blank"
              style="text-decoration:none"
            >
              <b>#WebDevLiveIndia</b>
            </a>.
            <br />We will be sending the confirmation mail after
            <b>4th July, 2020</b>.
            <br />
            <v-btn
              href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwebdevlivein.web.app&ref_src=twsrc%5Etfw&text=console.log%28%27Hi%20%23WebDevs%27%29%3B%0A%0AI%20have%20registered%20for%20%23WebDevLiveIndia%20to%20attend%20many%20amazing%20sessions.%0AHave%20you%3F%0A%0AIf%20not%2C%20register%20yourself%20at%3A%20goo.gle%2Fwebdevliveindia%0A%0A%23WebDev%20%23WebDevLive%20%40WebDevLiveIndia"
              target="_blank"
              rel="noreferrer"
              dark
              color="#4285F4"
              class="mt-2 google-font"
            >
              <v-icon size="20px" left>mdi-twitter</v-icon>
              <b>Share your excitement</b>
            </v-btn>
          </p>
        </v-col>
        <!-- Form Not Accepting -->
        <v-col
          md="8"
          sm="11"
          xl="8"
          cols="12"
          class="text-center"
          v-if="formSubmitted && formClosed"
        >
          <br />
          <p style="font-size:130%">The form is no longer accepting responses.</p>
          <p class="google-font">
            For any query, write to:
            <a
              href="mailto:tfugindia@gmail.com"
              style="text-decoration:none"
              :class="$vuetify.theme.dark == true ? 'white--text' : 'primary--text'"
            >webdevliveindia@gmail.com</a>
            <br />
            <br />Connect with us at
            <a
              href="https://twitter.com/TFUGIndia"
              rel="noreferrer"
              target="_blank"
              style="text-decoration:none;"
            >@WebDevLiveIndia</a>
            for the latest updates.
            <br />
            <b></b>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import aboutEvent from "@/assets/data/about.json";
import axios from "axios";
export default {
  data: () => ({
    rules: {
      required: value => !!value || "This field is required.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail address";
      }
    },
    userInfo: {
      fname: null,
      lname: null,
      email: null,
      city: null,
      country: null,
      company: null,
      role: null,
      genderRadioGroup: 0,
     expRadioGroup: 0
    },
    invalidEntry: true,
    errorMessage: false,
    formSubmitted: false, // false
    formClosed: null, // null
    mainData: [],
    loader: false
  }),
  mounted() {
    this.mainData = aboutEvent;
  },
  methods: {
    validateForm() {
      if (
        this.userInfo.fname &&
        this.userInfo.lname &&
        this.userInfo.email &&
        this.rules.email(this.userInfo.email) !== "Invalid e-mail." &&
        this.userInfo.city &&
        this.userInfo.country &&
        this.userInfo.company &&
        this.userInfo.role &&
        this.userInfo.expRadioGroup !== 0 &&
        this.userInfo.genderRadioGroup !== 0 
      ) {
        this.invalidEntry = false;
      } else {
        this.invalidEntry = true;
      }
    },
    response() {
     var email = document.getElementById("email").value;
     var fname = document.getElementById("fname").value;
     var lname = document.getElementById("lname").value;
     var organization = document.getElementById("organization").value;
     var role = document.getElementById("role").value;
     var city = document.getElementById("city").value;
     var country = document.getElementById("country").value;
     var gender = document.getElementById("gender").value;
     var experience = document.getElementById("experience").value;
     var message  = document.getElementById("message").value;
     console.log(email,fname,lname,organization,role,city,country,gender,experience,message);
     }
  }
};
</script>

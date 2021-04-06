<template>
  <amplify-authenticator>
    <amplify-sign-out></amplify-sign-out>
    <textarea v-model="msgText" placeholder="Write a message here"></textarea>
    <button @click="createMessage">Create Message</button>
    <button @click="getMessages">Get Messages</button>
    <div id="message">{{ localErrorMsg }}</div>
    <div id="response">
      <pre>      {{ apiResponse | pretty }} </pre>
    </div>
    <!-- The rest of your app code -->
  </amplify-authenticator>
</template>

<script>
import axios from 'axios';
import { Auth } from 'aws-amplify';

export default {
  name: 'App',
  data() {
    return {
      apiResponse: 'API response will be shown here.',
      msgText: '',
      localErrorMsg: 'Browser errors go here..',
    };
  },

  filters: {
    pretty(value) {
      JSON.stringify();
      return JSON.stringify(value, null, 2);
    },
  },

  methods: {
    async createMessage() {
      let user;
      let token;
      try {
        user = await Auth.currentAuthenticatedUser();
        token = user.signInUserSession.idToken.jwtToken;
        console.log(token);
      } catch (err) {
        this.localErrorMsg = err;
      }
      this.apiResponse = 'Returning creted message..';
      axios
        .post(
          'https://w7fhktx3j4.execute-api.us-east-1.amazonaws.com/latest/messages',
          {
            text: this.msgText,
          },
          {
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          this.apiResponse = response;
        })
        .catch((err) => {
          this.apiResponse = err;
        });
    },

    getMessages() {
      console.log('Get messages function');
      this.apiResponse = 'Loading..';
      axios
        .get('https://w7fhktx3j4.execute-api.us-east-1.amazonaws.com/latest/messages')
        .then((result) => {
          this.apiResponse = result;
        })
        .catch((err) => {
          this.apiResponse = err;
        });
    },
  },
};
</script>

<style></style>

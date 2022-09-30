import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-vs2e5wst.us.auth0.com",
    client_id: "8jP639CYGEdGBIhoKRqE867nAkt1Ibmu",
    redirect_uri: window.location.origin
  })
);

app.mount('#app')

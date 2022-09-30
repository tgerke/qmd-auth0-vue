<template>
  <div>
    <button @click="login">Log in</button>
    <button @click="logout">Log out</button>
  </div>

  <pre v-if="isAuthenticated">
    <code>{{ user }}</code>
  </pre>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ returnTo: window.location.origin });
        },
        user,
        isAuthenticated
      };
    }
  };
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>

      <v-btn text href="/">
        <span class="mr-2">Solvo test</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view>
        <Login/>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Login from '@/views/Login.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Login,
  },
};
</script>

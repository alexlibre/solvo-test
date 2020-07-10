<template>
  <div class="journal">
    <v-card width="768" class="mx-auto mt-5 pa-5">
      <v-card-title class="headline">Journal</v-card-title>
      <v-list>
        <v-list-item v-for="(item, i) in getAll" :key="i">
          {{item.text}} — {{item.timestamp.toUTCString()}}
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Journal',
  computed: {
    ...mapGetters([
      'getAll',
    ]),
  },
};
</script>

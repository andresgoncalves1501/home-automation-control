<template>
  <!-- light -->
  <div class="light">
    <img v-bind:src="light" alt="light_on" v-on:click.prevent="toggleLight()" />
  </div>
</template>

<script>
export default {
  name: "Alarm",
  props: {
    place: String
  },
  computed: {
    light() {
      for (var i in this.$store.state.light.data) {
        if (
          this.$store.state.light.data[i].place === this.place &&
          this.$store.state.light.data[i].on
        ) {
          return require("../assets/images/light_on.png");
        }
      }

      return require("../assets/images/light_off.png");
    }
  },
  methods: {
    toggleLight() {
      this.$store.dispatch("light/toggle", this.place);
    }
  }
};
</script>

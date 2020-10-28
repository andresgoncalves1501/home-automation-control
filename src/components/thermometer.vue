<template>
  <!-- thermometer -->
  <div class="thermometer">
    <img
      v-bind:src="thermometer"
      alt="thermometer"
      v-on:click.prevent="toggleThermometer()"
    />
    <div class="temperature">
      <span v-on:click.prevent="reduceTemp()">&#8249;</span>
      <h6>{{ temperature }} ºC</h6>
      <span v-on:click.prevent="increaseTemp()">&#8250;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thermometer",
  props: {
    place: String
  },
  computed: {
    temperature() {
      for (var i in this.$store.state.thermometer.data) {
        if (
          this.$store.state.thermometer.data[i].place === this.place &&
          this.$store.state.thermometer.data[i].on
        ) {
          return this.$store.state.thermometer.data[i].temp;
        }
      }

      return "n/d";
    },
    thermometer() {
      for (var i in this.$store.state.thermometer.data) {
        if (this.$store.state.thermometer.data[i].place === this.place) {
          if (this.$store.state.thermometer.data[i].on) {
            return require("../assets/images/thermometer_on.png");
          }
        }
      }

      return require("../assets/images/thermometer_off.png");
    }
  },
  methods: {
    increaseTemp() {
      this.$store.dispatch("thermometer/increase", this.place);
    },
    reduceTemp() {
      this.$store.dispatch("thermometer/reduce", this.place);
    },
    toggleThermometer() {
      this.$store.dispatch("thermometer/toggle", this.place);
    }
  }
};
</script>

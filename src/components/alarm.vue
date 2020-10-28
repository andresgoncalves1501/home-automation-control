<template>
  <!-- alarm -->
  <div class="alarm">
    <img v-bind:src="alarm" alt="alarm" v-on:click.prevent="toggleAlarm()" />
  </div>
</template>

<script>
export default {
  name: "Alarm",
  props: {
    place: String
  },
  computed: {
    alarm() {
      for (var i in this.$store.state.alarm.data) {
        if (
          this.$store.state.alarm.data[i].place === this.place &&
          this.$store.state.alarm.data[i].on
        ) {
          return require("../assets/images/alarm_on.png");
        }
      }

      return require("../assets/images/alarm_off.png");
    }
  },
  methods: {
    toggleAlarm() {
      this.$store.dispatch("alarm/toggle", this.place);
    }
  }
};
</script>

<template>
  <!-- stove -->
  <div class="stove">
    <!-- <div
          v-for="index in 4"
          class="stovepipe"
          :class="'__' + index"
          :key="index"
        >
          <img
            v-bind:src="stovepipe[index]"
            alt="stovepipe"
            v-on:click.prevent="toggleStove(index)"
          />
        </div> -->

    <!-- stovepipe nº1 -->
    <div class="stovepipe __1">
      <img
        v-bind:src="stovepipe1"
        alt="stovepipe"
        v-on:click.prevent="toggleStove(1)"
      />
    </div>

    <!-- stovepipe nº2 -->
    <div class="stovepipe __2">
      <img
        v-bind:src="stovepipe2"
        alt="stovepipe"
        v-on:click.prevent="toggleStove(2)"
      />
    </div>

    <!-- stovepipe nº3 -->
    <div class="stovepipe __3">
      <img
        v-bind:src="stovepipe3"
        alt="stovepipe"
        v-on:click.prevent="toggleStove(3)"
      />
    </div>

    <!-- stovepipe nº4 -->
    <div class="stovepipe __4">
      <img
        v-bind:src="stovepipe4"
        alt="stovepipe"
        v-on:click.prevent="toggleStove(4)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Stove",
  props: {
    place: String
  },
  computed: {
    stovepipe1() {
      for (var i in this.$store.state.stove.data) {
        if (this.$store.state.stove.data[i].stovepipe === 1) {
          return require("../assets/images/stovepipe_" +
            this.$store.state.stove.data[i].temp +
            ".png");
        }
      }

      return require("../assets/images/stovepipe_0.png");
    },
    stovepipe2() {
      for (var i in this.$store.state.stove.data) {
        if (this.$store.state.stove.data[i].stovepipe === 2) {
          return require("../assets/images/stovepipe_" +
            this.$store.state.stove.data[i].temp +
            ".png");
        }
      }

      return require("../assets/images/stovepipe_0.png");
    },
    stovepipe3() {
      for (var i in this.$store.state.stove.data) {
        if (this.$store.state.stove.data[i].stovepipe === 3) {
          return require("../assets/images/stovepipe_" +
            this.$store.state.stove.data[i].temp +
            ".png");
        }
      }

      return require("../assets/images/stovepipe_0.png");
    },
    stovepipe4() {
      for (var i in this.$store.state.stove.data) {
        if (this.$store.state.stove.data[i].stovepipe === 4) {
          return require("../assets/images/stovepipe_" +
            this.$store.state.stove.data[i].temp +
            ".png");
        }
      }

      return require("../assets/images/stovepipe_0.png");
    }
  },
  methods: {
    toggleStove(stovepipe) {
      this.$store.dispatch("stove/toggle", stovepipe);
    }
  }
};
</script>

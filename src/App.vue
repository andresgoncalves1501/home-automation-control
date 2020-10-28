<template>
  <div class="app" id="app">
    <!-- kitchen -->
    <div class="kitchen">
      <h1>COZINHA</h1>
      <div class="container">
        <stove :place="'kitchen'"></stove>
        <alarm :place="'kitchen'"></alarm>
        <light :place="'kitchen'"></light>
        <thermometer :place="'kitchen'"></thermometer>
      </div>

      <!-- kitchen walls -->
      <div class="wall __top_left"></div>
      <div class="wall __top_right"></div>
      <div class="wall __bottom"></div>
      <div class="wall __left"></div>
      <div class="wall __right"></div>
    </div>

    <!-- living-room -->
    <div class="living-room">
      <h1>SALA</h1>
      <div class="container">
        <alarm :place="'living-room'"></alarm>
        <light :place="'living-room'"></light>
        <thermometer :place="'living-room'"></thermometer>
      </div>

      <!-- living-room walls -->
      <div class="wall __top"></div>
      <div class="wall __bottom_left"></div>
      <div class="wall __bottom_right"></div>
      <div class="wall __left"></div>
      <div class="wall __right"></div>
    </div>

    <!-- room -->
    <div class="room">
      <h1>QUARTO</h1>
      <div class="container">
        <alarm :place="'room'"></alarm>
        <light :place="'room'"></light>
        <thermometer :place="'room'"></thermometer>
      </div>

      <!-- room walls -->
      <div class="wall __top"></div>
      <div class="wall __bottom_left"></div>
      <div class="wall __bottom_right"></div>
      <div class="wall __left"></div>
      <div class="wall __right"></div>
    </div>

    <!-- stairs -->
    <div class="stairs">
      <h1>ESCADAS</h1>
      <div class="container">
        <alarm :place="'stairs'"></alarm>
        <light :place="'stairs'"></light>
      </div>

      <!-- stairs walls -->
      <div class="wall __top_left"></div>
      <div class="wall __top_right"></div>
      <div class="wall __bottom_left"></div>
      <div class="wall __bottom_right"></div>
      <div class="wall __left"></div>
      <div class="wall __right"></div>
    </div>

    <!-- wc -->
    <div class="wc">
      <h1>WC</h1>
      <div class="container">
        <alarm :place="'wc'"></alarm>
        <light :place="'wc'"></light>
      </div>

      <!-- wc walls -->
      <div class="wall __top"></div>
      <div class="wall __bottom_left"></div>
      <div class="wall __bottom_right"></div>
      <div class="wall __left"></div>
      <div class="wall __right"></div>
    </div>
  </div>
</template>

<script>
import alarm from "./components/alarm";
import light from "./components/light";
import stove from "./components/stove";
import thermometer from "./components/thermometer";

export default {
  name: "App",
  components: {
    alarm,
    light,
    stove,
    thermometer
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/style.scss";
</style>

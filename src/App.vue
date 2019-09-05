<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  font-style: normal;
}

.condensedFont {
  font-family: Open Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
}

.lightFont {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #828282;
}

.apexcharts-toolbar div svg{
  fill: white;
}

.apexcharts-canvas .apexcharts-zoom-icon.selected svg {
  fill: #093a3d !important;
}

.apexcharts-gridline{
  stroke-opacity: 0.2;
}

</style>

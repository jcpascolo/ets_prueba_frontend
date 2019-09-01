<template>
  <div class="col-6 col-sm-4 col-md-12 px-3 my-2 my-sm-4 d-flex align-self-center">
    <img :src="getImgPath(icon)" v-bind:alt="icon">
    <p class="my-0 ml-2 align-self-center">{{name}}</p> 
  </div>
</template>

<script>
export default {
  name: "OptionButton",
  props: ["icon", "name", "isActive"],
  data() {
    return {};
  },  

  methods: {
    getImgPath(icon) {
      return require('../assets/'+icon)
    }
  },
};
</script>

<style scoped>
p{
  display: inline;
  text-align: center;
}
</style>


<template>
  <button type="button" class="col-6 col-sm-4 col-md-12 px-3 my-2 my-sm-4 d-flex align-self-center">
    <img :src="getImgPath(icon)" v-bind:alt="icon" />
    <p 
    class="my-0 ml-2 align-self-center"
    :class="[ isActive ? 'colorActive' : 'colorInactive']">{{name}}</p>
  </button>
</template>

<script>
export default {
  name: "OptionButton",
  props: ["icon", "name", 'filterName'],
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    getImgPath(icon) {
      return require("../assets/" + icon);
    }
  },

  mounted() {
    if(this.name == "All"){
      this.isActive = true
    }

    Event.$on('changeOption', data => {
      if(data.filter == this.filterName){
        if(data.option == this.name){
          this.isActive = true;
        }
        else {
          this.isActive = false;
        }
      }
    })
  }
};
</script>

<style scoped>
button {
  background-color: #f2f2f2;
  border: 0px;
  color: #828282;
}

.colorActive{
  color:#02B5C4;
}

.colorInactive{
  color: #828282;
}

p {
  display: inline;
  text-align: center;

  font-family: Open Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
}

@media (max-width: 768px) {
  button {
  background-color: white;
  }
}
</style>


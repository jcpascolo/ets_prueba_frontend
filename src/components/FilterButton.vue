<template>
  <button type="button" class="col-6 col-md-12 px-0 my-3">
    <div class="row mx-0">
      <div class="col-1 px-0 align-items-center">
        <svg
          width="192"
          height="27"
          viewBox="0 0 192 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{'d-none' : !isActive}"
        >
          <path
            opacity="0.2"
            d="M0 27C7.1797 27 13 20.9558 13 13.5C13 6.04416 7.1797 0 0 0V27Z"
            fill="#02B5C4"
          />
          <path
            d="M0 20C3.40091 20 6.15789 17.0899 6.15789 13.5C6.15789 9.91015 3.40091 7 0 7V20Z"
            fill="#02B5C4"
          />
        </svg>

        <svg
          width="192"
          height="25"
          viewBox="0 0 192 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{'d-none' : isActive}"
        >
          <path
            d="M0 18C3.40091 18 6.15789 15.0899 6.15789 11.5C6.15789 7.91015 3.40091 5 0 5V18Z"
            fill="#E0E0E0"
          />
        </svg>
      </div>
      <div class="col-3 px-0 align-self-center d-flex justify-content-center">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="align-items-middle"
        >
          <path :d="svgD" :class="[ isActive ? 'fillActive' : 'fillInactive']" />
        </svg>
      </div>
      <p 
      class="col-8 px-0 my-0 condensedFont"
      :class="[ isActive ? 'nameColorActive' : 'fillInactive']">{{filterName}}</p>
    </div>

    <div class="row mx-0">
      <p 
      class="filterOption col-8 offset-4 px-0"
      :class="[ isActive ? 'fillActive' : 'fillInactive']">{{filterOpt}}</p>
    </div>
  </button>
</template>

<script>
export default {
  name: "FilterButton",
  props: ["svgD", "filterName", "isActive", "parentFilterOpt"],
  data() {
    return {
      filterOpt: ""
    };
  },
  methods: {},
  mounted() {
    this.filterOpt = this.parentFilterOpt;

    Event.$on('changeOption', data => {
      if(data.filter == this.filterName){
        this.filterOpt = data.option;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
button{
  background-color: white;
  border: 0px;
}
.fillActive {
  fill: #02b5c4;
  color: #02b5c4;
}

.nameColorActive{
  color: #828282;
}

.fillInactive {
  fill: #bdbdbd;
  color:#BDBDBD;
}


.filterOption {
  font-family: Open Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
}
</style>


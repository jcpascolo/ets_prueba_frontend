<template>
  <div class="col-12 px-0">
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
      <div class="col-8 px-0 d-flex align-items-center condensedFont">{{filterName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterButton",
  props: ["svgD", "filterName", "isActive", "id"],
  data() {
    return {};
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
.fillActive {
  fill: #02b5c4;
}

.fillInactive {
  fill: #bdbdbd;
}
</style>


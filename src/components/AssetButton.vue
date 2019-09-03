<template>
  <div class="col-12 px-0 my-3 assetDiv">
    <div class="row mx-0">
      <div class="col-12 col-md-6 px-0 nameAsset d-flex justify-content-center">
        <p class="my-3 px-2 align-items-center condensedFont">{{asset.name}}</p>
      </div>
      <div class="col-12 col-md-6 px-0 infoAsset">
        <div class="row mx-0 h-100">
          <div v-for="(filter, index) in filters" :key="filter.name" class="col-6 px-1 h-100">
            <div class="row py-3 my-sm-0 mx-0 h-100">
              <div class="col-2 px-0 d-flex justify-content-center">
                <svg
                  class="my-auto"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path :d="filters[index].d" :fill="svgColor" class="hoverColor" />
                </svg>
              </div>
              <div class="col-10 px-0 d-flex">
                <p
                  class="my-0 mt-1 mr-0 pl-1 align-self-center hoverColor lightFont"
                >{{filters[index].name}}</p>
                <p
                  class="my-0 pt-1 mr-0 pl-2 pr-1 align-self-center hoverColor lightFont formatedFont"
                >{{asset[filters[index].name.toLowerCase()] || asset["risk_family"]}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssetButton",
  props: ["asset", "filters"],
  data() {
    return {
      svgColor: "#02B5C4"
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.h-100 {
  height: 100%;
}

.assetDiv {
  background-color: #f2f2f2;
  border-radius: 10px;
  .row {
    border-radius: 10px;
  }
}

.nameAsset {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.infoAsset {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.assetDiv:hover {
  cursor: url("../assets/pointer.svg"), auto;

  .nameAsset {
    background-color: #e0e0e0;
  }

  .infoAsset {
    background-color: #02b5c4;
  }

  .hoverColor {
    fill: white;
    color: white;
  }
}

.condensedFont {
  font-size: 12px;
  line-height: 16px;
}

.lightFont.formatedFont {
  font-weight: normal;
  color: #4f4f4f;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-transform: none;
}

@media (max-width: 768px) {
  .nameAsset {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }

  .infoAsset {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 0px;
  }
}
</style>


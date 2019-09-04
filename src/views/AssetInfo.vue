<template>
  <div class="container-fluid h-100 px-0">
    <div class="row mx-0 h-10 align-items-center logoDiv">
      <div class="col-12 px-0">
        <Logo class="logoFix" />
      </div>
    </div>

    <div class="row mx-0 h-90">
      <div class="col-12 px-0">
        <div class="row mx-0">
          <div class="col-12 py-3 returnBtn d-flex">
            <div class="row mx-0 align-items-start">
              <svg class="my-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.757 12.0001L15.707 16.9501C15.8025 17.0423 15.8787 17.1526 15.9311 17.2747C15.9835 17.3967 16.0111 17.5279 16.0122 17.6607C16.0134 17.7934 15.9881 17.9251 15.9378 18.048C15.8875 18.1709 15.8133 18.2826 15.7194 18.3765C15.6255 18.4703 15.5138 18.5446 15.3909 18.5949C15.268 18.6452 15.1364 18.6705 15.0036 18.6693C14.8708 18.6682 14.7396 18.6406 14.6176 18.5882C14.4956 18.5358 14.3852 18.4596 14.293 18.3641L8.63599 12.7071C8.44852 12.5195 8.3432 12.2652 8.3432 12.0001C8.3432 11.7349 8.44852 11.4806 8.63599 11.2931L14.293 5.63606C14.4816 5.4539 14.7342 5.35311 14.9964 5.35538C15.2586 5.35766 15.5094 5.46283 15.6948 5.64824C15.8802 5.83365 15.9854 6.08446 15.9877 6.34666C15.9899 6.60885 15.8891 6.86146 15.707 7.05006L10.757 12.0001Z" fill="#02B5C4"/>
              </svg>
              <span class="align-self-center condensedFont ml-2">Volver</span>
            </div>            
          </div>
        </div>
        <div class="row mx-0 h-100">
          <div class="col-12 col-md-5 px-2 chartCol h-100">chart</div>
          <div class="col-7 px-2 infoCol h-100">
            <div class="row mx-0">
              <div class="col-12 my-5">
                <p class="my-1 lightFont">Name</p>
                <p class="my-0 condensedFont dataColor">{{assetInfo.name}}</p>                
              </div>

              <div class="col-12 my-0">
                <p class="my-1 lightFont">Currency</p>
                <p class="mt-0 mb-3 lightFont dataColor">{{assetInfo.currency.name}}</p>
              </div>
              <div class="col-12 my-0">
                <p class="my-1 lightFont">Issuer</p>
                <p class="mt-0 mb-3 lightFont dataColor">{{assetInfo.issuer.name}}</p>
              </div>
              <div class="col-12 my-0">
                <p class="my-1 lightFont">Isin</p>
                <p class="mt-0 mb-3 lightFont dataColor">{{assetInfo.isin}}</p>
              </div>
              <div class="col-12 my-0">
                <p class="my-1 lightFont">Region</p>
                <p class="mt-0 mb-3 lightFont dataColor">{{assetInfo.region.name}} / {{assetInfo.region.region_level2.name}} / {{assetInfo.region.region_level2.region_level3.name}}</p>
              </div>
              <div class="col-12 my-0">
                <p class="my-1 lightFont">Risk Family</p>
                <p class="mt-0 mb-3 lightFont dataColor">{{assetInfo.risk_family.name}} / {{assetInfo.risk_family.sub_family.name}}</p>
              </div>
              <div class="col-12 my-0">
                <p class="my-1 lightFont">Sector</p>
                <p class="mt-0 mb-3 lightFont dataColor">{{assetInfo.sector.name}}</p>
              </div>
            </div>
            <div class="row mx-0">
              <div class="col-12 mt-4">
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";

export default {
  name: "AssetInfo",
  components: {
    Logo
  },
  data() {
    return {
      assetInfo: []
    };
  },
  computed: {},

  methods: {},

  created() {},

  mounted() {
    fetch("http://jsonstub.com/" + this.$route.params.id, {
      method: "GET",

      // THIS IS IMPORTANT
      headers: new Headers({
        "Content-Type": "application/json",
        "JsonStub-User-Key": "6fe1470b-4310-4998-bc11-969c53fd512e",
        "JsonStub-Project-Key": "31597c40-92cb-429a-8394-9cff99a51925"
      })
    })
      .then(res => res.json())
      .then(data => {
        this.assetInfo = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.chartCol {
  background-image: linear-gradient(90deg, #330066 0%, #02b5c4 100%);
}

.infoCol {
  background-color: #F2F2F2;
}

.condensedFont {
  color: #828282;
}

.lightFont {
  color: #BDBDBD;
}

.dataColor{
  color: #000000;
}

@media (max-height: 340px) {
  .logoDiv {
    display: none;
  }

  .h-90 {
    height: 100%;
  }
}

@media (min-width: 768px) {
  .logoFix {
    position: relative !important;
    margin-bottom: auto !important;
    margin-top: auto !important;
  }

  .h-100 {
    height: 100%;
  }

  .h-90 {
    height: 90%;
  }

  .h-10 {
    height: 10%;
  }

  .returnBtn{
    display: none !important;
  }
}
</style>

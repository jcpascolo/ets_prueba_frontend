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
            <router-link to="/" tag="div" class="row mx-0 align-items-start">
              <svg
                class="my-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.757 12.0001L15.707 16.9501C15.8025 17.0423 15.8787 17.1526 15.9311 17.2747C15.9835 17.3967 16.0111 17.5279 16.0122 17.6607C16.0134 17.7934 15.9881 17.9251 15.9378 18.048C15.8875 18.1709 15.8133 18.2826 15.7194 18.3765C15.6255 18.4703 15.5138 18.5446 15.3909 18.5949C15.268 18.6452 15.1364 18.6705 15.0036 18.6693C14.8708 18.6682 14.7396 18.6406 14.6176 18.5882C14.4956 18.5358 14.3852 18.4596 14.293 18.3641L8.63599 12.7071C8.44852 12.5195 8.3432 12.2652 8.3432 12.0001C8.3432 11.7349 8.44852 11.4806 8.63599 11.2931L14.293 5.63606C14.4816 5.4539 14.7342 5.35311 14.9964 5.35538C15.2586 5.35766 15.5094 5.46283 15.6948 5.64824C15.8802 5.83365 15.9854 6.08446 15.9877 6.34666C15.9899 6.60885 15.8891 6.86146 15.707 7.05006L10.757 12.0001Z"
                  fill="#02B5C4"
                />
              </svg>
              <span class="align-self-center condensedFont ml-2">Volver</span>
            </router-link>
          </div>
        </div>
        <div class="row mx-0 h-100">
          <div class="col-12 col-md-5 px-2 chartCol h-100">
            <div class="row mx-0 h-100 align-items-center">
              <div class="col-12 px-0">
                <p class="col-12 mb-1 my-md-4 condensedFont">Price Evolution</p>
                <apexchart type="line" :options="chartOptions" :series="series" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-7 px-2 infoCol h-100">
            <div class="row mx-0">
              <div class="col-12 my-4">
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
                <p
                  class="mt-0 mb-3 lightFont dataColor"
                >{{assetInfo.region.name}} / {{assetInfo.region.region_level2.name}} / {{assetInfo.region.region_level2.region_level3.name}}</p>
              </div>
              <div class="col-12 my-0">
                <p class="my-1 lightFont">Risk Family</p>
                <p
                  class="mt-0 mb-3 lightFont dataColor"
                >{{assetInfo.risk_family.name}} / {{assetInfo.risk_family.sub_family.name}}</p>
              </div>
              <div class="col-12 my-0">
                <p class="my-1 lightFont">Sector</p>
                <p class="mt-0 mb-3 lightFont dataColor">{{assetInfo.sector.name}}</p>
              </div>
            </div>
            <div class="row mx-0">
              <div class="col-12 px-0">
                <div class="row mx-0">
                  <router-link
                    tag="div"
                    class="col-6 px-0 assetLink"
                    :to="{name:'Asset', params: {id: this.$store.state.assets[this.$store.state.previus].id}}"
                  >
                    <div class="row mx-0">
                      <div class="col-12 col-md-9 px-0 d-flex justify-content-end">
                        <span
                          class="align-self-center condensedFont prevFont"
                        >{{this.$store.state.assets[this.$store.state.previus].name}}</span>
                      </div>
                      <div class="col-1 offset-11 offset-md-0 col-md-3 px-0">
                        <svg
                          class="prevSvg"
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="40" cy="40" r="24.5" stroke="#BDBDBD" />
                          <path
                            d="M38.757 40.0001L43.707 44.9501C43.8026 45.0423 43.8787 45.1526 43.9311 45.2747C43.9836 45.3967 44.0111 45.5279 44.0123 45.6607C44.0135 45.7934 43.9882 45.9251 43.9379 46.048C43.8876 46.1709 43.8133 46.2826 43.7194 46.3765C43.6256 46.4703 43.5139 46.5446 43.391 46.5949C43.2681 46.6452 43.1364 46.6705 43.0036 46.6693C42.8709 46.6682 42.7396 46.6406 42.6176 46.5882C42.4956 46.5358 42.3853 46.4596 42.293 46.3641L36.636 40.7071C36.4486 40.5195 36.3433 40.2652 36.3433 40.0001C36.3433 39.7349 36.4486 39.4806 36.636 39.2931L42.293 33.6361C42.4817 33.4539 42.7343 33.3531 42.9964 33.3554C43.2586 33.3577 43.5095 33.4628 43.6949 33.6482C43.8803 33.8336 43.9854 34.0845 43.9877 34.3467C43.99 34.6089 43.8892 34.8615 43.707 35.0501L38.757 40.0001Z"
                            fill="#BDBDBD"
                          />
                        </svg>
                      </div>
                    </div>
                  </router-link>
                  <router-link
                    tag="div"
                    class="col-6 px-0 assetLink"
                    :to="{name:'Asset', params: {id: this.$store.state.assets[this.$store.state.next].id}}"
                  >
                    <div class="row mx-0">
                      <div class="col-7 offset-5 offset-md-0 col-md-4 col-lg-3 px-0">
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="40" cy="40" r="24.5" stroke="#BDBDBD" />
                          <path
                            d="M41.314 40.071L36.364 35.121C36.1818 34.9324 36.081 34.6798 36.0833 34.4176C36.0856 34.1554 36.1907 33.9046 36.3761 33.7192C36.5616 33.5338 36.8124 33.4286 37.0746 33.4263C37.3368 33.424 37.5894 33.5248 37.778 33.707L43.435 39.364C43.6224 39.5515 43.7278 39.8058 43.7278 40.071C43.7278 40.3361 43.6224 40.5905 43.435 40.778L37.778 46.435C37.5894 46.6171 37.3368 46.7179 37.0746 46.7157C36.8124 46.7134 36.5616 46.6082 36.3761 46.4228C36.1907 46.2374 36.0856 45.9866 36.0833 45.7244C36.081 45.4622 36.1818 45.2096 36.364 45.021L41.314 40.071Z"
                            fill="#BDBDBD"
                          />
                        </svg>
                      </div>
                      <div class="col-12 col-md-8 col-lg-9 px-0 d-flex justify-content-start">
                        <span
                          class="align-self-center condensedFont nextFont"
                        >{{this.$store.state.assets[this.$store.state.next].name}}</span>
                      </div>
                    </div>
                  </router-link>
                </div>
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
import VueApexCharts from "vue-apexcharts";

export default {
  name: "AssetInfo",
  components: {
    Logo,
    apexchart: VueApexCharts
  },

  data() {
    return {
      assetInfo: {},

      series: [
        {
          name: "Price",
          data: []
        }
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: false,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            autoSelected: "zoom"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          colors: "#02B5C4"
        },
        series: [
          {
            name: "Price",
            data: []
          }
        ],
        labels: [],
        markers: {
          size: 0,
          colors: "#023645",
          strokeColors: "#fff"
        },
        grid: {
          show: true,
          borderColor: "#ffffff",
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: "#ffffff",
            opacity: 0
          },
          column: {
            colors: "#ffffff",
            opacity: 0
          },
          padding: {
            top: 5
          }
        },
        xaxis: {
          type: "datetime",
          tickAmount: 6,
          labels: {
            style: {
              colors: "#ffffff",
              fontSize: "12px",
              fontFamily: "Open Sans"
            },
            rotate: 0,
            offsetX: 25,
            datetimeFormatter: {
              year: "yyyy"
            }
          }
        },
        yaxis: {
          opposite: true,
          tickAmount: 8,
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 160,
            style: {
              color: "#ffffff",
              fontSize: "12px",
              fontFamily: "Open Sans"
            },
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
            formatter: value => {
              return value;
            }
          }
        },
        tooltip: {
          enabled: true,
          x: {
            show: true,
            format: "dd MMM yyyy"
          }
        }
      }
    };
  },

  computed: {},

  methods: {
    apiRequest() {
      fetch("http://jsonstub.com/" + this.$route.params.id, {
        method: "GET",

        headers: new Headers({
          "Content-Type": "application/json",
          "JsonStub-User-Key": "6fe1470b-4310-4998-bc11-969c53fd512e",
          "JsonStub-Project-Key": "31597c40-92cb-429a-8394-9cff99a51925"
        })
      })
        .then(res => res.json())
        .then(data => {
          this.assetInfo = data;
          data.prices.forEach(price => {
            this.series[0].data.push(price.value);
            this.chartOptions.series[0].data.push(price.value);
            this.chartOptions.labels.push(price.date);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },

    callStore() {
      this.$store.dispatch("setRoutes", this.$route.params.id);
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.$route.params.id = to.params.id;
    this.series[0].data = [];
    this.chartOptions.series[0].data = [];
    this.chartOptions.labels = [];
    this.callStore();
    this.apiRequest();
    next();
  },

  created() {
    this.callStore();
  },

  mounted() {
    this.apiRequest();
  }
};
</script>

<style lang="scss" scoped>
.chartCol {
  background-image: linear-gradient(90deg, #330066 0%, #02b5c4 100%);
  .condensedFont {
    color: white;
    text-align: center;
  }
}

.infoCol {
  background-color: #f2f2f2;

  .prevFont {
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #4f4f4f;
  }

  .nextFont {
    font-size: 12px;
    line-height: 16px;
    color: #4f4f4f;
  }
}

.lightFont {
  color: #bdbdbd;
}

.dataColor {
  color: #000000;
}

.assetLink:hover span {
  color: #02b5c4;
}

.assetLink:hover svg path {
  fill: #02b5c4;
}

.assetLink:hover svg circle {
  stroke: #330066;
}

@media (max-height: 340px) {
  .logoDiv {
    display: none;
  }

  .h-90 {
    height: 100%;
  }
}

@media (max-width: 768px) {
  .chartCol {
    .condensedFont {
      text-align: right;
    }
  }

  .nextFont, .prevFont {
    display: none;
  }

}

@media (max-width: 1130px){
  .nextFont{
    text-align: right;
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

  .returnBtn {
    display: none !important;
  }
}



</style>

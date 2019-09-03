<template>
  <div class="container-fluid h-100 px-0">
    <div class="row h-100 mx-0">
      <div id="fstCol" class="col-12 col-md-2 px-0">
        <Logo />
        <div class="row mx-0 h-100 align-items-center">
          <div class="col-12 px-2 px-md-0">
            <div class="row mx-0 w-100">
              <FilterButton
                v-for="(filter, index) in filters"
                :key="filter.name"
                :filterName="filter.name"
                :svgD="filter.d"
                :isActive="filter.isActive"
                :parentFilterOpt="optionSelected[filter.name].option"
                @click.native="toggleActiveClass(index)"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="sndCol" class="col-12 col-md-2">
        <div class="row h-100 align-items-center">
          <div class="col-12 px-0">
            <div class="row mx-0 w-100">
              <OptionButton
                v-for="(option,index) in activeFilter"
                :key="option.name"
                :icon="option.icon"
                :name="option.name"
                :filterName="option.filterName"
                @click.native="toggleActiveOption(option.name, index)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="row mx-0 w-100">
          <p class="col-12 condensedFont px-0 mb-0 mt-5 formatHeader">ETS FUNDS</p>
          <svg
            width="100%"
            height="1"
            viewBox="0 0 920 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4.37114e-08" y1="0.5" x2="920" y2="0.50008" stroke="#E0E0E0" />
          </svg>
        </div>

        <p v-show="filteredAssets.length == 0" class="condensedFont">No funds data</p>
        <div v-show="filteredAssets.length > 0" class="row mx-0 w-100">
          <AssetButton v-for="asset in filteredAssets" :key="asset.id" :asset="asset" :filters="filtersShorted"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
import FilterButton from "../components/FilterButton";
import OptionButton from "../components/OptionButton";
import AssetButton from "../components/AssetButton";

export default {
  name: "Inicio",
  components: {
    Logo,
    FilterButton,
    OptionButton,
    AssetButton
  },
  data() {
    return {
      assets: [],

      filteredAssets: [],

      filters: [
        {
          name: "Currency",
          d:
            "M11 15V13C10.2044 13 9.44129 12.6839 8.87868 12.1213C8.31607 11.5587 8 10.7956 8 10C8 9.20435 8.31607 8.44129 8.87868 7.87868C9.44129 7.31607 10.2044 7 11 7V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V7H13.022C13.8118 7 14.5693 7.31375 15.1278 7.87224C15.6862 8.43072 16 9.18819 16 9.978C16 10.2432 15.8946 10.4976 15.7071 10.6851C15.5196 10.8726 15.2652 10.978 15 10.978C14.7348 10.978 14.4804 10.8726 14.2929 10.6851C14.1054 10.4976 14 10.2432 14 9.978C14 9.71862 13.897 9.46986 13.7136 9.28645C13.5301 9.10304 13.2814 9 13.022 9H13V11C13.7956 11 14.5587 11.3161 15.1213 11.8787C15.6839 12.4413 16 13.2044 16 14C16 14.7956 15.6839 15.5587 15.1213 16.1213C14.5587 16.6839 13.7956 17 13 17V18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V17H10.949C10.1669 17 9.41679 16.6893 8.86374 16.1363C8.3107 15.5832 8 14.8331 8 14.051C8 13.7858 8.10536 13.5314 8.29289 13.3439C8.48043 13.1564 8.73478 13.051 9 13.051C9.26522 13.051 9.51957 13.1564 9.70711 13.3439C9.89464 13.5314 10 13.7858 10 14.051C10.0003 14.3026 10.1003 14.5438 10.2782 14.7218C10.4562 14.8997 10.6974 14.9997 10.949 15H11ZM13 15C13.2652 15 13.5196 14.8946 13.7071 14.7071C13.8946 14.5196 14 14.2652 14 14C14 13.7348 13.8946 13.4804 13.7071 13.2929C13.5196 13.1054 13.2652 13 13 13V15ZM11 9C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10C10 10.2652 10.1054 10.5196 10.2929 10.7071C10.4804 10.8946 10.7348 11 11 11V9ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z",
          isActive: true,
          options: [
            {
              icon: "allFlag.png",
              name: "All"
            },
            {
              icon: "europeFlag.png",
              name: "EUR"
            },
            {
              icon: "japanFlag.png",
              name: "JPY"
            },
            {
              icon: "usaFlag.png",
              name: "USD"
            }
          ]
        },
        {
          name: "Family Risk",
          d:
            "M2.83201 19C2.28142 17.7384 1.99813 16.3765 2.00001 15C2.00001 9.477 6.47701 5 12 5C17.523 5 22 9.477 22 15C22.0019 16.3765 21.7186 17.7384 21.168 19H2.83201ZM19.748 17C20.0515 15.8183 20.0807 14.5828 19.8334 13.388C19.5861 12.1933 19.0687 11.0709 18.321 10.1068C17.5732 9.14276 16.6148 8.36248 15.5192 7.82569C14.4235 7.2889 13.2196 7.00984 11.9995 7.00984C10.7794 7.00984 9.5755 7.2889 8.47985 7.82569C7.38419 8.36248 6.42582 9.14276 5.67807 10.1068C4.93031 11.0709 4.41297 12.1933 4.16563 13.388C3.91828 14.5828 3.94749 15.8183 4.25101 17H19.748ZM12 10C11.7348 10 11.4804 9.89464 11.2929 9.70711C11.1054 9.51957 11 9.26522 11 9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8947 8.48043 13 8.73478 13 9C13 9.26522 12.8947 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10ZM7.00001 14C6.73479 14 6.48044 13.8946 6.2929 13.7071C6.10537 13.5196 6.00001 13.2652 6.00001 13C6.00001 12.7348 6.10537 12.4804 6.2929 12.2929C6.48044 12.1054 6.73479 12 7.00001 12C7.26523 12 7.51958 12.1054 7.70712 12.2929C7.89465 12.4804 8.00001 12.7348 8.00001 13C8.00001 13.2652 7.89465 13.5196 7.70712 13.7071C7.51958 13.8946 7.26523 14 7.00001 14ZM17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8947 12.4804 18 12.7348 18 13C18 13.2652 17.8947 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14ZM12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8947 11.4804 13 11.7348 13 12V15C13 15.2652 12.8947 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11Z",
          isActive: false,
          options: [
            {
              icon: "allFlag.png",
              name: "All"
            },
            {
              icon: "equity.png",
              name: "Equity"
            },
            {
              icon: "balanced.png",
              name: "Balanced"
            }
          ]
        }
      ],

      filterSelected: "Currency",

      optionSelected: {}
    };
  },
  computed: {
    activeFilter() {
      for (let i = 0; i < this.filters.length; i++) {
        if (this.filters[i].isActive == true) {
          return this.filters[i].options.map(option => {
            return {
              filterName: this.filters[i].name,
              icon: option.icon,
              name: option.name
            };
          });
          // return [this.filters[i]];
        }
      }
      return [];
    },

    filtersShorted(){
      return this.filters.map(filter => {
        return {
          name:filter.name,
          d: filter.d
        }
      })
    }

    // filteredAssets(){
    //   return this.assets.filter(asset => {
    //     if( (asset.currency == this.optionSelected["Currency"].option || this.optionSelected["Currency"].option == "All") && (asset.risk_family == this.optionSelected["Family Risk"].option || this.optionSelected["Family Risk"].option == "All") ){
    //       return true
    //     }
    //     else{
    //       return false;
    //     }
    //   })
    // }
  },

  methods: {
    toggleActiveClass(index) {
      this.filters = this.filters.map((filter, ind) => {
        if (index == ind) {
          this.filterSelected = filter.name;
          filter.isActive = true;
          return filter;
        } else {
          filter.isActive = false;
          return filter;
        }
      });
    },

    changeAssets() {
      this.filteredAssets = this.assets.filter(asset => {
        if (
          (asset.currency == this.optionSelected["Currency"].option ||
            this.optionSelected["Currency"].option == "All") &&
          (asset.risk_family == this.optionSelected["Family Risk"].option ||
            this.optionSelected["Family Risk"].option == "All")
        ) {
          return true;
        } else {
          return false;
        }
      });
    },

    toggleActiveOption(name) {
      Event.$emit("changeOption", {
        filter: this.filterSelected,
        option: name
      });
      this.optionSelected[this.filterSelected].option = name;

      this.changeAssets();
    }
  },

  created() {
    this.filters.forEach(filter => {
      this.optionSelected[filter.name] = { option: filter.options[0].name };
    });
  },

  mounted() {
    fetch("http://jsonstub.com/symbols", {
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
        this.assets = data;
        this.changeAssets();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
#sndCol {
  background: #f2f2f2;
}

.w-100 {
  width: 100%;
}

.formatHeader {
  color: #02b5c4;
}

@media (max-width: 768px) {
  #fstCol {
    height: 100%;
  }

  #sndCol {
    background: #ffffff;
  }
}

@media (min-width: 768px) {
  .h-100 {
    height: 100%;
  }
}
</style>

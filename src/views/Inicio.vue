<template>
  <div class="container-fluid px-0">
    <div class="row">
      <div
        id="fstCol"
        class="col-12 col-md-2"
        :style="{'height': `${window.height}px`}"
      >
        <Logo />
      </div>

      <div id="sndCol" class="col-12 col-md-2">{{window.width}}</div>
      <div class="col-12 col-md-8">
        <div class="col-12 col-md-8" v-for="asset in assets" :key="asset.id">
          {{asset.id}}
          {{asset.name}}
          {{asset.currency}}
          {{asset.risk_family}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";

export default {
  name: "Inicio",
  components: {
    Logo
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      assets: []
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
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
      })
      .catch(err => {
        console.log("En el error");
        console.log(err);
      });
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
#sndCol{
    background: #F2F2F2;
}
</style>
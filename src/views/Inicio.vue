<template>
  <div class="container-fluid px-0">
    <div class="row">
        <div class="col-4" v-for="asset in assets" :key="asset.id">
            {{asset.id}}
            {{asset.name}}
            {{asset.currency}}
            {{asset.risk_family}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inicio",

  data() {
    return {
      assets: []
    };
  },

  mounted() {
    fetch("http://jsonstub.com/symbols", {
      method: "GET",

      // THIS IS IMPORTANT
      headers: new Headers({
        'Content-Type': 'application/json',
        'JsonStub-User-Key':'6fe1470b-4310-4998-bc11-969c53fd512e',
        'JsonStub-Project-Key': '31597c40-92cb-429a-8394-9cff99a51925'
      }),

      // body: JSON.stringify({
      //   email: "emailHere",
      //   password: "passwordHere"
      // })
    })
    .then( res => res.json() )
    .then( (data) => {
      this.assets = data
    })
    .catch((err) => {
      console.log("En el error")
      console.log(err)
    })
  }
};
</script>

<style lang="scss" scoped>

</style>

<template>
  <div id="app">
   <headernav></headernav>
    <router-view/>
    <footer1></footer1>
  </div>
</template>

<script>
import Headernav from "./components/Headernav";
import Footer1 from "./components/Footer1";
export default {
  name: "App",
  components: {
    Headernav,
    Footer1
  },
  data(){
    return {
      show:true
    }
  }
};
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }
  li {
    list-style-type: none;
  }
  .clear {
    clear: both;
  }
</style>

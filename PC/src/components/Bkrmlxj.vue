
<template>
  <div class="bkrmlxj">
      <div class="lvxingjia">
        <Leftlunbo></Leftlunbo>
      </div>
      <div class="remai">
        <Baokuan></Baokuan>
      </div>
  </div>
</template>

<script>
import Leftlunbo from '@/components/Leftlunbo';
import Baokuan from '@/components/Baokuan';
export default {
  name: 'Bkrmlxj',
  components: {
    Leftlunbo,
    Baokuan
  }
}
</script>

<style scoped>
    .bkrmlxj {
        height: 300px;
        width: 1000px;
        margin: 20px auto 0px;
    }
    .bkrmlxj .lvxingjia {
        float: left;
        margin-right: 20px;
    }
    .bkrmlxj .remai {
        float: left;
    }
</style>

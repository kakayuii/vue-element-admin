<template>
  <div class="chart-container">
    <chart :data="data"></chart>
  </div>
</template>

<script>
import Chart from '@/components/Charts/D3Charts/D3SimpleLineChart'

export default {
  name: 'simpleLineChart',
  data() {
    return {
      data: [
        { date: '2009', apple: 130, banana: 40 },
        { date: '2010', apple: 137, banana: 58 },
        { date: '2011', apple: 166, banana: 97 },
        { date: '2012', apple: 154, banana: 117 },
        { date: '2013', apple: 179, banana: 98 },
        { date: '2014', apple: 187, banana: 120 },
        { date: '2015', apple: 189, banana: 84 },
        { date: '2016', apple: 210, banana: 53 }
      ]
    }
  },
  components: { Chart }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  padding: 20px;
  width: 100%;
  height: 85vh;
}
</style>


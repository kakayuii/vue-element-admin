<template>
  <div class="chart-container">
    <chart :data="data"></chart>
  </div>
</template>

<script>
import Chart from '@/components/Charts/D3Charts/D3SimpleBarChart'

export default {
  name: 'simpleBarChart',
  data() {
    return {
      data: [
        { letter: '一', frequency: 0.08167 },
        { letter: '二', frequency: 0.13492 },
        { letter: '三', frequency: 0.02782 },
        { letter: '四', frequency: 0.04253 },
        { letter: '五', frequency: 0.12702 },
        { letter: '六', frequency: 0.02288 },
        { letter: '日', frequency: 0.22288 }
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


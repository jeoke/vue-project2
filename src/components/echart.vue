<template>
  <section>
    <div ref='chart' id="chart"></div>
  </section>
</template>
<script>
import vue from 'vue'
import echarts from 'echarts'
vue.prototype.$echarts = echarts
export default {
  name: 'echarts',
  props: ['data'],
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart: function () {
      let chart = this.$echarts.init(this.$refs.chart)
      console.log(this)
      console.log(this.data)
      let data = this.data
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: false, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: data.legend,
        xAxis: data.xAxis,
        yAxis: data.yAxis,
        series: data.series
      }
      chart.setOption(option)
    }
  }
}
</script>
<style>
#chart {
  position:fixed;
  top:20vh;
  left:5vw;
  width:70vw;
  height:70vh;
}
</style>

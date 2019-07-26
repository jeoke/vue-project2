<template>
  <section>
    <echarts :data='option'></echarts>
  </section>
</template>
<script>
import echarts from '@/components/echart.vue'
export default {
  name: 'nativeJs',
  data: function () {
    return {
      option: {
        legend: {
          data: ['设计时间', '难度', '综合系数']
        },
        xAxis: [
          {
            type: 'category',
            data: ['HTML', 'CSS设计', 'js操作', '可维护性'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '时间',
            min: 0,
            max: 100,
            interval: 50,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '难度',
            min: 0,
            max: 100,
            interval: 5,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '设计时间',
            type: 'bar',
            data: [30, 70, 90, 90]
          },
          {
            name: '难度',
            type: 'bar',
            data: [20, 70, 90, 90]
          },
          {
            name: '综合系数',
            type: 'line',
            yAxisIndex: 1,
            data: [30, 70, 90, 90]
          }
        ]
      }
    }
  },
  components: {
    echarts
  }
}

</script>
<style>
</style>

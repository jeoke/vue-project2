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
            data: ['webpack配置', '组件状态设计', '组件封装', 'redux重构', '同构复用设计'],
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
            data: [10, 40, 40, 80, 100]
          },
          {
            name: '难度',
            type: 'bar',
            data: [10, 20, 60, 90, 90]
          },
          {
            name: '综合系数',
            type: 'line',
            yAxisIndex: 1,
            data: [10, 30, 50, 90 , 95]
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

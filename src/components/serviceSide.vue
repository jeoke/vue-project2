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
            data: ['数据库选择', '整体架构', '语言选择及使用', '业务流程设计', '安全处理', '性能监控'],
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
            data: [5, 80, 10, 70, 60, 30]
          },
          {
            name: '难度',
            type: 'bar',
            data: [5, 80, 10, 50, 60, 40]
          },
          {
            name: '综合系数',
            type: 'line',
            yAxisIndex: 1,
            data: [10, 80, 10, 60, 60, 40]
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

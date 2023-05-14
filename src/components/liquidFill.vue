<template>
  <div class="hygrometer" ref="hygrometer"></div>
</template>

<script>
export default {
  name: "liquidFill",
  mounted() {
    let hygrometer = this.$echarts.init(this.$refs.hygrometer)
    let option = {
      series: [{
        type: 'liquidFill',
        radius: '100px',
        data: [0.5],
        label: {
          color: '#fff',
          insideColor: 'transparent',
          fontSize: 30,
          fontWeight: 'bold',
        },
        color: [{
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [{
            offset: 1,
            color: ['#6a7feb'], // 0% 处的颜色
          }, {
            offset: 0,
            color: ['#27e5f1'], // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }],
        outline: {
          show: true,
          borderDistance: 5,
          borderColor: 'rgba(67,209,100,1)',
          borderWidth: 0
        }
      }]
    }
    hygrometer.setOption(option)
  }
}
</script>

<style scoped>
.hygrometer{
  width: 500px;
  height: 500px;
}
</style>

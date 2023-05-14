<template>
  <div id="main">

  </div>
</template>

<script>
import * as echarts from 'echarts';
import {onMounted} from "vue";
export default {
  name: 'JoJo',
  setup(){
    onMounted(()=>{
      let myChart = echarts.init(document.getElementById('main'))
      const dataSPM = [[5, 5, 5, 5, 3, 5, 1]];
      const dataSFE = [[5, 5, 3, 5, 3, 4, 1]];
      const dataSFS = [[5, 2, 3, 2, 3, 5, 1]];
      const lineStyle = {
        width: 1,
        opacity: 0.5
      };
      let option = {
        backgroundColor: '#161627',
        title: {
          text: 'JOJO面板图',
          left: 'center',
          textStyle: {
            color: '#eee'
          }
        },
        legend: {
          bottom: 5,
          data: ['StartPlatinum', 'StoneFree', 'SteelFingers'],
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          selectedMode: 'multiple'
        },
        radar: {
          indicator: [
            { name: '破坏力', max: 5 },
            { name: '成长性', max: 5 },
            { name: '精密度', max: 5 },
            { name: '持久力', max: 5 },
            { name: '射程距离', max: 5 },
            { name: '速度', max: 5 }
          ],
          shape: 'circle',
          splitNumber: 5,
          axisName: {
            color: 'rgb(238, 197, 102)'
          },
          splitLine: {
            lineStyle: {
              color: [
                'rgba(238, 197, 102, 0.1)',
                'rgba(238, 197, 102, 0.2)',
                'rgba(238, 197, 102, 0.4)',
                'rgba(238, 197, 102, 0.6)',
                'rgba(238, 197, 102, 0.8)',
                'rgba(238, 197, 102, 1)'
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
            }
          }
        },
        series: [
          {
            name: 'StartPlatinum',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSPM,
            symbol: 'none',
            itemStyle: {
              color: '#F9713C'
            },
            areaStyle: {
              opacity: 0.1
            }
          },
          {
            name: 'StoneFree',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSFE,
            symbol: 'none',
            itemStyle: {
              color: '#B3E4A1'
            },
            areaStyle: {
              opacity: 0.05
            }
          },
          {
            name: 'SteelFingers',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSFS,
            symbol: 'none',
            itemStyle: {
              color: 'rgb(238, 197, 102)'
            },
            areaStyle: {
              opacity: 0.05
            }
          }
        ]
      };
      myChart.setOption(option);
    })
  }

}
</script>
<style scoped>
#main{
  width: 500px;
  height: 500px;
}
</style>

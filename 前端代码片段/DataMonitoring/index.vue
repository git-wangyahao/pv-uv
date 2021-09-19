<template>
  <div class="body">
    <header id="header">
      <h3 class="header-title">大屏数据可视化PV/VU</h3>
    </header>
    <!-- <div class="loader" /> -->
    <div id="container">
      <div id="flexCon">
        <div class="flex-row">
          <div v-for="item in list" :key="item.data_code" class="flex-cell">
            <div class="chart-wrapper">
              <h3 class="chart-title">{{ item.identification }}</h3>
              <div class="chart-div">
                <div class="data">
                  <div>
                    <div class="total"> 昨日访客:  <span>  {{ item.VisitorsYesterdayNumberTotal }}</span> | 昨日访问量:<span>  {{ item.VisitsYesterdayNumber }}</span> </div>
                    <div class="total"> 今日访客: <span> {{ item.VisitorsTodayNumberTotal }}</span> | 今日访问量:<span> {{ item.VisitsTodayNumber }}</span> </div>
                  </div>
                  <div>
                    <div class="total"> 总用户: <span> {{ item.userTotal }}</span> </div>
                    <div class="total"> 新用户: <span> {{ item.newUser }}</span> </div>
                  </div>
                </div>
                <div class="chart-loader">
                  <div class="my-echart" style="width: 100%;height:100%;" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import './index.css'
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'DataMonitoring',
  data() {
    return {
      list: null
    }
  },

  mounted() {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 6000)
  },

  methods: {
    getData() {
      axios({
        url: 'http://192.168.2.202:7001/getData',
        methods: 'GET'
      }).then(res => {
        const list = res.data.data
        this.list = list
        this.drawChart(list)
      })
    },
    drawChart(data) {
      // 基于准备好的dom，初始化echarts实例
      this.$nextTick(() => {
        var anyEchart = document.querySelectorAll('.my-echart')
        for (var i = 0; i < anyEchart.length; i++) {
          const { xAxis, series } = data[i].nowByHourData
          var myChart = echarts.init(anyEchart[i])
          // 绘制图表
          myChart.setOption({
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            axisLabel: {
              formatter: '{value} '
            },
            xAxis: [
              {
                type: 'category',
                data: xAxis,
                axisTick: {
                  alignWithLabel: true
                },
                axisLine: {
                  lineStyle: {
                    color: '#9a9595'
                  }
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLine: {
                  lineStyle: {
                    color: '#9a9595'
                  }
                },
                // 坐标轴内线的样式
                splitLine: {
                  lineStyle: {
                    color: '#9a9595'
                  }
                }
              }
            ],
            series: [
              {
                name: '当前时间段访问量',
                type: 'bar',
                barWidth: '60%',
                itemStyle: {
                  color: '#1b67b6c7',
                  lineStyle: {
                    color: '#9a9595'
                  }
                },

                data: series
              }
            ]
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .total {
    color: #c4c4c4;
    font-weight: 700;

  }
  .total span{
    color: #e4e4e4;
    font-weight: 400;
  }
  .data {
    display: flex;
    justify-content: space-between;
  }
  .body {
    position:relative;
    font-family:"Microsoft Yahei", Arial, sans-serif;
    background:#050d3c url("./img/bg.png") 0 0 / 100% 100% no-repeat;
     width:100%;
    height:100%;
    min-width:1200px;
    min-height:600px;
    overflow:hidden;
  }
</style>

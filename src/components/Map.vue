<template>
  <div id="echart1" style="width: 100%;height:500px;margin:20px auto;"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts/map/js/china'

// 省份数据
var dataList=[
  {name:"南海诸岛",value:0},
  {name: '北京', value: randomValue()},
  {name: '天津', value: randomValue2()},
  {name: '上海', value: randomValue()},
  {name: '重庆', value: randomValue()},
  {name: '河北', value: randomValue3()},
  {name: '河南', value: randomValue()},
  {name: '云南', value: randomValue()},
  {name: '辽宁', value: randomValue()},
  {name: '黑龙江', value: randomValue()},
  {name: '湖南', value: randomValue4()},
  {name: '安徽', value: randomValue()},
  {name: '山东', value: randomValue1()},
  {name: '新疆', value: randomValue2()},
  {name: '江苏', value: randomValue()},
  {name: '浙江', value: randomValue()},
  {name: '江西', value: randomValue()},
  {name: '湖北', value: randomValue1()},
  {name: '广西', value: randomValue()},
  {name: '甘肃', value: randomValue5()},
  {name: '山西', value: randomValue()},
  {name: '内蒙古', value: randomValue5()},
  {name: '陕西', value: randomValue4()},
  {name: '吉林', value: randomValue()},
  {name: '福建', value: randomValue()},
  {name: '贵州', value: randomValue1()},
  {name: '广东', value: randomValue()},
  {name: '青海', value: randomValue()},
  {name: '西藏', value: randomValue()},
  {name: '四川', value: randomValue()},
  {name: '宁夏', value: randomValue5()},
  {name: '海南', value: randomValue()},
  {name: '台湾', value: randomValue2()},
  {name: '香港', value: randomValue()},
  {name: '澳门', value: randomValue()}
]
// var myChart = echarts.init(document.getElementById('main'));
// var myChart = echarts.init(document.getElementById('main'),'dark');
function randomValue() {
  return Math.round(Math.random()*50);
}
function randomValue1() {
  return Math.round(Math.random()*100);
}
function randomValue2() {
  return Math.round(Math.random()*250);
}
function randomValue3() {
  return Math.round(Math.random()*500);
}
function randomValue4() {
  return Math.round(Math.random()*750);
}
function randomValue5() {
  return Math.round(Math.random()*1000);
}

// 指定图表的配置项和数据
var option = {
  // 显示标题
  title:{
    text:'中国疫情地图'
  },
  grid: {
    // left: "3%",
    // right: "4%",
    // bottom: "3%",
    width: "600px",
    height: "300px",
    containLabel: true
  },
  series:[{
    name:"累计确诊人数",
    // 渲染的是一个地图
    type:'map', 
    map:'china', // 渲染的是一个中国地图
    label:{
      // 控制对应地区的汉字
      show:true,
      color:'red', 
      fontSize:12 
    },
    //  控制对应地区的背景
    itemStyle:{
      areaColor:'skyblue',
      borderColor:'yellow'
    },
    zoom:1.2, // 控制地图放大和缩小,
    emphasis:{
      // 控制鼠标滑过之后的背景颜色和字体颜色
      label:{
        color:'#fff',
        fontSize:16
      },
      itemStyle:{
        areaColor:'orange'
      }
    },
    data:dataList // 用来显示后台传给的数据
  }],
  visualMap:[{
    type:'piecewise',
    show:true,
    // splitNumber:4 显示四个分段
    pieces:[
      // 分段
      {min:10000},
      {min:1000,max:9999},
      {min:100,max:999},
      {min:10,max:99},
      {min:1,max:9},
    ],
    text: ['高','低'],//取值范围
    // align:'right' // 默认left
    // orient:'horizontal' 默认竖直
    // left和right 控制分段条的位置
    // showLabel:false 控制分段条的文字
    // textStyle:{},控制分段条的文字
    inRang:{
      symbol:'rect',
      // color:['blue','skyblue']
      // color: ['#eee169', '#fa5601']//取值范围的颜色
    },
    itemWdith:20,
    itemHeight:10
  }],
  tooltip:{
    trigger:'item'
  }
};
      
export default {
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('echart1'))
    myChart.setOption(option);

    myChart.on('click', function (params) {
        alert(params.name +'  '+ params.seriesName +'  '+ params.value);
        console.log(params.seriesName)
        console.log(params.value)
        console.log(params)
    });
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

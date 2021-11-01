<template>
  <div id="app">
    <div
      id="echart1"
      style="width: 100%; height: 300px; margin: 60px auto"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts/map/js/china";

var option = {
  title: {
    text: "人数分布",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    // data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    data: ["确诊人数", "感人人数", "疑似病例", "无症状感染", "健康人数"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["一", "二", "三", "四", "五", "六", "七"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "确诊人数",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "感人人数",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "疑似病例",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "无症状感染",
      type: "line",
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "健康人数",
      type: "line",
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

export default {
  mounted() {
    let myChart = echarts.init(document.getElementById("echart1"));
    myChart.setOption(option);
  },
  methods: {},
};
</script>

<style></style>

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
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ["昨天", "今天", "新增人数"],
  },
  xAxis: [
    {
      type: "category",
      data: ["一", "二", "三", "四", "五", "六", "七"],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "今天",
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        // formatter: "{value} ml",
      },
    },
    {
      type: "value",
      name: "新增人数",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value} 人数",
      },
    },
  ],
  series: [
    {
      name: "昨天",
      type: "bar",
      data: [2, 4, 7, 23, 25, 76, 135, 162, 32, 20, 6, 3],
    },
    {
      name: "今天",
      type: "bar",
      data: [2, 5, 9, 26, 28, 70, 175, 182, 48, 18, 6, 2],
    },
    {
      name: "新增人数",
      type: "line",
      yAxisIndex: 1,
      data: [2, 2, 3, 4, 6, 10, 20, 23, 23, 16, 12, 6],
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

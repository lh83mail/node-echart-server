'use strict';

var echarts = require("echarts");
var Canvas = require("canvas-prebuilt");
var fs     = require('fs');
var path   = require('path');
var Font = Canvas.Font;


new Font("宋体", path.join(__dirname, "fonts/simsunb.ttf"));
new Font("黑体", path.join(__dirname, "fonts/simhei.ttf"));
new Font("微软雅黑", path.join(__dirname, "fonts/yahei_mono.ttf"));
new Font("楷体", path.join(__dirname, "fonts/simkai.ttf"));



/**
 * @param config = {
        width: 500 // Image width, type is number.
        height: 500 // Image height, type is number.
        option: {}, // Echarts configuration, type is Object.
    }    
 */
module.exports = (config) => {
    if(config.canvas){
        Canvas = config.canvas;
    }
    echarts.setCanvasCreator(function () {
        return ctx;
    }); var ctx = new Canvas(128, 128);
    var chart,option = {
            title: {
                text: 'test'
            },
            tooltip: {},
            legend: {
                data:['test']
            },
            xAxis: {
                data: ["a","b","c","d","f","g"]
            },
            yAxis: {},
            series: [{
                name: 'test',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
    config.width = config.width || 500;
    config.height = config.height || 500;
    config.option = config.option || option;  
    if(config.font){
        ctx.font = config.font;
    }
    
    config.option.animation = false;
    chart = echarts.init(new Canvas(parseInt(config.width,10), parseInt(config.height,10)));
    chart.setOption(config.option);
    return chart.getDom().toBuffer();
}

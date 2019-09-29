var app = angular.module('dataApp', [])

app.controller('dataCtrl', function($scope, $http, $window) {
    $("#demoChart").css("height", '650')
    $scope.title = 'echart 样例'
    $scope.chartType = 'line'
    $scope.left = '3%'
    $scope.right = '4%'
    $scope.top = '5%'
    $scope.bottom = '3%'
    $scope.legendFlag = '1'
    $scope.legendData = ['邮件营销']
    $scope.xDatas = ['周一','周二','周三','周四','周五','周六','周日']
    $scope.datas = [[820, 932, 901, 934, 1290, 1330, 1320],[]]

    genSeries = function() {
        var series = []
        if ($scope.legendFlag == '1') {
            var legendDatas = $scope.legendData
            var datas = $scope.datas
            for(var index in legendDatas) {
                var serie = {}
                serie.name = legendDatas[index]
                serie.type = 'line',
                serie.stack =  '总量',
                serie.areaStyle = {},
                serie.data = datas[index]
                series.push(serie)
            }
            return series
        }
    }

    updateChart = function() {
        var object = document.getElementById('demoChart')
        var myChart = echarts.init(object, 'macarons');
        option = {
            title: {
                text: $scope.title
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: $scope.lengendData
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: $scope.left,
                right: $scope.right,
                top: $scope.top,
                bottom: $scope.bottom,
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : $scope.xDatas
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : genSeries()
        };
        myChart.setOption(option)
    }

    updateChart()
    $scope.updatePage = function () {
        updateChart()
    }
})

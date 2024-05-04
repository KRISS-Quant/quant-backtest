function normalize(price_data, min, max){
  var normalized_data = [];
  for (var i = 0; i < price_data.length; i++){
      var priceData = [];
      for (var j = 0; j < 4; j++){
        priceData.push((price_data[i].price[j] - min) / (max - min));
      }
      normalized_data.push(priceData);
  }
  return normalized_data;
}

function generateChartOptions(){
  var options = {
      series: [],
      chart: {
      type: 'candlestick',
      width: 1000,
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    colors:[ '#008000', '#FF0000', '#0000FF', '#FFFF00'],
    fill: {
      type: 'solid',
      opacity: 0.6
   },

   plotOptions: {
      candlestick: {
          colors: {
              upward: '#00FF00',
              downward: '#FF0000'
          }
      }
  },   

    xaxis: {
      type: 'datetime',
      title: {
          text: 'Datetime',
      }
    },
    yaxis: {
      tooltip: {
          enabled: true
          
        },
        title: {
          text: 'Price',
      },
      labels: {
        formatter: function (value) {
            return value.toFixed(2); // Limit to 2 decimal points
        }
    }
    }
  };
var colors =[ '#008000', '#FF0000', '#0000FF', '#FFFF00'];
/*
If there are more than 1 ticker, normalize the data and plot a line chart instead of a candlestick chart
*/
if (Object.keys(document.ticker_data).length >= 2){
    options.yaxis.title.text = 'Normalized Price';
    var cnt = 0;
    options.min_max = [];
    for (ticker in document.ticker_data){
      var tickerData = document.ticker_data[ticker];
      var temp = [];
      for (var i =0; i < tickerData.length; i++){
        temp.push(tickerData[i].price);
      }
      var min = Math.min(...temp.flat());
      var max = Math.max(...temp.flat());
      options.min_max.push([min, max]);
      
      var normalized_data = normalize(tickerData, min, max);
      options.series.push({
          name: ticker,
          type: 'line',
          data: [],
          color: colors[cnt]
      });
      for (data in tickerData){
        options.series[cnt].data.push({
            x: tickerData[data].timestamp[0],
            y: normalized_data[data][3]
        });
      } 
      cnt +=1;
    }
    console.log(options.min_max);
    options.tooltip = {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
          var dataPoint = w.config.series[seriesIndex].data[dataPointIndex];
          var startTime = new Date(dataPoint.x);
          var tooltipHtml = '<div class="arrow_box">';
          tooltipHtml += '<span>Start Time: ' + startTime + '</span><br/>';
          tooltipHtml += '<span>Series ' + (seriesIndex+1) + ':</span><br/>';
          tooltipHtml += '<span>Close: ' + dataPoint.y *(options.min_max[seriesIndex][1]-options.min_max[seriesIndex][0])+ options.min_max[seriesIndex][0] + '</span><br/>';
          tooltipHtml += '</div>';
          return tooltipHtml;
      }
    };
  }
  else{
    var count = 0;
    for (ticker in document.ticker_data){
      options.series.push({
          name: ticker,
          type: 'candlestick',
          data: []
      });
      for (data in document.ticker_data[ticker]){

          options.series[count].data.push({
              x: document.ticker_data[ticker][data].timestamp[0],
              y: document.ticker_data[ticker][data].price
          });
      }
      count+=1;
    }
    options.tooltip = {
      shared: false,
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
          var dataPoint = w.config.series[seriesIndex].data[dataPointIndex];
          var startTime = new Date(dataPoint.x);
          var tooltipHtml = '<div class="arrow_box">';
          tooltipHtml += '<span>Start Time: ' + startTime + '</span><br/>';
          tooltipHtml += '<span>Series ' + (seriesIndex+1) + ':</span><br/>';
          tooltipHtml += '<span>Open: ' + dataPoint.y[0] + '</span><br/>';
          tooltipHtml += '<span>High: ' + dataPoint.y[1] + '</span><br/>';
          tooltipHtml += '<span>Low: ' + dataPoint.y[2] + '</span><br/>';
          tooltipHtml += '<span>Close: ' + dataPoint.y[3] + '</span><br/>';
          tooltipHtml += '</div>';
          return tooltipHtml;
      }
  };
}

return options;
}
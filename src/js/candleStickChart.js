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
      colors:['#FF0000','#00FF00'],
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
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
            enabled: true
            
          }
      }
    };
    if (true){
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
          console.log(normalized_data);
          options.series.push({
              name: ticker,
              type: 'candlestick',
              data: []
          });
          for (data in tickerData){
            options.series[cnt].data.push({
                x: tickerData[data].timestamp[0],
                y: normalized_data[data]
            });
          } 
          cnt +=1;
        }
      }
      // var count = 0;
      // for (ticker in document.ticker_data){
      //   options.series.push({
      //       name: ticker,
      //       type: 'candlestick',
      //       data: []
      //   });
      //   for (data in document.ticker_data[ticker]){

      //       options.series[count].data.push({
      //           x: document.ticker_data[ticker][data].timestamp[0],
      //           y: document.ticker_data[ticker][data].price
      //       });
      //   }
      //   count+=1;
      // }
    return options;
}
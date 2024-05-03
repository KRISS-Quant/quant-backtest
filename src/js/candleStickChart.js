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
        // To be fixed
        tooltip: {
          enabled: true,
          shared: true,
          custom: [function({seriesIndex, dataPointIndex, w}) {
            return w.globals.series[seriesIndex][dataPointIndex]
          }, function({ seriesIndex, dataPointIndex, w }) {
            var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
            var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
            var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
            var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
            return (
              '<div class="apexcharts-tooltip-candlestick">' +
              '<div>Open: <span class="value">' +
              o +
              '</span></div>' +
              '<div>High: <span class="value">' +
              h +
              '</span></div>' +
              '<div>Low: <span class="value">' +
              l +
              '</span></div>' +
              '<div>Close: <span class="value">' +
              c +
              '</span></div>' +
              '</div>'
            )
          }]
        }
      }
      };
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
      console.log(options.series);
    return options;
}
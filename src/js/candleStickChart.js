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
            enabled: true,
            custom: [function({seriesIndex, dataPointIndex, w}) {
              return '';
            }, function({ seriesIndex, dataPointIndex, w }) {
              var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
              var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
              var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
              var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
              var startTime = w.globals.seriesX[seriesIndex][dataPointIndex]
              var endTime = w.globals.seriesX[seriesIndex][dataPointIndex + 1];
                if (endTime) {
                    endTime = new Date(endTime).toLocaleString();
                } else {
                    endTime = 'End of Series';
                }
              return (
                  '<div class="apexcharts-tooltip-candlestick">' +
                  '<div>Start Time: <span class="value">' +
                  new Date(startTime).toLocaleString() +
                  '</span></div>' +
                  '<div>End Time: <span class="value">' +
                  endTime +
                  '</span></div>' +
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
      },
    //   tooltip: {
    //     custom: [function({seriesIndex, dataPointIndex, w}) {
    //       return '';
    //     }, function({ seriesIndex, dataPointIndex, w }) {
    //       var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
    //       var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
    //       var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
    //       var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
    //       var startTime = w.globals.seriesX[seriesIndex][dataPointIndex]
    //       var endTime = w.globals.seriesX[seriesIndex][dataPointIndex + 1];
    //         if (endTime) {
    //             endTime = new Date(endTime).toLocaleString();
    //         } else {
    //             endTime = 'End of Series';
    //         }
    //         console.log('seriesIndex:', seriesIndex);
    //         console.log('dataPointIndex:', dataPointIndex);
    //         console.log('o:', o);
    //         console.log('h:', h);
    //         console.log('l:', l);
    //         console.log('c:', c);
    //         console.log('startTime:', startTime);
    //         console.log('endTime:', endTime);    
    //       return (
    //           '<div class="apexcharts-tooltip-candlestick">' +
    //           '<div>Start Time: <span class="value">' +
    //           new Date(startTime).toLocaleString() +
    //           '</span></div>' +
    //           '<div>End Time: <span class="value">' +
    //           endTime +
    //           '</span></div>' +
    //           '<div>Open: <span class="value">' +
    //           o +
    //           '</span></div>' +
    //           '<div>High: <span class="value">' +
    //           h +
    //           '</span></div>' +
    //           '<div>Low: <span class="value">' +
    //           l +
    //           '</span></div>' +
    //           '<div>Close: <span class="value">' +
    //           c +
    //           '</span></div>' +
    //           '</div>'
    //       )
    //     }]
    //   }
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
        // if (count == 2){
        //     var data1 = document.ticker_data[ticker];
        //     options.yaxis.push({
        //         seriesName: 'second',
        //         opposite: true, // this will display the y-axis on the right
        //         min: Math.min(...data1.map(data => data.price)), // replace this with the minimum value of your second series
        //         max: Math.max(...data1.map(data => data.price)) // replace this with the maximum value of your second series
        //     });
        //   }
      }
    return options;
}
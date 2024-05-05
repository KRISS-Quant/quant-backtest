var options = {
    series: [{
    name: 'candle',
    type: 'candlestick',
    data: [
            {x:1714781700000, y:[62940.23, 63000.00, 62880.00, 62950.00]},
            {x:1714782600000, y:[62950.00, 62960.00, 62930.00, 62940.00]},
            {x:1714783500000, y:[62940.00, 62980.00, 62920.00, 62960.00]},
            {x:1714784400000, y:[62960.00, 63000.00, 62940.00, 62980.00]},
            {x:1714785300000, y:[62980.00, 63020.00, 62960.00, 63000.00]},
            {x:1714786200000, y:[63000.00, 63040.00, 62980.00, 63020.00]},
            {x:1714787100000, y:[63020.00, 63060.00, 63000.00, 63040.00]},
            {x:1714788000000, y:[63040.00, 63080.00, 63020.00, 63060.00]},
            {x:1714788900000, y:[63060.00, 63100.00, 63040.00, 63080.00]},
            {x:1714790700000, y:[63080.00, 63120.00, 63060.00, 63100.00]}
    ]
  }],
    chart: {
    type: 'candlestick',
    width: 1000,
    height: 350
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left'
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
document.testSignal = {};
  function test() {
    fetch('/testSignal').then((response) => { // import metadata
        return response.json();
    }).then((data) => {
        document.testSignal = data;
        annotations = generateAnnotations(options.series, 0, document.testSignal.data);
        options.annotations = annotations;
        document.chart = new ApexCharts(document.querySelector("#chart"), options);
        document.chart.render();
        return data;
    });
}
test();

//    
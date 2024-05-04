function handleResponse(data) {
    //console.log(JSON.stringify(data))

    let model = document.getElementById("model-select").value;
    let cnt = document.options.series.length;
    // for output logs
    document.model_metadata[model].output.forEach((output) => {
        document.options.series.push({
            name: output.displayName,
            type: 'line',
            data: []
        });
        for (let i = 0; i < data[output.id].length; i++) {
            document.options.series[cnt].data.push({
                x: data[output.id][i].timestamp,
                y: (data[output.id][i].val - document.options.min_max[0][0]) 
                    / (document.options.min_max[0][1] - document.options.min_max[0][0])
            });
        }
        cnt++;
    });
    
    if (document.chart) {
        document.chart.destroy();
    }
    document.chart = new ApexCharts(document.querySelector("#chart"), document.options);
    document.chart.render();
}
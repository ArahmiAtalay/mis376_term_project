      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        var data = google.visualization.arrayToDataTable([
          ['Years', 'Tourism Agency', 'Rate(per 100k)'],
          ['2015',  8717,      9130],
          ['2016',  9316,      6870],
          ['2017',  9795,      5140],
          ['2018',  10305,      5200],
          ['2019',  11410,      10720],
          ['2020',  12269,      7520]
        ]);

        var options = {
          title : 'Number of Tourism Agency by Last Six Years & Rates(Compared to Previous Year)',
          hAxis: {title: 'Years'},
          seriesType: 'bars',
          series: {1: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
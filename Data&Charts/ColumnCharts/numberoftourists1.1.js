google.charts.load('current', {
        'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Years', 'Total in Current Year*', 'Amount of Increase or Decrease Compared to the Previous Year**'],
          ['2012', 31782832, 326756],
          ['2013', 34910098, 3127266],
          ['2014', 36837900, 1927802],
          ['2015', 36244632, -593268],
          ['2016', 25352213, -10892419],
          ['2017', 32410034, 7057821],
          ['2018', 39488401, 7078367],
          ['2019', 45058000, 5569599],
          ['2020', 12734213, -32349735],
          ['2021', 2743773, -9990440]
        ]);

        var options = {
          title: 'Number Of Tourists Arriving In The Last Ten Years By Year & Difference',
          vAxis: {
            title: 'Number of Tourists'
          },
          hAxis: {
            title: 'Years'
          },
          seriesType: 'bars',
          series: {
            2: {
              type: 'line'
            }
          }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
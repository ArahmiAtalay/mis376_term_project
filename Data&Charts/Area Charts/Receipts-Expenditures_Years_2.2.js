      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Years', 'Receipts', 'Expenditures'],
          ['2015',  31464,       5698],
          ['2016',  22107,      5049],
          ['2017',  26283,      5137],
          ['2018',  29512,      4896],
          ['2019',  34520,      4403],
          ['2020',  12055,      1104],
          ['2021',  2452,      236]
        ]);

        var options = {       
          title: 'Tourism Receipts-Expenditures by Last Seven Years(Million $)',
          hAxis: {title: 'Years',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}   
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Business Num.', 'Employee Num.'],
        [ 12142,      1268478],
        [ 12827,      1119994],
        [ 12500,     	975347]
        ]);
         var options = {
               'title':'Employee vs. Business Number (First point refers to 2019, 2nd one 2021 and 3rd one 2020 year.)',
               'width':560,
               'height':400,
               vAxis: {title: 'Employee Num.'},
               hAxis: {title: 'Business Num.'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }

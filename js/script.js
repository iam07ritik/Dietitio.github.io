var data = [
      { y: '2014', a: 160, b: 20},
      { y: '2015', a: 105,  b: 35},
      { y: '2016', a: 100,  b: 30},
      { y: '2017', a: 112,  b: 40},
      { y: '2018', a: 152,  b: 35},
      { y: '2019', a: 120,  b: 50},
      { y: '2020', a: 100, b: 45},
      { y: '2021', a: 115, b: 45},
      { y: '2022', a: 120, b: 35},
      { y: '2023', a: 145, b: 45},
      { y: '2024', a: 160, b: 35}
    ],
    config = {
      data: data,
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Income With Us', 'Total Outcome Without  Us'],
      fillOpacity: 0.4,
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['#66b9a4','red']
  };
config.element = 'area-chart';
Morris.Area(config);
config.element = 'line-chart';
Morris.Line(config);
config.element = 'bar-chart';
Morris.Bar(config);
config.element = 'stacked';
config.stacked = true;
Morris.Bar(config);
Morris.Donut({
  element: 'pie-chart',
  data: [
    {label: "Friends", value: 30},
    {label: "Allies", value: 15},
    {label: "Enemies", value: 45},
    {label: "Neutral", value: 10}
  ]
});
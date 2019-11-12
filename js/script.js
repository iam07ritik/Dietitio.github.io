var data = [
      { y: '2014', a: 35, b: 35},
      { y: '2015', a: 125,  b: 115},
      { y: '2016', a: 130,  b: 125},
      { y: '2017', a: 142,  b: 122},
      { y: '2018', a: 152,  b:142},
      { y: '2019', a: 160,  b: 130},
      { y: '2021', a: 165, b: 125},
      { y: '2022', a: 130, b: 75},
      { y: '2023', a: 135, b: 85},
      { y: '2024', a: 170, b: 105}
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
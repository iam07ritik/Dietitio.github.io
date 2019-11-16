var myData = {
  labels : ["Mo","Di","Mi","Do","Fr","Sa","So"],
  datasets : [
    {
      fillColor : " rgba(78, 255, 255, 0.3)",
      strokeColor : "cyan",
      pointColor : "cyan",
      pointStrokeColor : "#fff",
      data : [0,39,43,51,66,59,70]
    },
    {
      fillColor : " rgba(255, 0, 0, 0.3)",
      strokeColor : "red",
      pointColor : "white",
      pointStrokeColor : "#fff",
      data : [0,28,30,40,50,47,40]
    }
  ]
}

new Chart(document.getElementById("canvas").getContext("2d")).Line(myData)
// Carga de api de visualizacion y paquete corchart y geochart
google.load('visualization','1.0',{'packages':['corechart']});

    // Se establece la visualizacion cuando termine de cargar la api de Google
    google.setOnLoadCallback(dibujar);

    // Tabla de datos de ejemplo
    function dibujar()
    {
        var data = new google.visualization.DataTable();
        data.addColumn('string','Ciudad');
        data.addColumn('number','visitas');
        data.addRows(
            [
                ['Santiago',700],
                ['Punta Arenas',1050],
                ['Parral',358],
                ['Talca',800],
                ['Temuco',600]
            ]
        );

        // Se establecen las opciones del grafico
        var opciones = {'title':'Gráfico de barras',
                        'width':600,
                        'height':600};

        // Se puede convertir en un grafico de circular cambiando google.visualization.BarChart con google.visualization.PieChart                
        var grafica = new google.visualization.BarChart(document.getElementById('charts'));
        grafica.draw(data,opciones);

    }


         // Se establece la visualizacion cuando termine de cargar la api de Google
    google.setOnLoadCallback(GraficoPie);

    // Tabla de datos de ejemplo
    function GraficoPie()
    {
        var data = new google.visualization.DataTable();
        data.addColumn('string','Ciudad');
        data.addColumn('number','visitas');
        data.addRows(
            [
                ['Santiago',700],
                ['Punta Arenas',1050],
                ['Parral',358],
                ['Talca',800],
                ['Temuco',600]
            ]
        );

        // Se establecen las opciones del grafico
        var opciones = {'title':'Gráfico Circular 3D',
                        
                        is3D: true, // Los graficos circulares se pueden visualizar de manera 3D cuando la propiedad is3D es Verdadera
                        'width':600,
                        'height':600};

        // Se puede convertir en un grafico de circular cambiando google.visualization.BarChart con google.visualization.PieChart                
        var grafica = new google.visualization.PieChart(document.getElementById('GraficoPie'));
        grafica.draw(data,opciones);
    }



         // Se establece la visualizacion cuando termine de cargar la api de Google
         google.setOnLoadCallback(GraficoDonut);

         // Tabla de datos de ejemplo
         function GraficoDonut()
         {
             var data = new google.visualization.DataTable();
             data.addColumn('string','Ciudad');
             data.addColumn('number','visitas');
             data.addRows(
                 [
                     ['Santiago',700],
                     ['Punta Arenas',1050],
                     ['Parral',358],
                     ['Talca',800],
                     ['Temuco',600]
                 ]
             );
     
             // Se establecen las opciones del grafico
             var opciones = {'title':'Gráfico Donut',
                            pieHole:0.4, //al establecer esta propiedad, el grafico circular se tranforma en un frafico tipo donut o rosquilla
                             'width':600,
                             'height':600};
     
             // Se puede convertir en un grafico de circular cambiando google.visualization.BarChart con google.visualization.PieChart                
             var grafica = new google.visualization.PieChart(document.getElementById('GraficoDonut'));
             grafica.draw(data,opciones);
         }


                  // Se establece la visualizacion cuando termine de cargar la api de Google
         google.setOnLoadCallback(GraficoDonut);

         // Tabla de datos de ejemplo
         function GraficoDonut()
         {
             var data = new google.visualization.DataTable();
             data.addColumn('string','Ciudad');
             data.addColumn('number','visitas');
             data.addRows(
                 [
                     ['Santiago',700],
                     ['Punta Arenas',1050],
                     ['Parral',358],
                     ['Talca',800],
                     ['Temuco',600]
                 ]
             );
     
             // Se establecen las opciones del grafico
             var opciones = {'title':'Gráfico Donut',
                            pieHole:0.4, //al establecer esta propiedad, el grafico circular se tranforma en un frafico tipo donut o rosquilla
                             'width':600,
                             'height':600};
     
             // Se puede convertir en un grafico de circular cambiando google.visualization.BarChart con google.visualization.PieChart                
             var grafica = new google.visualization.PieChart(document.getElementById('GraficoDonut'));
             grafica.draw(data,opciones);
         }




         // Se establece la visualizacion cuando termine de cargar la api de Google
         google.setOnLoadCallback(GraficoColumn);

         // Tabla de datos de ejemplo
         function GraficoColumn()
         {
             var data = new google.visualization.DataTable();
             data.addColumn('string','Ciudad');
             data.addColumn('number','visitas');
             data.addRows(
                 [
                     ['Santiago',700],
                     ['Punta Arenas',1050],
                     ['Parral',358],
                     ['Talca',800],
                     ['Temuco',600]
                 ]
             );
     
             // Se establecen las opciones del grafico
             var opciones = {'title':'Gráfico de columnas',
                             'width':600,
                             'height':600};
     
             // Se puede convertir en un grafico de circular cambiando google.visualization.BarChart con google.visualization.PieChart                
             var grafica = new google.visualization.ColumnChart(document.getElementById('GraficoColumn'));
             grafica.draw(data,opciones);
         }



 // Se establece la visualizacion cuando termine de cargar la api de Google
 google.setOnLoadCallback(GraficoCombo);

 // Tabla de datos de ejemplo
 google.charts.setOnLoadCallback(GraficoCombo);

 function GraficoCombo() {
   var data = google.visualization.arrayToDataTable([
     ['Mes', 'Chile', 'Ecuador', 'España', 'Nueva Zelanda', 'Rusia', 'Canada'],
     ['2014/05',  165,      938,         522,             998,           450,      614.6],
     ['2015/06',  135,      1120,        599,             1268,          288,      682],
     ['2016/07',  157,      1167,        587,             807,           397,      623],
     ['2017/08',  139,      1110,        615,             968,           215,      609.4],
     ['2018/09',  136,      691,         629,             1026,          366,      569.6]
   ]);

   var opciones = {
     title : 'Gráfico comparativo columnas',
     vAxis: {title: 'Litros'},
     hAxis: {title: 'Mes'},
     seriesType: 'bars',
     series: {1: {type: 'line'}},
     'width':600,
     'height':600,

   };
   //tipo de grafico a visualizar
   var chart = new google.visualization.ComboChart(document.getElementById('GraficoCombo'));
   chart.draw(data, opciones);
 }


 
  // Se establece la visualizacion cuando termine de cargar la api de Google
  google.charts.setOnLoadCallback(GraficoArea);

      function GraficoArea() {
        var data = google.visualization.arrayToDataTable([
          ['Año', 'Eduardo', 'Jesús'],
          ['2018',  1000,      400],
          ['2019',  1170,      460],
          ['2020',  660,       1120],
          ['2021',  1030,      540]
        ]);

        var opciones = {
          title: 'Gráfico de área',
          hAxis: {title: 'Año',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          'width':600,
          'height':600
        };
        //tipo de grafico a visualizar
        var chart = new google.visualization.AreaChart(document.getElementById('GraficoArea'));
        chart.draw(data, opciones);
      }

      google.charts.load('current', {
        'packages':['geochart'],
        // Se necesita tener una key de google para los mapas
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(graficoGeo);

      function graficoGeo() {
        var data = google.visualization.arrayToDataTable([
          ['Pais', 'Diagnosticados'],
          ['Chile', 504525],
          ['United States', 8781354],
          ['Brazil', 5439641],
          ['Argentina', 1116609],
          ['France', 1198695],
          ['New Zealand', 1943]
        ]);

        var opciones = {
        'title':'Grafico Geo',
        'width':600,
        'height':600};

        var chart = new google.visualization.GeoChart(document.getElementById('graficoGeo'));

        chart.draw(data, opciones);
      }
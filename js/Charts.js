// Carga de api de visualizacion y paquete corchart
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
        var opciones = {'title':'Visitas en mi web',
                        'width':500,
                        'height':300};

        // Se puede convertir en un grafico de circular cambiando google.visualization.BarChart con google.visualization.PieChart                
        var grafica = new google.visualization.BarChart(document.getElementById('charts'));
        grafica.draw(data,opciones);
    }
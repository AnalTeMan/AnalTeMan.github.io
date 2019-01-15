$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [51.06, 17.01], 
                     zoom: 11,
                     zoomControl:false,
                     attributionControl:false
                    }
                    );
    var lyrORTO = 
        L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',{
        layers: 'Raster',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
    });  
    
    var lyrSOZO = 
        L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer',{
        layers: 'Raster',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
    });
    
    var lyrPRGWOJ =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{layers:'wojewodztwa',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             });
    var lyrszkola =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
            layers:'Export_Output_2',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             }); 
    var lyrwiezienia1 =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
            layers:'Export_Output',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             }); 
    var lyrterenrek =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
            layers:'Export_Output_4',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             }); 
    var lyrwodyL =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
            layers:'Export_Output_5',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             }); 
    var lyrcmentarz =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
            layers:'Export_Output_3',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             }); 
    var lyrdrogi =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
            layers:'Export_Output_6',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             }); 
    var lyrkolej =
        L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
            layers:'Export_Output_9',
        format: 'image/png',
        transparent: 'true',
        version: "1.1.1"
                                                                             }); 
 
    
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrSOZO);
    
    var baseMaps = {
        "OpenStreetMaps":lyrOSM,
        "ORTOFOTOMAPA":lyrORTO,
        "Mapa Sozologiczna":lyrSOZO,
        "Wykaz wojewodztw":lyrPRGWOJ,
        
    };
    
    var overlays = {"Wykaz wojewodztw":lyrPRGWOJ,
                    "Szkola":lyrszkola,
                    "Wiezienie":lyrwiezienia1,
                    "Tereny rekreacyjne":lyrterenrek,
                    "Cieki wodne":lyrwodyL,
                    "Cmentarze":lyrcmentarz,
                    "Drogi":lyrdrogi,
                    "Kolej":lyrkolej,};
    
   
    L.control.layers(baseMaps, overlays).addTo(mymap);
    L.control.scale({imperial:false}).addTo(mymap);
    
});
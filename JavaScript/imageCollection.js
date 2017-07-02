// Instantiate an image with the Image constructor.
//Coleções do seninel 2
var sentinel = ee.ImageCollection('COPERNICUS/S2');
//Definição de um ponto
var point = ee.Geometry.Point([-49.255,-16.6799])

//Área à ser filtrada. Não sei como ele delimita o tamanho da área
var spatialFiltered = sentinel.filterBounds(point);

//filtro por data;
var temporalFiltered = spatialFiltered.filterDate('2016-01-01', '2016-12-31');

//Quais sao os parametros?
// This will sort from least to most cloudy.
var sorted = temporalFiltered.sort('NDVI');

// Get the first (least cloudy) image.
var scene = ee.Image(sorted.first());
Map.centerObject(scene, 9);
var visParams = {bands: ['B4', 'B3', 'B2'], max: 0.3};
Map.addLayer(scene, visParams, 'true-color composite');

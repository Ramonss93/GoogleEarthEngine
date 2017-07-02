import ee

ee.Initialize();
image = ee.Image('srtm90_v4');
print(image.getInfo());
path = image.getDownloadUrl({
    'scale': 30,
    'crs': 'EPSG:4326',
    'region': '[[-120, 35], [-119, 35], [-119, 34], [-120, 34]]'
})
print path
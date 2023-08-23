var wms_layers = [];

var format_rivers_0 = new ol.format.GeoJSON();
var features_rivers_0 = format_rivers_0.readFeatures(json_rivers_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rivers_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rivers_0.addFeatures(features_rivers_0);
var lyr_rivers_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rivers_0, 
                style: style_rivers_0,
                interactive: true,
                title: '<img src="styles/legend/rivers_0.png" /> rivers'
            });

lyr_rivers_0.setVisible(true);
var layersList = [lyr_rivers_0];
lyr_rivers_0.set('fieldAliases', {'full_id': 'full_id', });
lyr_rivers_0.set('fieldImages', {'full_id': 'TextEdit', });
lyr_rivers_0.set('fieldLabels', {'full_id': 'inline label', });
lyr_rivers_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
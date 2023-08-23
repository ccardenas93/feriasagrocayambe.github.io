var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });
var format_first_most_sold_brands_1 = new ol.format.GeoJSON();
var features_first_most_sold_brands_1 = format_first_most_sold_brands_1.readFeatures(json_first_most_sold_brands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_first_most_sold_brands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_first_most_sold_brands_1.addFeatures(features_first_most_sold_brands_1);
var lyr_first_most_sold_brands_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_first_most_sold_brands_1, 
                style: style_first_most_sold_brands_1,
                interactive: true,
    title: 'first_most_sold_brands<br />\
    <img src="styles/legend/first_most_sold_brands_1_0.png" /> CHEVROLET<br />\
    <img src="styles/legend/first_most_sold_brands_1_1.png" /> KIA<br />\
    <img src="styles/legend/first_most_sold_brands_1_2.png" /> <br />'
        });

lyr_StamenWatercolor_0.setVisible(true);lyr_first_most_sold_brands_1.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_first_most_sold_brands_1];
lyr_first_most_sold_brands_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'DESCRIPCIO': 'DESCRIPCIO', 'top1': 'top1', 'top2': 'top2', });
lyr_first_most_sold_brands_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', 'DESCRIPCIO': '', 'top1': '', 'top2': '', });
lyr_first_most_sold_brands_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'DESCRIPCIO': 'no label', 'top1': 'no label', 'top2': 'no label', });
lyr_first_most_sold_brands_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
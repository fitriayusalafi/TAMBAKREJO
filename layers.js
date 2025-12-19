var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UMKMMATERIAL_1 = new ol.format.GeoJSON();
var features_UMKMMATERIAL_1 = format_UMKMMATERIAL_1.readFeatures(json_UMKMMATERIAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMMATERIAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMMATERIAL_1.addFeatures(features_UMKMMATERIAL_1);
var lyr_UMKMMATERIAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMMATERIAL_1, 
                style: style_UMKMMATERIAL_1,
                popuplayertitle: 'UMKM MATERIAL',
                interactive: true,
                title: '<img src="styles/legend/UMKMMATERIAL_1.png" /> UMKM MATERIAL'
            });
var format_UMKMKLONTONG_2 = new ol.format.GeoJSON();
var features_UMKMKLONTONG_2 = format_UMKMKLONTONG_2.readFeatures(json_UMKMKLONTONG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMKLONTONG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMKLONTONG_2.addFeatures(features_UMKMKLONTONG_2);
var lyr_UMKMKLONTONG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMKLONTONG_2, 
                style: style_UMKMKLONTONG_2,
                popuplayertitle: 'UMKM KLONTONG',
                interactive: true,
                title: '<img src="styles/legend/UMKMKLONTONG_2.png" /> UMKM KLONTONG'
            });
var format_UMKMJASA_3 = new ol.format.GeoJSON();
var features_UMKMJASA_3 = format_UMKMJASA_3.readFeatures(json_UMKMJASA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMJASA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMJASA_3.addFeatures(features_UMKMJASA_3);
var lyr_UMKMJASA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMJASA_3, 
                style: style_UMKMJASA_3,
                popuplayertitle: 'UMKM JASA',
                interactive: true,
                title: '<img src="styles/legend/UMKMJASA_3.png" /> UMKM JASA'
            });
var format_UMKMMAKANANMINUMAN_4 = new ol.format.GeoJSON();
var features_UMKMMAKANANMINUMAN_4 = format_UMKMMAKANANMINUMAN_4.readFeatures(json_UMKMMAKANANMINUMAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMMAKANANMINUMAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMMAKANANMINUMAN_4.addFeatures(features_UMKMMAKANANMINUMAN_4);
var lyr_UMKMMAKANANMINUMAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMMAKANANMINUMAN_4, 
                style: style_UMKMMAKANANMINUMAN_4,
                popuplayertitle: 'UMKM MAKANAN MINUMAN',
                interactive: true,
                title: '<img src="styles/legend/UMKMMAKANANMINUMAN_4.png" /> UMKM MAKANAN MINUMAN'
            });
var format_Drainase_baik_5 = new ol.format.GeoJSON();
var features_Drainase_baik_5 = format_Drainase_baik_5.readFeatures(json_Drainase_baik_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drainase_baik_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainase_baik_5.addFeatures(features_Drainase_baik_5);
var lyr_Drainase_baik_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drainase_baik_5, 
                style: style_Drainase_baik_5,
                popuplayertitle: 'Drainase_baik',
                interactive: true,
                title: '<img src="styles/legend/Drainase_baik_5.png" /> Drainase_baik'
            });
var format_Drainase_buruk_6 = new ol.format.GeoJSON();
var features_Drainase_buruk_6 = format_Drainase_buruk_6.readFeatures(json_Drainase_buruk_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drainase_buruk_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainase_buruk_6.addFeatures(features_Drainase_buruk_6);
var lyr_Drainase_buruk_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drainase_buruk_6, 
                style: style_Drainase_buruk_6,
                popuplayertitle: 'Drainase_buruk',
                interactive: true,
                title: '<img src="styles/legend/Drainase_buruk_6.png" /> Drainase_buruk'
            });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });
var lyr_PetaResapanAir1_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Peta Resapan Air1<br />\
    <img src="styles/legend/PetaResapanAir1_8_0.png" /> 2<br />\
    <img src="styles/legend/PetaResapanAir1_8_1.png" /> 3<br />\
    <img src="styles/legend/PetaResapanAir1_8_2.png" /> 4<br />\
    <img src="styles/legend/PetaResapanAir1_8_3.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PetaResapanAir1_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12294142.721807, -776688.395096, 12295416.281273, -775469.603387]
        })
    });
var format_KERENTANANSOSIAL_9 = new ol.format.GeoJSON();
var features_KERENTANANSOSIAL_9 = format_KERENTANANSOSIAL_9.readFeatures(json_KERENTANANSOSIAL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KERENTANANSOSIAL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KERENTANANSOSIAL_9.addFeatures(features_KERENTANANSOSIAL_9);
var lyr_KERENTANANSOSIAL_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KERENTANANSOSIAL_9, 
                style: style_KERENTANANSOSIAL_9,
                popuplayertitle: 'KERENTANAN SOSIAL',
                interactive: true,
    title: 'KERENTANAN SOSIAL<br />\
    <img src="styles/legend/KERENTANANSOSIAL_9_0.png" /> 0.26 - 0.26<br />\
    <img src="styles/legend/KERENTANANSOSIAL_9_1.png" /> 0.26 - 0.57<br />\
    <img src="styles/legend/KERENTANANSOSIAL_9_2.png" /> 0.57 - 0.78<br />\
    <img src="styles/legend/KERENTANANSOSIAL_9_3.png" /> 0.78 - 0.78<br />\
    <img src="styles/legend/KERENTANANSOSIAL_9_4.png" /> 0.78 - 0.78<br />' });
var format_KERENTANANBANJIR_10 = new ol.format.GeoJSON();
var features_KERENTANANBANJIR_10 = format_KERENTANANBANJIR_10.readFeatures(json_KERENTANANBANJIR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KERENTANANBANJIR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KERENTANANBANJIR_10.addFeatures(features_KERENTANANBANJIR_10);
var lyr_KERENTANANBANJIR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KERENTANANBANJIR_10, 
                style: style_KERENTANANBANJIR_10,
                popuplayertitle: 'KERENTANAN BANJIR',
                interactive: true,
    title: 'KERENTANAN BANJIR<br />\
    <img src="styles/legend/KERENTANANBANJIR_10_0.png" /> 245 - 270<br />\
    <img src="styles/legend/KERENTANANBANJIR_10_1.png" /> 270 - 295<br />\
    <img src="styles/legend/KERENTANANBANJIR_10_2.png" /> 295 - 320<br />\
    <img src="styles/legend/KERENTANANBANJIR_10_3.png" /> 320 - 345<br />\
    <img src="styles/legend/KERENTANANBANJIR_10_4.png" /> 345 - 445<br />' });
var format_ADMINISTRASI_DESA_11 = new ol.format.GeoJSON();
var features_ADMINISTRASI_DESA_11 = format_ADMINISTRASI_DESA_11.readFeatures(json_ADMINISTRASI_DESA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_DESA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_DESA_11.addFeatures(features_ADMINISTRASI_DESA_11);
var lyr_ADMINISTRASI_DESA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_DESA_11, 
                style: style_ADMINISTRASI_DESA_11,
                popuplayertitle: 'ADMINISTRASI_DESA',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_DESA_11.png" /> ADMINISTRASI_DESA'
            });
var group_ADMINISTRASI = new ol.layer.Group({
                                layers: [lyr_ADMINISTRASI_DESA_11,],
                                fold: 'open',
                                title: 'ADMINISTRASI'});
var group_KERENTANANBANJIR = new ol.layer.Group({
                                layers: [lyr_KERENTANANBANJIR_10,],
                                fold: 'close',
                                title: 'KERENTANAN BANJIR'});
var group_DRAINASE = new ol.layer.Group({
                                layers: [lyr_Drainase_baik_5,lyr_Drainase_buruk_6,lyr_Sungai_7,lyr_PetaResapanAir1_8,],
                                fold: 'close',
                                title: 'DRAINASE'});
var group_UMKM = new ol.layer.Group({
                                layers: [lyr_UMKMMATERIAL_1,lyr_UMKMKLONTONG_2,lyr_UMKMJASA_3,lyr_UMKMMAKANANMINUMAN_4,],
                                fold: 'close',
                                title: 'UMKM'});

lyr_OSMStandard_0.setVisible(true);lyr_UMKMMATERIAL_1.setVisible(true);lyr_UMKMKLONTONG_2.setVisible(true);lyr_UMKMJASA_3.setVisible(true);lyr_UMKMMAKANANMINUMAN_4.setVisible(true);lyr_Drainase_baik_5.setVisible(true);lyr_Drainase_buruk_6.setVisible(true);lyr_Sungai_7.setVisible(true);lyr_PetaResapanAir1_8.setVisible(true);lyr_KERENTANANSOSIAL_9.setVisible(true);lyr_KERENTANANBANJIR_10.setVisible(true);lyr_ADMINISTRASI_DESA_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_UMKM,group_DRAINASE,lyr_KERENTANANSOSIAL_9,group_KERENTANANBANJIR,group_ADMINISTRASI];
lyr_UMKMMATERIAL_1.set('fieldAliases', {'No': 'No', 'Jenis_UMKM': 'Jenis_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Sejak_Kapa': 'Sejak_Kapa', 'Nama_Jenis': 'Nama_Jenis', 'Pemasaran': 'Pemasaran', 'Lokasi': 'Lokasi', 'Koordinat': 'Koordinat', 'Jam_Buka': 'Jam_Buka', 'Contact': 'Contact', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_UMKMKLONTONG_2.set('fieldAliases', {'No': 'No', 'Jenis_UMKM': 'Jenis_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Sejak_Kapa': 'Sejak_Kapa', 'Nama_Jenis': 'Nama_Jenis', 'Pemasaran': 'Pemasaran', 'Lokasi': 'Lokasi', 'Koordinat': 'Koordinat', 'Jam_Buka': 'Jam_Buka', 'Contact': 'Contact', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_UMKMJASA_3.set('fieldAliases', {'No': 'No', 'Jenis_UMKM': 'Jenis_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Sejak_Kapa': 'Sejak_Kapa', 'Nama_Jenis': 'Nama_Jenis', 'Pemasaran': 'Pemasaran', 'Lokasi': 'Lokasi', 'Koordinat': 'Koordinat', 'Jam_Buka': 'Jam_Buka', 'Contact': 'Contact', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_UMKMMAKANANMINUMAN_4.set('fieldAliases', {'No': 'No', 'Jenis_UMKM': 'Jenis UMKM', 'Nama_Pemil': 'Nama Pemilik ', 'Sejak_Kapa': 'Tahun Berdiri', 'Nama_Jenis': 'Nama Jenis', 'Pemasaran': 'Pemasaran', 'Lokasi': 'Lokasi', 'Koordinat': 'Koordinat', 'Jam_Buka': 'Jam Buka', 'Contact': 'Contact Person', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Drainase_baik_5.set('fieldAliases', {'Id': 'Id', 'Kedalaman': 'Kedalaman', 'Lebar': 'Lebar', 'Nama_Jalan': 'Nama_Jalan', 'Keterangan': 'Keterangan', 'Area': 'Area', });
lyr_Drainase_buruk_6.set('fieldAliases', {'Id': 'Id', 'Kedalaman': 'Kedalaman', 'Lebar': 'Lebar', 'Nama_Jalan': 'Nama_Jalan', 'Keterangan': 'Keterangan', 'Area': 'Area', });
lyr_Sungai_7.set('fieldAliases', {'Id': 'Id', 'fcode': 'fcode', 'jnspl': 'jnspl', 'remark': 'remark', });
lyr_KERENTANANSOSIAL_9.set('fieldAliases', {'kdrw': 'kdrw', 'Jumlah': 'Jumlah', 'Luas': 'Luas', 'Kep_Pendud': 'Kep_Pendud', 'Skor': 'Skor', 'Kelas': 'Kelas', 'Bobot_KS': 'Bobot_KS', });
lyr_KERENTANANBANJIR_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'gridcode': 'gridcode', 'Rata_rata': 'Rata_rata', 'Skor_Hujan': 'Skor_Hujan', 'Klasifikas': 'Klasifikas', 'OBJECTID': 'OBJECTID', 'jnspl': 'jnspl', 'Skor_LULC': 'Skor_LULC', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'Deskripsi': 'Deskripsi', 'Skor_Slope': 'Skor_Slope', 'Id_12': 'Id_12', 'gridcode_2': 'gridcode_2', 'Jarak_Sung': 'Jarak_Sung', 'Skor_Sunga': 'Skor_Sunga', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'Inflitrasi': 'Inflitrasi', 'Skor_Tanah': 'Skor_Tanah', 'Bobot_Sung': 'Bobot_Sung', 'Bobot_Huja': 'Bobot_Huja', 'Bobot_LULC': 'Bobot_LULC', 'Bobot_Slop': 'Bobot_Slop', 'Bobot_Tana': 'Bobot_Tana', 'Bobot_Tota': 'Bobot_Tota', 'Kelas_KB': 'Kelas_KB', });
lyr_ADMINISTRASI_DESA_11.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_UMKMMATERIAL_1.set('fieldImages', {'No': 'TextEdit', 'Jenis_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Sejak_Kapa': 'TextEdit', 'Nama_Jenis': 'TextEdit', 'Pemasaran': 'TextEdit', 'Lokasi': 'TextEdit', 'Koordinat': 'TextEdit', 'Jam_Buka': 'TextEdit', 'Contact': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_UMKMKLONTONG_2.set('fieldImages', {'No': 'TextEdit', 'Jenis_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Sejak_Kapa': 'TextEdit', 'Nama_Jenis': 'TextEdit', 'Pemasaran': 'TextEdit', 'Lokasi': 'TextEdit', 'Koordinat': 'TextEdit', 'Jam_Buka': 'TextEdit', 'Contact': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_UMKMJASA_3.set('fieldImages', {'No': 'TextEdit', 'Jenis_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Sejak_Kapa': 'TextEdit', 'Nama_Jenis': 'TextEdit', 'Pemasaran': 'TextEdit', 'Lokasi': 'TextEdit', 'Koordinat': 'TextEdit', 'Jam_Buka': 'TextEdit', 'Contact': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_UMKMMAKANANMINUMAN_4.set('fieldImages', {'No': 'TextEdit', 'Jenis_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Sejak_Kapa': 'TextEdit', 'Nama_Jenis': 'TextEdit', 'Pemasaran': 'TextEdit', 'Lokasi': 'TextEdit', 'Koordinat': 'TextEdit', 'Jam_Buka': 'TextEdit', 'Contact': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_Drainase_baik_5.set('fieldImages', {'Id': 'Range', 'Kedalaman': 'TextEdit', 'Lebar': 'TextEdit', 'Nama_Jalan': 'TextEdit', 'Keterangan': 'TextEdit', 'Area': 'TextEdit', });
lyr_Drainase_buruk_6.set('fieldImages', {'Id': 'Range', 'Kedalaman': 'TextEdit', 'Lebar': 'TextEdit', 'Nama_Jalan': 'TextEdit', 'Keterangan': 'TextEdit', 'Area': 'TextEdit', });
lyr_Sungai_7.set('fieldImages', {'Id': '', 'fcode': '', 'jnspl': '', 'remark': '', });
lyr_KERENTANANSOSIAL_9.set('fieldImages', {'kdrw': 'TextEdit', 'Jumlah': 'Range', 'Luas': 'TextEdit', 'Kep_Pendud': 'TextEdit', 'Skor': 'Range', 'Kelas': 'TextEdit', 'Bobot_KS': 'TextEdit', });
lyr_KERENTANANBANJIR_10.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Rata_rata': 'TextEdit', 'Skor_Hujan': 'TextEdit', 'Klasifikas': 'TextEdit', 'OBJECTID': 'TextEdit', 'jnspl': 'TextEdit', 'Skor_LULC': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'Deskripsi': 'TextEdit', 'Skor_Slope': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode_2': 'TextEdit', 'Jarak_Sung': 'TextEdit', 'Skor_Sunga': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'Inflitrasi': 'TextEdit', 'Skor_Tanah': 'TextEdit', 'Bobot_Sung': 'TextEdit', 'Bobot_Huja': 'TextEdit', 'Bobot_LULC': 'TextEdit', 'Bobot_Slop': 'TextEdit', 'Bobot_Tana': 'TextEdit', 'Bobot_Tota': 'TextEdit', 'Kelas_KB': 'TextEdit', });
lyr_ADMINISTRASI_DESA_11.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_UMKMMATERIAL_1.set('fieldLabels', {'No': 'no label', 'Jenis_UMKM': 'inline label - always visible', 'Nama_Pemil': 'inline label - always visible', 'Sejak_Kapa': 'inline label - always visible', 'Nama_Jenis': 'inline label - always visible', 'Pemasaran': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Koordinat': 'inline label - always visible', 'Jam_Buka': 'inline label - always visible', 'Contact': 'inline label - always visible', 'Easting': 'inline label - always visible', 'Northing': 'inline label - always visible', });
lyr_UMKMKLONTONG_2.set('fieldLabels', {'No': 'no label', 'Jenis_UMKM': 'inline label - always visible', 'Nama_Pemil': 'inline label - always visible', 'Sejak_Kapa': 'inline label - always visible', 'Nama_Jenis': 'inline label - always visible', 'Pemasaran': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Koordinat': 'inline label - always visible', 'Jam_Buka': 'inline label - always visible', 'Contact': 'inline label - always visible', 'Easting': 'inline label - always visible', 'Northing': 'inline label - always visible', });
lyr_UMKMJASA_3.set('fieldLabels', {'No': 'no label', 'Jenis_UMKM': 'inline label - always visible', 'Nama_Pemil': 'inline label - always visible', 'Sejak_Kapa': 'inline label - always visible', 'Nama_Jenis': 'inline label - always visible', 'Pemasaran': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Koordinat': 'inline label - always visible', 'Jam_Buka': 'inline label - always visible', 'Contact': 'inline label - always visible', 'Easting': 'inline label - always visible', 'Northing': 'no label', });
lyr_UMKMMAKANANMINUMAN_4.set('fieldLabels', {'No': 'inline label - visible with data', 'Jenis_UMKM': 'inline label - visible with data', 'Nama_Pemil': 'inline label - visible with data', 'Sejak_Kapa': 'inline label - visible with data', 'Nama_Jenis': 'inline label - visible with data', 'Pemasaran': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Koordinat': 'inline label - visible with data', 'Jam_Buka': 'inline label - visible with data', 'Contact': 'inline label - visible with data', 'Easting': 'inline label - visible with data', 'Northing': 'inline label - visible with data', });
lyr_Drainase_baik_5.set('fieldLabels', {'Id': 'no label', 'Kedalaman': 'inline label - always visible', 'Lebar': 'inline label - always visible', 'Nama_Jalan': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Drainase_buruk_6.set('fieldLabels', {'Id': 'no label', 'Kedalaman': 'inline label - always visible', 'Lebar': 'inline label - always visible', 'Nama_Jalan': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Sungai_7.set('fieldLabels', {'Id': 'no label', 'fcode': 'no label', 'jnspl': 'no label', 'remark': 'no label', });
lyr_KERENTANANSOSIAL_9.set('fieldLabels', {'kdrw': 'inline label - always visible', 'Jumlah': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Kep_Pendud': 'inline label - always visible', 'Skor': 'inline label - always visible', 'Kelas': 'inline label - always visible', 'Bobot_KS': 'inline label - always visible', });
lyr_KERENTANANBANJIR_10.set('fieldLabels', {'OBJECTID_1': 'no label', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'Rata_rata': 'inline label - always visible', 'Skor_Hujan': 'inline label - always visible', 'Klasifikas': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'jnspl': 'inline label - always visible', 'Skor_LULC': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'gridcode_1': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Skor_Slope': 'inline label - always visible', 'Id_12': 'inline label - always visible', 'gridcode_2': 'inline label - always visible', 'Jarak_Sung': 'inline label - always visible', 'Skor_Sunga': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'OBJECTID_3': 'inline label - always visible', 'Inflitrasi': 'inline label - always visible', 'Skor_Tanah': 'inline label - always visible', 'Bobot_Sung': 'inline label - always visible', 'Bobot_Huja': 'inline label - always visible', 'Bobot_LULC': 'inline label - always visible', 'Bobot_Slop': 'inline label - always visible', 'Bobot_Tana': 'inline label - always visible', 'Bobot_Tota': 'inline label - always visible', 'Kelas_KB': 'inline label - always visible', });
lyr_ADMINISTRASI_DESA_11.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_ADMINISTRASI_DESA_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
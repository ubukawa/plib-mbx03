import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { MapboxStyleSwitcherControl } from "@watergis/mapbox-gl-style-switcher";
import "@watergis/mapbox-gl-style-switcher/styles.css"
import MapboxPopupControl from '@watergis/mapbox-gl-popup';
import '@watergis/mapbox-gl-popup/css/styles.css';
import MapboxPitchToggleControl from '@watergis/mapbox-gl-pitch-toggle-control';
import '@watergis/mapbox-gl-pitch-toggle-control/css/styles.css';
import MapboxAreaSwitcherControl from '@watergis/mapbox-gl-area-switcher';
import '@watergis/mapbox-gl-area-switcher/css/styles.css';
import MapboxLegendControl from "@watergis/mapbox-gl-legend";
import '@watergis/mapbox-gl-legend/css/styles.css';
import { MapboxExportControl}  from "@watergis/mapbox-gl-export";
import '@watergis/mapbox-gl-export/css/styles.css';
import MapboxElevationControl from "@watergis/mapbox-gl-elevation";
import '@watergis/mapbox-gl-elevation/css/styles.css';
import { MapboxValhallaControl} from "@watergis/mapbox-gl-valhalla";
import '@watergis/mapbox-gl-valhalla/css/styles.css';
import axios from 'axios';
import config from './config';

(()=>{
    alert("UN Clear Map\n The United Nations Clear Map (hereinafter \"Clear Map\") is a background reference web mapping service produced to facilitate \"the issuance of any map at any duty station, including dissemination via public electronic networks such as Internet\" and \"to ensure that maps meet publication standards and that they are not in contravention of existing United Nations policies\" in accordance with the in the Administrative Instruction on \"Regulations for the Control and Limitation of Documentation - Guidelines for the Publication of Maps\" of 20 January 1997 (http://undocs.org/ST/AI/189/Add.25/Rev.1). \n \n Clear Map is created for the use of the United Nations Secretariat and community. All departments, offices and regional commissions of the United Nations Secretariat including offices away from Headquarters using Clear Map remain bound to the instructions as contained in the Administrative Instruction and should therefore seek clearance from the UN Geospatial Information Section (formerly Cartographic Section) prior to the issuance of their thematic maps using Clear Map as background reference.");

    const map = new mapboxgl.Map({
        container: 'map',
        style: config.styles[0].uri,
        center: config.center,
        zoom: config.zoom,
        maxZoom: config.maxZoom,
        minZoom: config.minZoom,
        hash:true,
        attributionControl: true,
    });

    
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}), 'top-right');
    map.addControl(new MapboxPitchToggleControl({minpitchzoom: 19})); 
    MapboxStyleSwitcherControl.DEFAULT_STYLE = config.styles[0].title;
    map.addControl(new MapboxStyleSwitcherControl(config.styles), 'top-right');
    map.addControl(new MapboxAreaSwitcherControl(config.areaSwitcher.areas), 'top-right');
    map.addControl(new MapboxExportControl({Crosshair: true, PrintableArea: true}), 'top-right');
    map.addControl(new mapboxgl.ScaleControl({maxWidth: 80, unit: 'metric'}), 'bottom-left');
    //map.addControl(new mapboxgl.AttributionControl({compact: true,customAttribution: config.attribution}), 'bottom-right');
    map.addControl(new mapboxgl.AttributionControl({compact: true,customAttribution: 'The United Nations Clear Map (hereinafter &quot;Clear Map&quot;) is a background reference web mapping service produced to facilitate &quot;the issuance of any map at any duty station, including dissemination via public electronic networks such as Internet&quot; and &quot;to ensure that maps meet publication standards and that they are not in contravention of existing United Nations policies&quot; in accordance with the in the Administrative Instruction on &quot;Regulations for the Control and Limitation of Documentation - Guidelines for the Publication of Maps&quot; of 20 January 1997 (http://undocs.org/ST/AI/189/Add.25/Rev.1). Clear Map is created for the use of the United Nations Secretariat and community. All departments, offices and regional commissions of the United Nations Secretariat including offices away from Headquarters using Clear Map remain bound to the instructions as contained in the Administrative Instruction and should therefore seek clearance from the UN Geospatial Information Section (formerly Cartographic Section) prior to the issuance of their thematic maps using Clear Map as background reference.<br>* Non-Self Governing Territories<br>** Dotted line represents approximately the Line of Control in Jammu and Kashmir agreed upon by India and Pakistan. The final status of Jammu and Kashmir has not yet been agreed upon by the parties.​<br>*** A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).' }));

    if (config.popup)map.addControl(new MapboxPopupControl(config.popup.target));
    
    if (config.legend){
        const legendCtrl = new MapboxLegendControl(config.legend.targets, config.legend.options);
        map.addControl(legendCtrl, 'bottom-left')
    }

})();
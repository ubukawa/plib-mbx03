const version = 0.1;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    // change attribution to yours
    attribution : '©NARWASSCO',
    // change stylefiles URLs to yours
    styles : [
        { title: 'UN Clear Map Vector - Plain', uri: `https://dev-unvt.dfs.un.org/styles/clearmapVector/clearmap-plain0820.json?version=${version}`,},
        { title: 'UN Clear Map Vector - Dark', uri: `https://dev-unvt.dfs.un.org/styles/clearmapVector/clearmap-dark0820.json?version=${version}`,}, 
        { title: 'UN Clear Map Vector - Gray', uri: `https://dev-unvt.dfs.un.org/styles/clearmapVector/clearmap-gray0820.json?version=${version}`,},
    ],
    // change initial location and zoom level to yours
    center: [0, 0],
    zoom: 1,
    minZoom: 0,
    maxZoom: 6,

    // please specify layers' name for showing popup with attributes table.
    popup: {
        target: ['pt-place-capitals1','pt-place-capitals2','pt-place-capitals3']
    },
    // please specify your covered area if you have multipul locations to do waterworks
    areaSwitcher: {
        areas : [
            {title: "Default",latlng: [0, 0],zoom: 1,}, 
            {title: "UNHQ",latlng: [-73.97, 40.75],zoom: 4}, 
            {title: "UNGSC",latlng: [17.97, 40.65],zoom: 4}
        ]
    },
    // please specify layer name for showing in legend panel.
    legend:{
        targets:{
            'ls-coastline': 'Coastline',
            'pg-wbya10': 'Water area',
            'ls-dral10': 'Water line',
            'pg-urban': 'Uban',
            'pt-place-capitals1': 'National Capital',
            'pt-place-capitals2': 'Territorial Capital',
            'pt-place-capitals3': 'Altanative Capital'
        },
        options: {
            showDefault:false,
            showCheckbox:true,
            reverseOrder:true,
            onlyRendered:true
        }
    }
}
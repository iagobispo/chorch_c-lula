import * as turf from '@turf/turf';

//https://www.npmjs.com/package/@turf/distance
export function culculateDistance(){
    var from = turf.point([-23.536437, -46.330250]);
    var to = turf.point([-23.363683, -46.136741]);
    var options = {units: 'kilometers'};
    
    var distance = turf.distance(from, to, options);

    console.log(distance)
    //addToMap
    var addToMap = [from, to];
    from.properties.distance = distance;
    to.properties.distance = distance;

    // console.log(addToMap)

    return addToMap
}
function road(speed, area){
   let limit = new Map([
    ['motorway', 130],
    ['interstate', 90],
    ['city', 50],
    ['residential', 20]
   ]);

   let speedLimit = limit.get(area);
   if(speed <= speedLimit){
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
   } else{
        let status = '';
        if(speed - speedLimit <= 20){
            status='speeding';
        } else if(speed - speedLimit <=40){
            status='excessive speeding';
        } else{
            status='reckless driving';
        }
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
   }
}

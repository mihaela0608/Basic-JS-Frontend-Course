/***
 * @param {Array} meetings
 */
function meetingF(meetings){
    let success = {};
    for(let meeting of meetings){
        let day = meeting.split(' ')[0];
        let person = meeting.split(' ')[1];
        if(!success.hasOwnProperty(day)){
            success[day] = person;
            console.log(`Scheduled for ${day}`);
        } else{
            console.log(`Conflict on ${day}!`);
        }
    }
    for(let key in success){
        console.log(`${key} -> ${success[key]}`)
    }
}

function loading(percent){
    if(percent == 100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }

    let load = percent / 10;
    let left = 10 - load;

    console.log(`${percent}% [${'%'.repeat(load)}${'.'.repeat(left)}]`);
    console.log('Still loading...');
}
loading(30);
loading(100);
let roomClean = new Promise((resolve,reject)=>{
    let roomCleanStatus = true;
    if(roomCleanStatus){
        resolve("Room has been cleaned")
    }else{
        reject ("Room has not been cleaned")
    }
});

let garbageClean = new Promise((resolve, reject)=>{
    let garbageCleanStatus = true;
    if(garbageCleanStatus){
        resolve("Garbage has been cleaned")
    }else{
        reject("Garbage hasnt been cleaned")
    }
});

let gatherPrize = new Promise((resolve,reject)=>{
    let prizeSatus = true;
    if(prizeSatus){
        resolve("Achived prize")
    }else {
        reject("Prize is not achived")
    }
});

roomClean.then((msg)=>{
    let themsg = `${msg}`;
    garbageClean.then((msg)=>{
        themsg += `${msg}`;
        gatherPrize.then((msg)=>{
            themsg += `${msg}`;
            console.log(`${themsg}. Hurray , room cleaned succesfully`)
        }).catch((msg)=>{
            console.log(`${themsg}`)
        }).catch((msg)=>{
            console.log(`${themsg}`)
        }).catch((msg)=>{
            console.log(`${themsg}`)
        })
    })
})
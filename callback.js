console.log("Loading...");
userdata(4,(data)=>{
    console.log(data);
})
function userdata(id,callback){
   setTimeout(()=>{
    // waiting for the excution delay
    console.log("reading data from the cloud...");
    // retiring the result
    callback({id:id,name:'onesamket'});
   },3000);
}
// =====================| 1st Example |==============
let promise = new Promise ((resolve , reject) =>{
    console.log("I'm   a Promise ");
    resolve(1230)
});
// =====================| 2nd Example |==============

function getData  (dataId , getNextData){
 return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Data, " , dataId);
    resolve("Success");
    if (getNextData) {
        getNextData();
    }
    },5000)
 })
}
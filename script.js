// =====================| 1st Example |==============
// let promise = new Promise ((resolve , reject) =>{
//     console.log("I'm   a Promise ");
//     resolve(1230)
// });
// // =====================| 2nd Example |==============

// function getData  (dataId , getNextData){
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     console.log("Data, " , dataId);
//     resolve("Success");
//     if (getNextData) {
//         getNextData();
//     }
//     },5000)
//  })
// }

// =====================| 3rd Example |==============
const getPromise = () =>{
    return new Promise ((resolve , reject ) => {
        console.log("I'ma   Promise");
        resolve("success");
    //     setTimeout(() => {
    //     reject("netwark Err"); 
    //     }, 2000);
     });
}
let promise = getPromise();
promise.then((res) =>{
    console.log("Promise Fulfild" ,res);
    
});
promise.catch((err) =>{
    console.log("Rejected" , err);
    
})
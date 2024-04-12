let mypromise=new Promise(function(resolve,reject){

   // resolve("success");
    reject("rejected");
    // let flag=0;
    // if(flag==0){
    //     resolve("success");
    // }else{
    //     reject("rejected");
    // }
  });

  let successFunc=(val)=>{console.log(val)};
  let failureFunc=(val)=>{console.log(val)};
  mypromise.then(successFunc,failureFunc);
  
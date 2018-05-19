function execute(){
   //assign string array to convert from lower case to upper case
    var stringArray=["s","a","m"];
    var started=new Date();
    console.log(stringArray+":::Started At: "+started.getSeconds());   
    convertToUpperCase(stringArray,1000*stringArray.length).then((converted)=>{
        console.log(converted);      
        var end=new Date();
        console.log("Finished At: "+end.getSeconds()); 
    }); 
    
}

function convertToUpperCase(arr,delay){
    //return promise which resolved after array length seconds
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
         clearTimeout(wait);
         var result=[];
         for (var i=0;i<arr.length;i++){
            result.push(String(arr[i]).toUpperCase());
         }      
          resolve(result);
        }, delay);
      });
}


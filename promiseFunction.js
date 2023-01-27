function isPositiveP(number){
	const executor = (resolve,reject)=>{
    	setTimeout(()=>{
        	if(typeof number === "number"){
            	resolve(number >=0 ?"양수" : "음수");
            }else{
            	reject("주어진 값이 숫자형이 아닙니다.");
            }
        },2000)
    };
    const asyncTask = new Promise(executor);
    return asyncTask;
}
const res = isPositiveP([]);
res.then((res)=>{console.log("작업성공 : ", res);
})
    .catch((err)=>{console.log("작업실패 : ", err);
});
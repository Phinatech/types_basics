
    const dynamic = (data:(number)[]) => {
        if(typeof data[0] == 'number'){
            let num: number = 0;
            for(let i:number = 0;i<data.length;i++){
                num = num + data[i] 
            }
            return num * 500;
        }else{
            return data.length;
        }
    }
    console.log(dynamic([9,]));
    
    // const arr: Number[] = [2]
    // console.log(typeof arr);
    
    console.log("Hello");
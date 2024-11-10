// For Loop

for(let i = 1; i<=10; i++){
    console.log(i);
}

for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}




//For of loop

let a = new Map;
a.set("0", "Mann Patel")
a.set("1", "Haresh Patel")

let b = "Mann Patel"

let c = ["Mann", "Patel", "Haresh", "Patel"]

for(let i of a){
    console.log(i)
}

for(let i of b){
    console.log(i)
}

for(let i of c){
    console.log(i)
}




// For in Loop => Used To Iterate Over A Object

let d = {
    "Name": "Mann Patel",
    "Age": 20
};

for(let i in d){
    console.log(i)
    console.log(a[i])
}






// For Each Loop => Used To iterate over a array

let e = [1, 2, "Mann", "Patel"];

e.forEach((val,idx,arr)=>{
    console.log();
    console.log(val);
    console.log(idx);
    console.log(arr);
    console.log();
})
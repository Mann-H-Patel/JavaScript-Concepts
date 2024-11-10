// => Functions Is Used To Perform A Particular Block Of Code, Depending Upon The Parameter And Condition

// EXAMPLE =>

    // Funtion Without Parameter

    function Greeting(){
        console.log("Welcome");
    };

    // Function With Parameter

    function Greeting(yourName){
        console.log(`welcome ${yourName}`);
    };

    // Function With Default Arguement 

    function Greeting1(yourName = "Master"){
        console.log(`welcome ${yourName}`)
    } //If No arguement Passed The Default Arguement Is Used


// FUNCTION STORE IN VARIABLE

let Greeting2 = function(yourName){
    console.log(`Welcome ${yourName}`);
};

Greeting2("Mann")

// Arrow Function 

let Greeting3 = (yourName) => {
    console.log(`You Are Most Welcome ${yourName}`);
};

Greeting3("Mann")

// BONUS EXAMPLE => FUNCTION TO PRINT OBJECT KEYS AND VALUES

let a = {
    "Name": "Mann Patel",
    "Age": 20
}

function Mann(para){
    for(let a in para){
        console.log(`${a}: ${para[a]}`)
    }
}

Mann(a)
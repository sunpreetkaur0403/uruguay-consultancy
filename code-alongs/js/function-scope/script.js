// scope - where can I access my variables from?

// global scope

// block scope

// function scope

const MY_NAME = "Martyna";

console.log(MY_NAME);

if (MY_NAME.length > 10) {
    console.log(`${MY_NAME} is longer than 10 letters`);
} else {
    // I can access global variables from here no issues
    console.log(`${MY_NAME} is less or equal to 10 letters`);
}

function printMyName() {
    // no issues when trying to access global variable from here
    console.log(MY_NAME);
}

printMyName();

if (true) {
    // thing only exists in the scope of this if block, I cannot access it from global scope
    let thing = "Variable from block scope";
    console.log(thing);
}
// ReferenceError: thing is not defined
// console.log(thing);

function printThing() {
    console.log(thing);
}

// ReferenceError: thing is not defined
// printThing();

const firstName = "Martyna";
const lastName = "Krol";

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName("John", "Smith"));
console.log(firstName);

const myGlobalVar = "Global String";

const scope1 = (scope1Param) => {
    // I want to add console.log of what I can access in this scope
    console.log(myGlobalVar, "scope1");
    console.log(scope1Param, "scope 1 param from scope 1");

    const scope2 = (scope2Param) => {
        const scope2Var = "I was created in scope 2";

        // What can I access here?
        console.log(myGlobalVar, "global var logged from scope 2");
        console.log(scope1Param, "scope 1 param from scope 2");
        console.log(scope2Param, " scope2Param accessed from scope 2");
        console.log(
            scope2Var,
            "variable created in scope 2 accessed from scope 2"
        );

        const scope3 = (scope3Param) => {
            const scope3Var = "I was created in scope 3";

            // What can I access from here?
            console.log(myGlobalVar, "global var logged from scope 3");
            console.log(scope1Param, "scope 1 param from scope 3");
            console.log(scope2Param, " scope2Param accessed from scope 3");
            console.log(
                scope2Var,
                "variable created in scope 2 accessed from scope 3"
            );
            console.log(
                scope3Var,
                "variable created in scop3, accessed from scope 3"
            );
            console.log(scope3Param, "scope 3 param accessed from scope 3");
        };
        scope3("Arg for scope 3");
    };
    scope2(" Arg for scope 2");
};

scope1("arg for scope 1");

function funcionOne(funcOneParam) {
    return funcOneParam;
}

function funcTwo(funcTwoParam) {
    // this breaks my code, funcTow cannot access params from funcOne, tehre are on the same level
    console.log(funcOneParam);
    return funcTwoParam;
}

// funcTwo("some param");

// why avoid var?

if (true) {
    var y = 20;
}

console.log(y);

var z = 40;
console.log(z);
var z = 50;
console.log(z);

console.log(x);
var x = 12;

// WHAT ARE PURE FUNCTIONS?
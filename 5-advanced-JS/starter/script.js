//Function construcror

/*var john={
    name: 'John',
    yearOfBirth:1999,
    job:'teacher',
};

var Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge=function(){
    console.log(2020-this.yearOfBirth);
}

Person.prototype.lastName='Smith';

var john = new Person('John',1999,'teacher');
var jane = new Person('Jane',1998,'Dancer');
var mark = new Person('Mark',1995,'athelete');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2020-this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name='John';
john.yearOfBirth=1999;
john.job='teacher';

var Jane =Object.create(personProto,{
    name:{value:'Jane'},
    yearOfBirth:{value:1998},
    job:{value:'designer'}
});

*/
/*
// Primitives vs Objects

//Primitives

var a=21;
var b=a;
a=46;
console.log(a);
console.log(b);

//Objects

var obj1={
    name:'John',
    age:21
};
var obj2=obj1;
obj1.age=38;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age =21;
var obj={
    name:'Jonas',
    city:'Lisbon'
};

function change(a,b){
    a=30;
    b.city='San francisco';
}

change(age,obj);

console.log(age);
console.log(obj.city);

*/
/*
//////////////////////////////////
// Passing function as arguments

var years =[1999,1998,2005,1990,1985];

function arrayCalc(arr,fn){
    var arrRes=[];
    for (var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}

function isFullAge(el){
    return el>=18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
    return Math.round(206.9-(0.67*el));
    }
    else{
        return -1;
    }
}

var ages =arrayCalc(years,calculateAge);
var fullAge=arrayCalc(ages,isFullAge);
var heartRate=arrayCalc(ages,maxHeartRate);

console.log(fullAge);
console.log(ages);
console.log(heartRate);

*/

/*
///////////////////////////////////////////
//Functions returning functions

function interviewQuestion(job){
    if(job==='Designer'){
        return function(name){
            console.log(name+', can you please explain what UX design is?');
        }
    }else if(job==='teacher'){
        return function(name){
            console.log('What subject do you teach,'+ name +'?');
        }
    }else {
        return function(name){
            console.log('Hello '+ name+', what do you do?');
        }
    }
}

var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('Designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');

*/

////////////////////////
//IIFE
/*
function game(){
    var score = Math.random()*10;
    console.log(score>=5);
}
game();

(
    function(){
        var score = Math.random()*10;
        console.log(score>=5);
    }
)();

//console.log(score);

(
    function(goodLuck){
        var score = Math.random()*10;
        console.log(score>=5 - goodLuck);
    }
)(5);
*/

//////////////////////////
// Closures

/*
function retirement(retirementAge){
    var a =' years left until retirement.';
    return function(yearOfBirth){
        var age =2020-yearOfBirth;
        console.log((retirementAge-age)+ a);
    }
}

var retirementUS = retirement(66);
retirementUS(1999); 
 var retirementGermany= retirement(65);
 var retirementIceland=retirement(67);

 retirementGermany(1990);
 retirementIceland(1999);

*/

//little challenge
/*

function interiviewQuestion(job){
    return function (name){
        if(job==='designer'){
        console.log(name+', can you please explain what UX design is?');
        }
        else if(job==='teacher'){
            console.log('What subject do you teach,'+ name +'?');
        }
        else{
            console.log('Hello '+ name+', what do you do?');
        }
    }
}

interiviewQuestion('teacher')('john');
interiviewQuestion('designer')('Mark');

*/

//////////////////////////////
// Bind, call & apply

var john ={
    name:'John',
    age:21,
    job:'teacher'
    presentation : function(style,timeOfDay){
       if(style==='formal'){
           console.log('Good '+ timeOfDay+', Ladies and gentlemen! I\'m'  );
       } 
       else if(style==='friendly'){
           console.log();
       }
    }
}





































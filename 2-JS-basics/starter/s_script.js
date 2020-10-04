/*
var firstName ='Sam';
console.log(firstName);

var lastName ='christian';
var age = 23;

var fullAge = true;
console.log(fullAge); 

 var job;
 console.log(job);

 job = 'Gamer';
 console.log(job);

 // variable naming rules
 var _3years =3;
 var SamCalvin='Sam and Calvin';
 var function = 23;

 /**************** 
 Variable  mutation type coercion 
 

 var firstName ='Sam';
 var age=23;

 //type coercion
 console.log(firstName+ ' ' + age);

 var job, isMarried;
 job='gamer';
 isMarried=false;

 console.log(firstName + ' is a ' + age + ' years old ' + job + ' Is he Married?' + isMarried);

 //variable mutaion
 age ='twenty eight';
 job= 'racer';

 alert(firstName + ' is a ' + age + ' years old ' + job + ' Is he Married?' + isMarried);

 var lastName= prompt('what is his last Name?');
 console.log(firstName+ ' ' + lastName);
 */

 /************************
  *basic operators
    
   var now, yearSam, yearCalvin;
   now=2020;
   ageSam=23;
   ageCalvin=25;
   
   //math operators
   var yearSam=now-ageSam;
   var yearCalvin=now-ageCalvin;

   console.log(yearSam);
   console.log(now+2);
   console.log(now*2);
   console.log(now/10);

   //logical operators

   var samOlder= ageSam<ageCalvin;
   console.log(samOlder);

   //type of operator

console.log(typeof samOlder);
console.log(typeof ageSam);
console.log(typeof 'Calvin is older than Sam');
var x;
console.log(typeof x);



//operartor precedence

var now = 2020;
var yearSam=1999;
var fullAge=18;

//multiple operators  
var isFullAge= now-yearSam>=fullAge;
console.log(isFullAge)

//grouping
var ageSam=now-yearSam;
var ageCalvin=25;
var avgAge=(ageSam+ageCalvin)/2;
console.log(avgAge);

//multiple assignments
var x, y;
x=y=(3+5)*4-6;
console.log(x,y);

//more operators
 x*=2;
console.log(x);
x+=10;
console.log(x);
x--;
console.log(x);

*/

//coding challenge
/*Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 


var massMark=65;//kg
var massJohn=60;//kg

var heightMark=1.6;//meter
var heightJohn=1.65;//meter

var markBmi=massMark/(heightMark*heightMark);
var johnBmi=massJohn/(heightJohn*heightJohn);

var greaterBmi=markBmi>johnBmi;
console.log("mark has more BMI then John is" + ' ' +greaterBmi);
*/
/*
//if else statements

var firstname ='Sam';
var civilStatus='single';

if(civilStatus === 'married'){
   console.log(firstname +' is married ');
} else{
console.log(firstname+' is hopefully marry soon ;)');
}

var isMarried=true;

if(isMarried){
   console.log(firstname +' is married ');
} else{
console.log(firstname+' is hopefully marry soon ;)');
}

*/

/*
// boolean logic

var firstname='Sam';
var age ='20';

if(age<13){
   console.log(firstname+' is a boy.');
}else if(age>=13 && age<20){
   console.log(firstname+' is a teenager.');
}else if(age>=20 && age<30){
   console.log(firstname+' is a youngman.');
} else{
   console.log(firstname+' is a man.');
}
*/


/****************** 
//ternary operators & switch statements

//ternary operator

var firstName='Sam';
var age= 16;

age>=18? console.log(firstName+' drinks beer'): console.log(firstName+' drinks juice');

var drink=age>=18?'beer':'juice';
console.log(drink);

/*
if(age>=18){
   var drink='beer';
}else{
   var drink='juice';
}


//switch statements

var job='instructor';
switch(job){
   case 'gamer':
      case 'instructor':
      console.log(firstName+' teaches kids how to play game');
      break;
      case 'driver':
         console.log(firstName+' drives an uber in lisbon');
         break;
         case 'designer':
            console.log(firstName+' designs good websites');
            break;
            default:
               console.log(firstName+' does something else');     
}



switch (true){
   case age<13:
      console.log(firstName+' is a boy.');
      break;
      case age>=13&& age<20:
         console.log(firstName+' is a teenager.');
         break;
         default:
            console.log(firstName+' is a man.');
}

/*
var firstname='Sam';
var age ='20';

if(age<13){
   console.log(firstname+' is a boy.');
}else if(age>=13 && age<20){
   console.log(firstname+' is a teenager.');
}else if(age>=20 && age<30){
   console.log(firstname+' is a youngman.');
} else{
   console.log(firstname+' is a man.');
}

*/
/*
//truthy and falsy values and equality operators

var height;

height=23;

if(height || height===0){
   console.log('variable is defined');
}else{
   console.log('variable is not defined');
} 

//equality operators

if(height=23){
   console.log('the == operator does type coercion')
}

*/

/*John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

/*
var johnAvgTeamScore=(89+120+103)/3;
var mikeAvgTeamScore=(116+94+123)/3;
var marryAvgTeamScore=(97+134+105)/3;
 
console.log('john avg team score is '+johnAvgTeamScore);
console.log('Mike avg team score is '+mikeAvgTeamScore);
console.log('Marry avg team score is '+marryAvgTeamScore);

if(johnAvgTeamScore>mikeAvgTeamScore && johnAvgTeamScore>marryAvgTeamScore){
   console.log('John\'s team is winner with highest avg score of '+johnAvgTeamScore);
}else if(johnAvgTeamScore>mikeAvgTeamScore && mikeAvgTeamScore>marryAvgTeamScore){
   console.log('Mike\'s team is winner with highest avg score of '+mikeAvgTeamScore);
}else if(marryAvgTeamScore>johnAvgTeamScore && marryAvgTeamScore>mikeAvgTeamScore){
   console.log('Marry\'s team is winner with highest avg score of '+marryAvgTeamScore)
}else{
   console.log('All teams have same avg score '+ johnAvgTeamScore);
}

*/

/*
// Functions

function calculateAge(birthYear){
   return 2020-birthYear;
}

var ageSam=calculateAge(1999);
var ageHiral=calculateAge(1940);
var ageHk=calculateAge(1995);
console.log(ageSam,ageHiral,ageHk);

function yearsUntilRetirement(year, firstName){
   var age=calculateAge(year);
   var retirement=65-age;
   
   if(retirement>0){
      console.log(firstName+' retires in '+retirement+' years');
}else{
   console.log(firstName+' is already retired');
}
}

yearsUntilRetirement(1999,'Sam');
yearsUntilRetirement(1940,'Hiral');
yearsUntilRetirement(1995,'Hk');

*/

// Function statements and expressions

//function  declaration

//function whatDoYouDo(job,firstName){}

//function expressions

/*
var whatDoYouDo=function(job,firstName){
   switch(job){
      case 'teacher': 
         return firstName+ ' teaches kids how to code';
         case 'driver':
            return firstName+' drives an uber in lisbon';
            case 'designer':
               return firstName+' designs beautiful websites';
               default:
                  return firstName+' does something else';
   }
}
console.log(whatDoYouDo('teacher','Sam'));
console.log(whatDoYouDo('designer','Sam'));
console.log(whatDoYouDo('driver','Sam'));
*/


/******************** 
//arrays

//initialize new array

var names =['John', 'Mark' ,'Jane'];
var years =new Array(1999,1969,1948);

console.log(names[2]);  
console.log(names.length);

//MUTATE array data

names[1]='Ben';
names[names.length]='Mary';
console.log(names);

//different datatypes

var john=['john','smith',1999,'Designer','false'];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner=john.indexOf('Designer')===-1?' john is not a designer':'john is a designer'
console.log(isDesigner);

*/

/***************
 * coding challenge
 */

/*John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

*/
/*
function tipCalculator(bill){
   var percentage;
      if(bill<50){
         percentage=0.2;
      }
      else if(bill>=50&&bill<200){
         percentage=0.15;
      }
      else{
         percentage=0.10;
      }
      return percentage*bill;
}

var bills=[124,48,268];
var tips=[tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
console.log(tips);

var finalBill=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(finalBill);
*/

/********************
 * objects and propereties
 */

//Object literal

/*
var john={
   firstName:'John',
   lastName:'Smith',
   birthYear:1999,
   fanilyMembers:['Jane','Mark','Emily','Bob'],
   job:'teacher',
   isMarried:'false',
};
console.log(john.firstName);
console.log(john['lastName']);

var x='birthYear';
console.log(john[x]);

john.job='designer';
john['isMarried']='true';
console.log(john);

//new object syntax

var jane= new Object();
jane.name=  'Jane';
jane.birthYear=1980;
jane['lastName']='Smith';
console.log(jane);

*/

/*****************
 * Objects and methods
 */

 /*
var john={
   firstName:'John',
   lastName:'Smith',
   birthYear:1995,
   fanilyMembers:['Jane','Mark','Emily','Bob'],
   job:'teacher',
   isMarried:'false',
   calcAge:function (){
      this.age = 2020-this.birthYear
   }
};
john.calcAge()
console.log(john);
 */

 /*******************
  * Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
  */

  /*
 var john={
    fullName:'John Smith',
    height1:1.95,
    mass1:60,
    bmi: function(){
       this.bmi=this.mass1/(this.height1*this.height1);
       return this.bmi;
    }
 };

 var mark={
   fullName:'mark warner',
   height2:1.95,
   mass2:60,
   bmi: function(){
      this.bmi=this.mass2/(this.height2*this.height2);
      return this.bmi;
   }
};

john.bmi()
mark.bmi()

console.log('John has '+john.bmi+ ' BMI');
console.log('Mark has '+mark.bmi+' BMI');

if(john.bmi>mark.bmi){
   console.log('John has higher BMI then Mark which is shown below with full details.');
   console.log(john);
}else if(john.bmi<mark.bmi){
   console.log('Mark has higher BMI then John which is shown below with full details.');
   console.log(mark);
}else{
   console.log('Both have same BMI which is shown below with full details');
   console.log(john);
   console.log(mark);
}

*/


/********************************
 * loops amd iteration
 */
/*
 for (var i = 1; i<=20 ; i+=2){
    console.log(i);
 }

 var john = ['John', 'Smith', 1999 ,'designer',false];
 
 for (var i=0; i<john.length ; i++){
    console.log(john[i]);
 }

 // while loop

 var i=0;
 while (i<john.length){
    console.log(john[i]);
    i++
 }

*/

/*
 // Continue and break statements

 var john = ['John', 'Smith', 1999 ,'designer',false,'blue'];
 
 for (var i=0; i<john.length ; i++){
    if(typeof john[i] !== 'string')continue;
    console.log(john[i]);
 }


 
 for (var i=0; i<john.length ; i++){
    if(typeof john[i] !== 'string')break;
    console.log(john[i]);
 }

 // looping backwards

for( var i=john.length-1; i>=0; i--){
   console.log(john[i]);
}

*/

/**********************
 * Coding challenge 5
 
 Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/

/*
var john={
   fullname:'John Smith',
   bills:[124, 48, 268, 100, 42],
   calcTips:function(){
      this.tips=[];
      this.finalvalues=[];

      for(i=0;i<this.bills.length;i++){
         var percentage;
         var bill = this.bills[i];

         if (bill<50){
            percentage=0.2;
         }
         else if(bill>=50 && bill<200 ){
            percentage=0.15;
         }
         else{
            percentage=0.10;
         }

         this.tips[i]=bill*percentage;
         this.finalvalues[i]= bill+ (bill*percentage);
      }
   }
}



 var mark={
   fullname:'Mark Warner',
   bills:[77,475,110,45],
   calcTips:function(){
      this.tips=[];
      this.finalvalues=[];

      for(i=0;i<this.bills.length;i++){
         var percentage;
         var bill = this.bills[i];

         if (bill<100){
            percentage=0.2;
         }
         else if(bill>=100 && bill<300 ){
            percentage=0.1;
         }
         else{
            percentage=0.25;
         }

         this.tips[i]=bill*percentage;
         this.finalvalues[i]= bill+ (bill*percentage);
      }
   }
}

function calcAverage(tips){
   var sum=0;
   for (i=0;i<tips.length;i++){
      sum=sum+tips[i];
   }
   return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average=calcAverage(john.tips);
mark.average=calcAverage(mark.tips);
console.log(john,mark);


if (john.average>mark.average){
   console.log(john.fullname+ '\'s family pays higher tips with an average of $'+john.average);
}
else if(mark.average>john.average){
   console.log(mark.fullname+ '\'s family pays higher tips with an average of $'+mark.average);
}

*/
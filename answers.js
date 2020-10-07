//Please put your answers here

// #1 What is this code doing? How might it be improved?

return !this.allQuestions.filter(q => q.subThreadName == this.currentQuestion.subThreadName ).filter(q => q.mrLevel == this.currentQuestion.mrLevel).some( q => q.currentAnswer == "No")

// This code is returning a bool of the first inverse instance of an filtered array of objects, based on subThreadName & mrLevel compared to currentQuestion where the currentAnswer is no.

// A couple ways this code can be improved
// #1 Change the operator == to ===. This insures were are checking for strict equality of type and value and to prevent the forced type coercion of values

// #2 Simplify filter to include both subThreadName & mrLevel ie .filter(q => q.subThreadName === this.currentQuestion.subThreadName &&  q.mrLevel === this.currentQuestion.mrLevel). This prevents the fliter function from being invoked and ran twice.
// You may argue this doesn't help readability of the function but this can be resolved by separating the function out into two separate parts.

// #3 Add Optional Chaining to the function to prevent any errors caused if none of the parameters are met. ie .filter(q => q.subThreadName === this.currentQuestion.subThreadName )?.filter(...

// #4 Remove the ! to find the inverse of. This can either be solved by changing the what the .some is looking if that information is known ie .some( q => q.currentAnswer == "Yes") or by changing the equality operator ie .some( q => q.currentAnswer !== "No")

// The final refactor looking like this for a one line answer
return this.allQuestions.filter(q => q.subThreadName === this.currentQuestion.subThreadName && q.mrLevel === this.currentQuestion.mrLevel)?.some( q => q.currentAnswer !== "No")

// As well as a more readable multiline solution
const filterdQuestions = this.allQuestions.filter(q => q.subThreadName === this.currentQuestion.subThreadName && q.mrLevel === this.currentQuestion.mrLevel)
return filterdQuestions && filterdQuestions.some( q => q.currentAnswer !== "No")

// If you wanted to break this down even further we can fit all the logic in the .some() Id rather avoid this as its less readable and if any data is dirty it may be harder to debug.
return this.allQuestions.some(q => q.subThreadName === this.currentQuestion.subThreadName && q.mrLevel === this.currentQuestion.mrLevel && q.currentAnswer !== "No")

// #2 What is this code doing?
var oldAssessment = this.allQuestions.map( q => Object.assign({}, q));

// The first thing happening in this section of code is that oldAssessment is being declared via a var assignment. This differs from the new standard that is const and let because var is globaly or function / locally scoped.
// Var also allows for the variable to be re-declared vs let which can be updated but not re-declared. Moving on from this allQuestions is being mapped over which returns a new array.
// Inside the map the function declares each question with the variable p, With each question a new target Object is created with Object.assign then q is copied over into the inside of the new object.
// The final Array will look like oldAssessment = [{q}, {q}, {q}]

// #3 What is this code doing?
const old = this.allQuestions.map(function(question: any) { return {...question}; })

// In this line of code we are declaring the variable old with const which cannot be updated or redeclared. allQuestions is then mapped over via an anonymous function, that takes the parameter of question which is typed checked and takes in any type.
// This is an awesome typesScript feature that makes sure you are passing in the correct type of paramter. TypeScript being a functional programing take on normal javaScript. The function then returns a new object with all key values pairs or values via the spread operator.
// With the final return looking like old = [{k:v, k2: v2}, {k:v, k2: v2}]


// #4 I have an array of objects, they are currently untyped. I'm unsure of how but mixed in with my normal objects ({ id, name, date, createdAt }), are null values. How would you eliminate the null values?

// The way this questions is asked im not exactly sure if the array looks like [{}, null, {} , {}] or [{k:v}, {k:null}, {k:v}]. Bellow are answers for both instances.

// If you just need to remove null values from a single depth array
const sanitizedObjects = objects.filter(object => object !== null)

// If you needed to filter the nested objects for null key value pairs.
const removedNullKeysObjects = objects.map(object => Object.keys(object).forEach(key => object[key] === null && delete object[key]))

// #5 In Angular 2+ how to you pass variable(s) from a parent to a child? answer in concept
// code example for #5:
// <div>
  // <header-component />
// </div>
// class FileOne {
// ...
// private date: any;
// headerMessage: string;
// ...
// }
// file 2 -- header-component
// <div>
  // HERE is where I want a header message
// </div>```

// In order to pass variables to from the parent to the child we must use a process called input binding.

// On the child level a @Input() decorator is used. This allows for data to be passed from the parent to the child component.
// This can be any variety of data types and is used as followed @Input() headerMessage: string;.
// In order for the message to display we must also interpolate the message in the template by using curly brackets ie {{headerMessage}}

// On the parent component level we can pass the header message in a couple of different ways. If we just wanted to explicitly set the value inside the template,
// we can just define it inside the component ie:  <parent headerMessage="headerMessage">.
// We can also use ngOnInit() to pass in the data. This allows us to either pass in the data from another file or source like a data management library, another file, cms, etc...
// ie:
// headerMessage: string;
// ngOnInit(){
//   this.headerMessage = theSourceOfTheData;
// }
// This can also be sued to explicitly set the string like so.
// headerMessage: string;
// ngOnInit(){
//   this.headerMessage = "This is the Header Message";
// }
// This is little more verbose of a way of passing props in comparison to something like react that just allows for you to just pass items in.
// This is very beneficial to maintain the container / view separation.



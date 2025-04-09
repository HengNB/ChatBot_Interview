# ChatBot_Interview
FE_Assessment interview Question

## Assessment 1
### Details:
-Build a single-page web app using HTML/JAVASCRIPT/CSS/JQUERY where the user can interact with a chatbot named Jamie
- The webpage must be mobile responsive.

### Description of Jamie:
Jamie is a chatbot, it will have limited type of replies, the following is the reply details:
- Jamie says “Yes” when user ask a question.
- Jamie says “Please remain calm.” if you yell at him.
- Jamie says “Please give me some time to resolve the issue.” if you yell a question at him.
- Jamie says “Can I help you?” if you mention his name without any other messages.
- Jamie says “Sorry, I don’t understand” to anything else.

### Description of the webpage:
- Display current date and time on the bottom of the message bubble.
- Display names above message bubble.
- Display placeholder in input box.
- You are allowed to use bootstrap or any library related.
- Don’t use any framework like Vue or react, do this in JS vanilla or JQuery.

## Assessment 2

### Question 1
What is the value that will be returned in the console log below? *this is javascript code

function cal(a,b) {
  a+b
}
console.log(cal(1,2))


### Question 2
Write a js/jquery function to convert variable x into “Goal” object structure.

let x = [
	{
		id: 1,
		type: “a”
	},
	{
		id: 2,
		type: “b”
	},
	{
		id: 3,
		type: “b”
	},
	{
		id: 4,
		type: “c”
	},
	{
		id: 5,
		type: “a”
	},
] 


Goal: {
	a : [{id: 1,type:a},{id: 5,type:a}],
	b : [{id: 2,type:b},{id: 3,type:b}],
	c : [{id: 4,type:c}]
}




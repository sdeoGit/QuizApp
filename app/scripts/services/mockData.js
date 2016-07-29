angular.module('appAngularGruntApp').factory("dataService", function(){
	var Ques = [
		{	
			QText: "ng-click directive represents a AngularJS click event.", 
			Ans1: "True", 
			Ans2: "False", 
			CorrectAns: "Ans1"
		},
		{
			QText: "Use novalidate with a form declaration to disable any browser specific validation.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: "Ans1"
		},
		{
			QText: "Constants are used to pass values at config phase.", 
			Ans1: "True",
			Ans2: "False",
			CorrectAns: "Ans1"
		},
		{
			QText: "AngularJS provides capability to create Single Page Application in a very clean and maintainable way.",
			Ans1: "True",
			Ans2: "False", 
			CorrectAns: "Ans1"
		},
		{
			QText: "Currency filter is applied to an expression using pipe character.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: "Ans1"
		},
		{
			QText: "Inbuilt services are always prefixed with $ symbol.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: "Ans1"
		},
		{
			QText: "angular.module is primarily used to create application module.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: "Ans1"
		},
		{
			QText: "Services are singleton objects which are instantiated only once in app.",
			Ans1: "False",
			Ans2: "True",
			CorrectAns: "Ans2"
		},
		{
			QText: "ng-bind binds the AngularJS Application data to HTML tags.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: "Ans1"
		},
		{
			QText: "AngularJS expressions behave in same way as ng-bind directives.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: "Ans1"
		}
	];
 return {Ques:Ques};   
});
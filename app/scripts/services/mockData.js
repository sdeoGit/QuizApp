angular.module('appAngularGruntApp').factory("dataService", function(){
	var _questions = [
		{	
			QText: "ng-click directive represents a AngularJS click event.", 
			Ans1: "True", 
			Ans2: "False", 
			CorrectAns: true	
		},
		{
			QText: "Use novalidate with a form declaration to disable any browser specific validation.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: true
		},
		{
			QText: "Constants are used to pass values at config phase.", 
			Ans1: "True",
			Ans2: "False",
			CorrectAns: true
		},
		{
			QText: "AngularJS provides capability to create Single Page Application in a very clean and maintainable way.",
			Ans1: "True",
			Ans2: "False", 
			CorrectAns: true
		},
		{
			QText: "Currency filter is applied to an expression using pipe character.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: true
		},
		{
			QText: "Inbuilt services are always prefixed with $ symbol.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: true
		},
		{
			QText: "angular.module is primarily used to create application module.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: true
		},
		{
			QText: "Services are singleton objects which are instantiated only once in app.",
			Ans1: "False",
			Ans2: "True",
			CorrectAns: false
		},
		{
			QText: "ng-bind binds the AngularJS Application data to HTML tags.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: true
		},
		{
			QText: "AngularJS expressions behave in same way as ng-bind directives.",
			Ans1: "True",
			Ans2: "False",
			CorrectAns: true
		}
	];
 return{
     questions:_questions
    };   
});
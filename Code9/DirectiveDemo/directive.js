var app = angular.module("myapp",[]);
app.directive("tcsHeaderDirective",function(){
	return {
		template :"<h1>This is the Header Directive</h1>",
		restrict :"E"
	}
});
app.controller("ctrl2",function($scope){
	$scope.firstName = "Ram";
});

app.directive("sum",function(){
	return {
		template :"<h1>This is the Sum Directive</h1>",
		controller:"ctrl2",
		link:function(scope,element,attrs){
			var img = document.createElement("img");
			img.src = "https://www.hmhco.com/~/media/sites/home/education/global/icons/math/icon-gomath-k-6-2015.jpg";
			var total = parseInt(attrs.firstno)+ parseInt(attrs.secondno);
			element[0].innerHTML = "<h1>Sum of FirstNo "+attrs.firstno+" Second No "+attrs.secondno+" Sum is "+total+" And Controller Value is "+scope.firstName+"</h1>";
			element[0].appendChild(img);
			element[0].addEventListener("click",function(){
				element.hide(1000);
			})
		},

		restrict :"E"
	}
});

app.directive("tcsHeadTag",function(){
	return {
		template:`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`,
		restrict : 'E'
	}
})

app.factory("myfactory",function(){
	var object = {
		menu:[{value:"Home",url:"http://www.google.com"}, {value:"ContactUs",url:"http://www.amazon.com"},{value:"AboutUs",url:"http://www.flipkart.com"}],
		brand:"BOA"
	};
	return object;
})

app.controller("myctrl",function($scope,myfactory){
	$scope.menudata = myfactory;
})

app.directive("tcsMenu",function(){
	return {
		template:`<nav class='navbar navbar-default'><div class='container-fluid'><div class='navbar-header'><button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'><span class='sr-only'>Toggle navigation</span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
      </button>
      <a class='navbar-brand' href='#'>{{menudata.brand}}</a>
    </div>

    
    <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
      <ul class='nav navbar-nav' ng-repeat='obj in menudata.menu' >
        
        <li><a href='{{obj.url}}'>{{obj.value}}</a></li>
       
      </ul>
          
    </div>
  </div>
</nav>
`,
		restrict :'E'
	}
});
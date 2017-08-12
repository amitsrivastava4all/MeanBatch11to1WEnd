var app = angular.module("myapp",[]);
app.directive("displayDateDirective",function(){
    var currentDate = new Date();
    return {
        template:"<h1>Current Date is "+currentDate+"</h1>",
        restrict:"E"  // Element Level, Attribute Level , Class Level, Comment Level
    }
});
app.controller("timectrl",function($scope,$interval){
$scope.time = 0;
$scope.doClock=function(){
    
    $interval(function() {
    $scope.time++;
    },1000);
}
});

app.directive("clock",function(){
    return {
        template:"<h1>Clock Time is {{time}}</h1>",
        restrict:"E"
    }
});
app.controller("myctrl",function($scope){
$scope.firstName = "Amit";
    $scope.secondName = "Srivastava";

});
app.controller("myctrl2",function($scope){
    $scope.firstName = "Ram";
    $scope.secondName = "Kumar";
});

app.directive("nameDirective",function(){
    return {
        template:"<b>Hello Name is  {{firstName}} {{secondName}} </b>",
        restrict:"E"  // Element Level, Attribute Level , Class Level
    }
});

var gpspos;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    gpspos.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    console.log("Pos is "+gpspos);
}

app.directive("gps",function(){
    return {
        controller:"myctrl2",
        link:function(scope,element,attrs){
           // element[0].innerHTML="Going to Fetch the GPS Location "+scope.firstName+" "+scope.secondName;
            gpspos =  element[0];
            getLocation();
            element[0].innerHTML="GPS Position is "+gpspos;
            //element[0].innerHTML="<b>Test Complete By "+scope.firstName;
        },
        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("calendar",function(){
	return {
		link:function(scope,element,attrs){
			element[0].addEventListener("click",function(){
				alert("Click..."+element[0].id);
				let id = element[0].id;
				$("#"+id).datepicker();
				
			});
			
		},
		restrict:"A" 
	}
});

app.directive("attributelevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].addEventListener("click",function(){
                element[0].innerHTML ="U Click on H1";
                element.fadeOut(1000);
            });
            element[0].addEventListener("mouseenter",function(){
            element[0].innerHTML="this is an Attribute (Mouse enter) level directive";
            });
//            element.bind("click",function(){
//               alert("U Click on Element"); 
//            });
            element[0].addEventListener("mouseleave",function(){
                element[0].innerHTML="this is an Attribute (Mouse Leave) level directive";
            });
        },

        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("myclass",function(){
    console.log("Class LEvel Call");
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            console.log("Element ",attrs);
            element[0].innerHTML="<b>this is an class level directive </b>";
            
        },
        restrict:"C"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("commentlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>this is an comment level directive";
        },
        restrict:"M"  // Element Level, Attribute Level , Class Level
    }
});
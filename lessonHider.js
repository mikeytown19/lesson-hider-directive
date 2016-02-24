angular.module('directivePractice').directive('lessonHider', function(){

  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    controller:function($scope, lessonsService){
        $scope.getSchedule = lessonsService.getSchedule();
    },
    scope:{
      lesson: '=',
      dayAlert: '&',
    },
    link:function(scope, element, attributes){
        scope.getSchedule.then(function( response ){
          scope.schedule = response.data;

          for(var i = 0; i < scope.schedule.length; i++){
            if(scope.schedule[i].lesson === scope.lesson){
              scope.lessonDay === scope.schedule.weekDay;
              element.css('text-decoration','line-through')
              return;
            }
          }



        })
    }
  }
})

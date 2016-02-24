angular.module('directivePractice').service('lessonsService', function($http){

    this.getSchedule = function(){
      return $http.get('schedule.json');
    }

})

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict"

angular.module('unit').controller('operation', function($scope, $http) {

    //turn on main menu
    $scope.main = function()
    {
       $("#main_menu").show();
       $("#sub_wt").hide();
       $("#sub_bs").hide();
       $("#sub_bp").hide();
   }
   
   //turn on bs menu
   $scope.bs_menu = function()
   {
       $('#main_menu').hide();
       $('#sub_bs').show();
   }
   
   //turn on bp menu
   $scope.bp_menu = function()
   {
       $('#main_menu').hide();
       $('#sub_bp').show();
   }
   
   //turn on weight menu
   $scope.wt_menu = function()
   {
       $('#main_menu').hide();
       $('#sub_wt').show();
   }
   
   //show graph
   $scope.graph = function()
   {
       
   }
   
   //show stats
   $scope.stats = function()
   {
       
   }
}); 


        
angular.module('unit').controller('start', function($scope, $http) {
    
        $scope.main();
});
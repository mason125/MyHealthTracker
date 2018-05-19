<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
  The backend utilizes a factory pattern to generate the proper object.
 * There are a total of four classes and abstract class for the generic read and
 * write function. The other class blood_sugar, blood_pressure, and a weight 
  */

require ("as.php");
require ("factory.php");
require ("blood_sugar.php");
require ("blood_pressure.php");
require ("weight.php");


//generate object
if(isset($_POST["submit"]))
{
    $sel = new factory;
    $fac = $sel -> test($_POST["name"]);
    $fac -> read();
}



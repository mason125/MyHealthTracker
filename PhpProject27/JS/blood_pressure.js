/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 class blood_pressure extends operation
{
    //this function queries the database
    read()
    {
       
    }
    //this function writes to the database
    write()
    {
        
    }
    //this launches the blood pressure menu
    menu()
    {
        $("#main_menu").hide();
        $("#sub_bp").show();
    }
};

const bp = new blood_pressure;
//select submenu
$("#bp_btn").on('click', () => bp.menu());

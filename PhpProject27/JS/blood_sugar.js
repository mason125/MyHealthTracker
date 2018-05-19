/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class blood_sugar extends operation
{
    read()
    {
        
    }
    
    write()
    {
        
    }
    
    menu()
    {
        $("#main_menu").hide();
        $("#sub_bs").show();
    }
};

const bs = new blood_sugar;
$("#bs_btn").on('click',()=> bs.menu());

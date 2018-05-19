/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class operation 
{
    static main()
    {
        //hide sub menus
        $("#sub_bp").hide();
        $("#sub_bs").hide();
        $("#sub_wt").hide();
        
        //show main menue
        $("#main_menu").show();
    }
    
    graph()
    {
        
    }
    
    stats()
    {
        
    }
    
    close_main()
    {
        
    }
    
};



operation.main();

$("#home").on('click',()=>operation.main());
$(document).ready(function(){

    $('#btn-search,#close_search').on('click',function(event){
        event.preventDefault();
        $('.form_block_searc').toggleClass('hide');
    });
    
    $("input[name='snils']").mask('999-999-999 99');
    $("input[name='insurance_number']").mask('9999999999999999');
    $("input[name='date']").mask('99.99.9999');


    $('#btn_wood_menu').on('click',function(event){
        event.preventDefault();
        $('.left_menu').toggleClass('hide');
    });

    $('#left_menu_list .fa-chevron-down, #left_menu_list .fa-chevron-up').on('click',function(event){
        event.preventDefault();
        if($(this).attr('style')=='transform:rotate(180deg)' ){
            $(this).attr('style','');    
        }else{
            $(this).attr('style','transform:rotate(180deg)');
        }
        $(this).parent().next('.submenu').slideToggle(200);
    });
    var myVar = setInterval(function() {
        myTimer();
      }, 1000);
      
      

      function myTimer() {
        let date = new Date();
        
        let hours = date.getHours();
        let minut = date.getMinutes();
       
        if(date.getMinutes()<10){
            minut='0'+minut;
        }
        let arr_icon_time=[
            'fa-battery-full',
            'fa-battery-three-quarters',
            'fa-battery-half',
            'fa-battery-quarter',
            'fa-battery-empt',
            'fa-moon-o',
        ];
        let result = '';
       switch (hours) {
            case hours < 8:
                result=arr_icon_time[0];
                break;
            case hours < 10:
                result=arr_icon_time[1];
                break;
            case hours < 12:
                result=arr_icon_time[2];
                break;
            case hours < 16:
                result=arr_icon_time[3];
                break;
            case hours < 18:
                result=arr_icon_time[4];
            break;  
            default:
                result=arr_icon_time[5];
                break; 
       }                                                                                                   
result='<i class="fa '+result+'">'+hours+':'+minut;
        document.getElementById("clock").innerHTML = result;
      }
});

// Фиксирую пропорции картинок при изменении размеров окна

$(window).resize(function(){

    let imgHeight =  $(".img").css("width")
    $(".img").css("height", imgHeight) 
})


// Фиксирую пропорции картинок

let imgHeight =  $(".img").css("width")
$(".img").css("height", imgHeight) 


// Получение и вывод даты

let dt = new Date();
let  time = dt.getDay() + "." + dt.getMonth() + "." +  dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes();
    
$(".date").text(time)


// Подсчет картинок

let img = $("[display = true]")
let countText = "Картинок сейчас: " + img.length
$(".count").text(countText)

// Удаление картинок
$(".img .delete").on('click', function(){
    $(this).parents(".img").attr('data-display', 'f')
     localStorage.setItem($(this).parents(".img").attr('class'), 'noDisplay');
})
$(document).ready(function(){
    let noDisplay = $('.img')
    $.each(noDisplay, (index, element) => {

        if (localStorage.getItem($(element).attr('class')) == 'noDisplay'){
            console.log("true")
            $(element).attr('data-display', 'f')
        }
    });
})


// Кнопка Восстановить
$('.update').on("click", function(){
    localStorage.clear()
    $('.img').removeAttr('data-display')
})







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

let countImages = function(){
    let img = $(".img").length
    let notDisplay = $("[data-display = 'f']").length
    console.log(notDisplay)
    console.log(img)
    if(notDisplay == false){
        notDisplay = 0
    }
    amountImg = img - notDisplay

let countText = "Картинок сейчас: " + amountImg
$(".count").text(countText)
}
countImages()

// Удаление картинок
$(".img .delete").on('click', function(){
    $(this).parents(".img").attr('data-display', 'f')
     localStorage.setItem($(this).parents(".img").attr('class'), 'noDisplay');
     countImages()
})
$(document).ready(function(){
    let noDisplay = $('.img')
    $.each(noDisplay, (index, element) => {

        if (localStorage.getItem($(element).attr('class')) == 'noDisplay'){
            console.log("true")
            $(element).attr('data-display', 'f')
        }
    });
    countImages()
})


// Кнопка Восстановить
$('.update').on("click", function(){
    localStorage.clear()
    $('.img').removeAttr('data-display')
    countImages()
})




// Попап картинки
$(".imaage").on("click", function(){
    let image =  $(this).css("background-image")
    image = image.replace('url(','').replace(')','').replace(/\"/gi, "");
    $(".popUp img").attr('src',  image)
    $(".filter").css("display", "block")
    $(".popUp").css("display", "block")
    $(".close").on("click", function(){
        $(".filter").css("display", "none")
        $(".popUp").css("display", "none")
    })
})


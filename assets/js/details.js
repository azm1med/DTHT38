function details__desc() {
    var desc = document.getElementById('details__desc');
    var btn = document.getElementById('details__desc-btn');
    var check = document.getElementById('details__desc-check');
    btn.onclick = function() {
        if (check.checked == 0) {
            desc.style.cssText = '-webkit-line-clamp: unset;';
            btn.innerHTML = 'Ẩn bớt nội dung <i class="fal fa-chevron-up"></i>';
        } else {
            desc.style.cssText = '-webkit-line-clamp: 4;';
            btn.innerHTML = 'Hiển thị nội dung <i class="fal fa-chevron-down"></i>';
        }
    }
}
details__desc();

// slider 
var slideIndex = 1;
    relics__show(slideIndex);

function relics__plus(n) {
    relics__show(slideIndex += n);
}

function relics__current(n) {
    relics__show(slideIndex = n); 
}

function relics__show(n) {
    var i;
    var slides = document.getElementsByClassName("details__relics-lib-view-img");
    var dots = document.getElementsByClassName("details__relics-lib-item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


// pagination 
var items = $(".details__relics-media .details__relics-media-item");
var numItems = items.length;
var perPage = 5;

items.slice(perPage).hide();

$('#relics__control').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "<i class='fal fa-chevron-left'></i>",
    nextText: "<i class='fal fa-chevron-right'></i>",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
        $('#relics__today').html(pageNumber);
    }
});
$('#relics__page').html( $('#relics__control').pagination('getPagesCount'));
$('#relics__today').html( $('#relics__control').pagination('getCurrentPage'));

// fast menu  
function fast(e) {
    var list = document.getElementsByClassName('details__fast-item-link');
    var id = e.id;
    var id__get = document.getElementById(id);
    var split = id.split('__');
    var desc = split[1] + "__"+ split[2];

    function reset(){
        for (var i = 0; i < list.length; i++) {
            list[i].classList.remove('active');               
        }
    }

    if (!id__get.classList.contains('active')) {
        reset();
        id__get.classList.add('active');
        // $('#root__content').animate({ scrollTop: $('#fast__relics__document').offset().top -110  }, 1000,
        // function(){
        //     console.log(`#${desc}`);
        // });
    } 
    // else {
    //     console.log('auto');
    // }
    // $("#"+id).scrollView();


    // $(document).ready(function(){
    //     console.log('oke')
    //     $('#root__content').animate({
    //         scrollTop: $("#"+desc).offset().top
    //     }, 1000);
    //     return false;
    // })
}
// function fastsroll(e) {
//     var id = e.id;
//     var jid = `'#${id}'`;
//     console.log(jid)
//     var split = id.split('__');
//     var desc = split[1] + "__"+ split[2];
//     console.log(desc)

//     $(document).ready(function(){
//         $("#"+id).click(function(){
//             console.log('okeok')
//             $('#root__content').animate({
//                 scrollTop: $("#"+desc).offset().top
//             }, 1000);

//             return false;
//         });
//     })
// }
// fast menu  
// $(document).ready(function(){
//     $("#fast__relics__content").click(function(){
//         $('#root__content').animate({
//             scrollTop: $('#relics__content').offset().top - 120
//         }, 1000);

//         return false;
//     });
// })

// $(document).ready(function() {
//     $("a[href*='#']:not([href='#])").click(function() {
//       let target = $(this).attr("href");
//       $('html,body').stop().animate({
//         scrollTop: $(target).offset().top
//       }, 1000);
//       event.preventDefault();
//     });
//   });

// $(document).ready(function () {
//     $('#fast__relics__intro').click(function() {
//         $('#root__content').animate({
//             scrollTop: $("#relics__intro").offset().top
//         }, 1000)
//     }), 
//     $('div.middle').click(function (){
//         $('html, body').animate({
//             scrollTop: $("div.bottom").offset().top
//         }, 1000)
//     }),
//     $('div.bottom').click(function (){
//         $('html, body').animate({
//             scrollTop: $("div.top").offset(100).top
//         }, 1000)
//     })
//   });
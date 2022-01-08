function details__desc() {
    var desc = document.getElementById('details__desc');
    var btn = document.getElementById('details__desc-btn');
    var check = document.getElementById('details__desc-check');
    console.log(check)
    btn.onclick = function() {
        if (check.checked == 0) {
            desc.style.cssText = '-webkit-line-clamp: unset;';
            btn.innerHTML = 'Ẩn bớt nội dung';
        } else {
            desc.style.cssText = '-webkit-line-clamp: 4;';
            btn.innerHTML = 'Hiển thị nội dung';
        }
    }
}
details__desc();


var slideIndex = 1;
    relics__show(slideIndex);

function relics__plus(n) {
    relics__show(slideIndex += n);
}

function relics__current(n) {
    relics__show(slideIndex = n);
    // window.setInterval(function() {
    //     relics__show(slideIndex = n + 1);
    // }, 5000); 
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
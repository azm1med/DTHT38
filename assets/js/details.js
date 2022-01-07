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
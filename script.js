function toggleNav() {
    let state = document.getElementsByClassName(".nav")[0].style.display;
    if (state == 'block') {
        document.getElementsByClassName(".nav")[0].style.display = 'none';
    } else {
        document.getElementsByClassName(".nav")[0].style.display = 'block';
    }
}
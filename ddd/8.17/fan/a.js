function turn() {
    var front_img = document.getElementById("front_img");
    var back_img = document.getElementById("back_img");

    front_img.classList.add("turn_front");
    back_img.classList.add("turn_back");

    setTimeout(function() {
    front_img.classList.remove("turn_front");
    back_img.classList.remove("turn_back");
    },6000);
}

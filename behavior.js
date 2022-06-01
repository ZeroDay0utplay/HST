var me = document.getElementById("med");

me.addEventListener("click", (event) => {
    var classL = me.classList;
    var is_small_there = false;
    for (var i=0; i<classL.length; i++){
        if (classL[i] === "small") is_small_there = true;
    }
    if (is_small_there) classL.remove("small");
    else classL.add("small");
});
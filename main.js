var ids = {
    c1: document.getElementById("c1"),
    c2: document.getElementById("c2"),
    c3: document.getElementById("c3")
}

function goto(val) {
    for (let id in ids) {
        if (id == val) {
            ids[id].classList.remove("hide");
        } else {
            ids[id].classList.add("hide");
        }
    }
}
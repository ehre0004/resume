function goto(val) {
    let contentList = document.getElementById('content-container').children;
    for (let i = 0; i < contentList.length; i++) {
        let current = contentList[i];
        let goToVal = "c"+val;
        if (current.id == goToVal) {
            current.classList.remove("hide");
        } else {
            current.classList.add("hide");
        }
    }
}

function getAll() {
    let contentList = document.getElementById('content-container').children;
    for (let i = 0; i < contentList.length; i++) {
        if (contentList[i].classList.contains("hide")){
            console.log(contentList[i].classList);
            contentList[i].classList.remove("hide");
        }
        
    }
}
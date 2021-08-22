'use strict'

$(document).ready(function () {
    $.getJSON("data-set.json", function (json) {

        console.log("hihi")
        for (let index = 0; index < json.length; index++) {
            let a = `
                <div class="card question-s" style="width: 15rem;">
                <img class="card-img-top" src="https://via.placeholder.com/50x20" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">`+json[index].questionSet+` - `+json[index].time+` phút</h5>
                <p class="card-text">`+json[index].description+`</p>
                <a href="#" class="btn btn-primary" style="width: 50%;">Enter</a><button class="btn btn-danger nut-xoa">Xóa</button>
                </div>
            </div>`
            let end = document.createElement("div")
                end.innerHTML = a
                document.querySelector(".row.adding").appendChild(end)
        }
    })
})
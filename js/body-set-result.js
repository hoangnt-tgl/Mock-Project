'use strict';


$(document).ready(function () {
    $.getJSON("data-set-result.json", function (json) {
        let mark = 0;
        for (let index = 0; index < json.length; index++) {
            if (json[index].type === 'radio') {
                let p = `
            <div class="border">
            <div class="question bg-white p-3 border-bottom">
                <div class="d-flex flex-row justify-content-between align-items-center mcq">
                    <h4 id="question-set-name">`+ json[index].questionSet + `</h4><span id="current-question-number">(` + json[index].id + ` of ` + json[index].numberOfQuestion + `)</span>
                </div>
            </div>
            <div class="question bg-white p-3 border-bottom">
                <!-- QUESTION MULTIPLE CHOICE-->
                <div class="d-flex flex-row align-items-center question-title">
                    <h3 class="text-danger">Q.</h3>
                    <h5 id="1" class="mt-1 ml-2 question-name">`+ json[index].question + `</h5>
                </div>
                <!-- END QUESTION -->
                <!-- ANSWER -->
                <div class="ans ml-2">
                    <label class="radio"> <input type="radio" name="brazil" value="brazil"> 
                        <span>`+ json[index].radio1 + `</span>
                    </label>
                </div>
                <div class="ans ml-2">
                    <label class="radio"> <input type="radio" name="Germany" value="Germany">
                        <span>`+ json[index].radio2 + `</span>
                    </label>
                </div>
                <div class="ans ml-2">
                    <label class="radio"> <input type="radio" name="Indonesia" value="Indonesia">
                        <span>`+ json[index].radio3 + `</span>
                    </label>
                </div>
                <div class="ans ml-2">
                    <label class="radio"> <input type="radio" name="Russia" value="Russia"> <span>`+ json[index].radio4 + `</span>
                    </label>
                </div>
                <hr>
                <div class="ans ml-2">
                    ĐÁP ÁN: <p class="dap-an" style="display: inline;">`+ json[index].result + ' - ĐIỂM: ' +json[index].mark +`</p>
                </div>

                <!-- END ANWSER -->
            </div>

        </div>
        <hr>   
    `

                let end = document.createElement("div")
                end.innerHTML = p
                document.querySelector(".col-md-8.col-lg-8").appendChild(end)
            }
            else {


                let sectionA = "<div class='border'> <div class='question bg-white p-3 border-bottom'> <div class='d-flex flex-row justify-content-between align-items-center mcq'> <h4 id='question-set-name'>"
                let nameSet = json[index].questionSet
                let sectionB = "</h4><span id='current-question-number'>( "
                let numberOfQuestion = json[index].id + ' of '
                let numberTotalQuestion = json[index].numberOfQuestion +  ' )'
                let sectionC = "</span></div></div><div class='question bg-white p-3 border-bottom'><div class='d-flex flex-row align-items-center question-title'><h3 class='text-danger'>Q.</h3><h5 id='"+json[index].id +"' class='mt-1 ml-2 question-name'>"
                let question = json[index].question
                let sectionD = ` </h5>
                            </div>
                            <HR>
                            <div class="ans ml-2">
                            ĐÁP ÁN:  <p class="dap-an" style="display: inline;">B</p>`
                let answer = json[index].result + ' - ĐIỂM: ' +json[index].mark
                let sectionE = `
                                </div>
                                </div>

                                </div>`
                //<h5 class='cau-tra-loi'style='display:inline'>
                //</h5>

                let all= sectionA + nameSet + sectionB + numberOfQuestion + numberTotalQuestion+ sectionC+question + sectionD + answer + sectionE +'<hr>'
                let end = document.createElement("div")
                end.innerHTML = all
                document.querySelector(".col-md-8.col-lg-8").appendChild(end)
            }

            
            let k = `
                <form class="question-choice">
                <button class="question-button" type="button"> `+json[index].id+` </button>
            </form>
            `
            let ends = document.createElement("div")
            ends.setAttribute("style","display:inline;")
            ends.innerHTML = k
            document.querySelector('.display-question-button').appendChild(ends)
        
            
            mark +=  parseInt(json[0].mark);
            console.log(mark)
        }

        let endss = document.createElement("div")
        endss.setAttribute("style","display:inline;")
        endss.innerHTML = 'TỔNG ĐIỂM: '+ "<div class='btn btn-primary'>" +mark + '</div>'
        document.querySelector('.your-mark').appendChild(endss)


        // animation cho cau hoi
        let a = document.querySelectorAll(".edit-true");
        let b = document.querySelectorAll(".erase-true");
        let c = document.querySelectorAll(".set-true");
        let questionName = document.querySelectorAll(".question-name");

        for (let index = 0; index < a.length; index++) {
            a[index].addEventListener("click", function () {
                a[index].style.display = "none";
                questionName[index].innerHTML = "<textarea cols='35' rows='3'> Which of the following country has largest population? </textarea>"
                //console.log(a[index].innerHTML)
                b[index].style.display = "inline";
                c[index].style.display = "inline";
            })
            b[index].addEventListener("click", function () {
                a[index].style.display = "inline";
                b[index].style.display = "none";
                c[index].style.display = "none";
            })
            c[index].addEventListener("click", function () {
                a[index].style.display = "inline";
                b[index].style.display = "none";
                c[index].style.display = "none";
                questionName[index].innerHTML = "Which of the following country has largest population?"
            })
        }


        //animation cho cau tra loi
        let e = document.querySelectorAll(".edit-true-ans");
        let d = document.querySelectorAll(".erase-true-ans");
        let f = document.querySelectorAll(".set-true-ans");
        let ans = document.querySelectorAll(".radio");
        //console.log(ans[1].innerHTML);
        for (let index = 0; index < e.length; index++) {
            e[index].addEventListener("click", function () {
                e[index].style.display = "none";
                ans[index].innerHTML = "<textarea cols='30' rows='1'>Brazil</textarea>"
                d[index].style.display = "inline";
                f[index].style.display = "inline";
            })
            d[index].addEventListener("click", function () {
                e[index].style.display = "inline";
                d[index].style.display = "none";
                f[index].style.display = "none";
            })
            f[index].addEventListener("click", function () {
                e[index].style.display = "inline";
                d[index].style.display = "none";
                f[index].style.display = "none";
                ans[index].innerHTML = " <label class='radio'> <input type='radio' name='brazil' value='brazil'> <span>Brazil</span>  </label>"
            })
        }



        let q = document.querySelectorAll(".edit-true-ans-truth");
        let w = document.querySelectorAll(".erase-true-ans-truth");
        let t = document.querySelectorAll(".set-true-ans-truth");
        let anst = document.querySelectorAll(".dap-an");
        //console.log(anst[0].textContent)
        for (let index = 0; index < q.length; index++) {
            q[index].addEventListener("click", function () {
                q[index].style.display = "none";
                w[index].style.display = "inline";
                t[index].style.display = "inline";
                anst[index].innerHTML = "<textarea  cols='25' rows='1'>B</textarea>"
            })
            w[index].addEventListener("click", function () {
                q[index].style.display = "inline";
                w[index].style.display = "none";
                t[index].style.display = "none";
            })
            t[index].addEventListener("click", function () {
                q[index].style.display = "inline";
                w[index].style.display = "none";
                t[index].style.display = "none";
                anst[index].textContent = "B"
            })
        }

        //animation cho cau 1 - cau n




        let ids = document.querySelectorAll(".question-button")
    //console.log(ids);
    for (let index = 0; index < ids.length; index++) {
        ids[index].addEventListener('click', function () {
            let s = (index + 1).toString();
            scrolltoId(s);
        })
    }
    function scrolltoId(id) {
        document.getElementById(id).scrollIntoView();
    }


    });
    // Your code here.



    document.querySelector("#edit-time-remaining").addEventListener('click', function () {
        document.querySelector("#set-time-remaining").style.display = "inline";
        document.querySelector("#edit-time-remaining").style.display = "none";
        document.querySelector("#startTime").removeAttribute("readonly");
    })

    document.querySelector("#set-time-remaining").addEventListener('click', function () {
        document.querySelector("#set-time-remaining").style.display = "none";
        document.querySelector("#edit-time-remaining").style.display = "inline";
        document.querySelector("#startTime").setAttribute("readonly", true)
    })




    


    //console.log(document.querySelector('.col-md-8.col-lg-8').innerHTML)


    

    document.querySelector('.open-add').addEventListener('click', function () {
        document.querySelector('.them-dap-an').style.display = "block"
        document.querySelector('.nut-them').style.display = "block"
        //console.log("haha")
    })
    document.querySelector('.finish-config').addEventListener('click', function () {
        document.querySelector('.them-dap-an').style.display = "none"
        document.querySelector('.nut-them').style.display = "none"
    })

    document.querySelector('.nut-them').addEventListener('click', function(){
        console.log("hihi")
        let a = document.createElement("input")
        a.setAttribute("type", "text")
        a.setAttribute("placeholder", "Đáp án")
        a.setAttribute("style", "width:100%")
        console.log(a)
        let b = document.querySelector(".them-dap-an")
        console.log(b)
        b.appendChild(a)
    })





});
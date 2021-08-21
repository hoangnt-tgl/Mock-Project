$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  var modal = document.getElementById("nameModal");
  var Qmodal = document.getElementById("questionModal");
  var question=document.getElementById("question");
  var answer=document.getElementById("answer");
  var viewQuizModal=document.getElementById("viewQuizModal");
  var analyzModal=document.getElementById("analyzModal");

  // Control Create quiz
  var createBtn = document.getElementById("create");
  var nextBtn1 = document.getElementById("nextBtn1");
  var nextBtn2 = document.getElementById("nextBtn2");

  // Control view data analyz

  var analyzBtn = document.getElementById("analyzBtn");
  
  // Control view quiz

  var viewBtn = document.getElementById("quizImg");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  createBtn.onclick = function() {
    modal.style.display = "block";
  }

  nextBtn1.onclick = function() {
    Qmodal.style.display = "block";
  }

  nextBtn2.onclick = function() {
    question.value = "";
    answer.value = "";

  }

  viewBtn.onclick = function() {
    viewQuizModal.style.display ="block";

  }

  analyzBtn.onclick = function() {
    analyzModal.style.display ="block";

  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal || event.target == Qmodal ||event.target == viewQuizModal ||event.target == analyzModal) {
      modal.style.display = "none";
      Qmodal.style.display = "none";
      viewQuizModal.style.display = "none";
      analyzModal.style.display ="none";
    }
  }


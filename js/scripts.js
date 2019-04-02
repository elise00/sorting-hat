// Business logic for Student Constructor

function Student(name) {
  this.name = name;
  this.answers = [];
  this.houseNum = 0;
  this.house = '';
}

Student.prototype.answerCount = function() {
  var answerCount = 0;
  this.answers.forEach(function(answer){
    answersCount += parseInt(answer);
  })
  this.houseNum = Math.round(answerCount);
}

Student.prototype.chooseHouse = function() {
  if (this.houseNum === 1) {
    this.house = 'Gryffindor';
  } else if (this.houseNum === 2) {
    this.house = 'Slytherin';
  } else if (this.houseNum === 3) {
    this.house = 'Hufflepuff';
  } else if (this.houseNum === 4) {
    this.house = 'Ravenclaw';
  }
}



// UI logic

$(document).ready(function(){
  $('.allHousesDivClass').hide;


  $('form#formId').submit(function(event){

    var studentName = $('input#nameInput').val();




    var newStudent = new Student(studentName);
    $("#hatform input[type=radio]:checked").each(function() {
       newStudent.answers.push($(this).val());
   });

    $('#housediv').show();
  });

  $('#refreshButton').click(function(event){

    $('.classname').prop('checked', false);
    


  });




});

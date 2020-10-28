$(document).ready(function () {
  $("form#leap_year").submit(function (event) {
    event.preventDefault();
    let chosenYear = parseInt($("#year").val());
    let answer;
    if ((chosenYear % 4 === 0) && (chosenYear % 100 !== 0) || (chosenYear % 400 === 0)) {
      answer = `Yes, ${chosenYear} is a Leap Year`;
    } else {
      answer = `No, ${chosenYear} is not a Leap Year`;
    }
    $("#answer").text(answer);
    $("#output").show();
  })
})
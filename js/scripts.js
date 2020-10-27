$(document).ready(function () {
  $("form#leap_year").submit(function (event) {
    event.preventDefault();
    let chosenYear = parseInt($("#year").val());
    if ((chosenYear % 4 === 0) && (chosenYear % 100 !== 0) || (chosenYear % 400 === 0)) {
      return true;
    } else {
      return false;
    }
    $("#answer").text(answer);
    $("#output").show();
  })
})
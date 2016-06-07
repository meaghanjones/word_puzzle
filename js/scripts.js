$(document).ready(function() {
  $("button").click(function() {
    var textString = $("textarea").val();
    var finalString = "";
    for (var counter = 0; counter < textString.length; counter +=1) {
      if (textString[counter] === "a" ||
       textString[counter] === "e" ||
       textString[counter] === "i" ||
       textString[counter] === "o" ||
       textString[counter] === "u" ) {
       finalString += "-";
     } else {
       finalString += textString[counter];
     };
     $(".input-group").hide();
     $(".output").text(finalString);
    };
  });
});

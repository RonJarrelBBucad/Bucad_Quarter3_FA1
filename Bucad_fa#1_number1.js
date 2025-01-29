<!DOCTYPE html>
<html>
<head>

</head>
<body onload="showAlert()">
  <script>
    function showAlert() {
      var Name = prompt("Enter the name: ");
      var Height = prompt("Enter the height (inches): ");
      var Weight = prompt("Enter the weight (kg): ");

      alert("Name: " + Name + "\nHeight (inches): " + Height + "\nWeight (kg): " + Weight);
    }
  </script>
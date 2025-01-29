

<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div id="greeting"></div> 
  
  <script>
    function calculateAge(birthYear) {
      var currentYear = 2025;
      return currentYear - birthYear;
    }

    var Name = prompt("Enter the name: ");
    var Lastname = prompt("Enter the lastname: ");
    var Birthyear = prompt("Enter the birthyear: ");
    
    var Age = calculateAge(Birthyear);

    document.getElementById("greeting").innerText = "Hello " + Name + " " + Lastname + "! " + "How does it feel to be " + Age + " years old?";
  </script>
</body>
<!DOCTYPE html>
<html>
<head>
  <title>Personal Information Confirmation</title>
</head>
<body>
  <script>
    function calculateAge(birthYear) {
      var currentYear = 2025;
      return currentYear - birthYear;
    }

    var userConsent = confirm("Do you agree to share your personal information with our site?");

    if (userConsent) {
      var Name = prompt("Enter the name: ");
      var Lastname = prompt("Enter the lastname: ");
      var Birthyear = prompt("Enter the birthyear: ");
      var Age = calculateAge(Birthyear);

      console.log("Name: " + Name + " " + Lastname);
      console.log("Age: " + Age + " years old");
    }
     else 
    {
      console.log("User does not wish to share his/her information.");
    }
  </script>
</body>
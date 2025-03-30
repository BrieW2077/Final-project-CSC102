function strings(){
     // Gets the value entered in the input field with id "firstString"
    var string1 = document.getElementById("firstString").value;
    
    // Splits the input string into separate characters
    var splitStr = string1.split("");

    // Reverse the inputed characters
    var reverseStr = splitStr.reverse();

    // Checking to see if the string is same forwards and backwards
    var joinStr = reverseStr.join("");


    if (string1 == joinStr)
    // If it's a Palindrome
    {
        document.getElementById("updates").innerHTML = "It's a Palindrome";
    }
    else
    // If it's not a Palindrome
    {
        document.getElementById("updates").innerHTML = "Not a Palindrome";
    }
}

function checkCreds(){
     // Get the values entered by the user for first name, last name, badge number, and password
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + "" + lastName; // Combine first name and last name into a full name string
    var badgeNum = document.getElementById("badgeID").value;
    var passW = document.getElementById("PW").value;

    if (fullName.length > 20) // Check if the combined full name length is greater than 30 characters
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Name Length"; // Display message in case of invalid full name length
    }
    
    // Check if first name length is valid
    else if (firstName.length == 0)
    {
        document.getElementById("loginStatus").innerHTML = "Enter First Name"; // Display message for invalid First Name length
    }
    
     // Check if last name length is valid
    else if (lastName.length == 0)
        {
            document.getElementById("loginStatus").innerHTML = "Enter Last Name"; // Display message for invalid Last Name length
        }
    
        // Check if the badge number is NOT exactly 5 characters long
    if (badgeNum.length !== 5)
        {
            document.getElementById("loginStatus").innerHTML = "Invalid Badge Number"; return;  // Display an error message if the badge number is invalid
        }
    
    
    // Check if the password entered does not match "UATRocks" (invalid if true)
    else if (passW !="UATRocks")
    {
        document.getElementById("loginStatus").innerHTML = "Invalid password"; // Display message for incorrect password
    }
    
    // If all checks are passed, display "Accepted!" and redirect the user to "strings.html"
    else
    {
        document.getElementById("loginStatus").innerHTML = "Accepted!";
        location.replace("strings.html") // Redirect to another page
    }
    
}
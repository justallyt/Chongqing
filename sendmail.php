<?php

 if($_SERVER['REQUEST_METHOD'] === "POST"){
    $emailTo = "albertjunk2030@gmail.com";
    $subject = "NEW ENROLLMENT MESSAGE FROM EXPOCCPIT WEBSITE";
   
    $name = trim($_POST['fullname']);
    $email = trim($_POST['client_email']);
    $phone = trim($_POST['client_phone']);
    $company = trim($_POST['company']);
    $message = trim($_POST['message']);
    $token = $_POST['captcha'];
    
    $secret = "google secret key here";
    
    $json = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=". $secret . "&response=" . $token), true);
   
    $header = "Email: ".$email;
   
    $body = "Name: ".$name. "\nEmail: ".
             $email."\nPhone Number: ".
             $phone. "\nCompany: ".
             $company. "\n\n".
             $message;
    
    if($json['success']){
        $emailSend = mail($emailTo, $subject, $body, $header);
        
        if($emailSend){
            echo "Your details have been registered for the CCPIT Expo. Thanks";
        }
        else{
            echo "Error sending message";
            error_reporting(-1);
        }
    }else{
        echo "Sorry. Invalid token";
    }
    


 }
?>
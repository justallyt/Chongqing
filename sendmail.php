<?php

 if($_SERVER['REQUEST_METHOD'] === "POST"){
    $emailTo = "albertjunk2030@gmail.com";
    $subject = "NEW ENROLLMENT MESSAGE FROM EXPOCCPIT WEBSITE";
   
    $name = trim($_POST['fullname']);
    $email = trim($_POST['client_email']);
    $phone = trim($_POST['client_phone']);
    $company = trim($_POST['company']);
    $message = trim($_POST['message']);
   
    $header = "Email: ".$email;
   
    $body = "Name: ".$name. "\nEmail: ".
             $email."\nPhone Number: ".
             $phone. "\nCompany: ".
             $company. "\n\n".
             $message;
    
    $emailSend = mail($emailTo, $subject, $body, $header);
    
    
   if($emailSend){
       echo "Message Sent Successfully";
   }
   else{
       echo "Error sending message";
       error_reporting(-1);
   }

 }
?>
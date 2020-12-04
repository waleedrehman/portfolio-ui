<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
$to      = "waleedrehman@yahoo.co.uk";
$subject = $_GET["subject"];;
$from = "admin@waleedrehman.co.uk";
$name = $_GET["name"];
$email = $_GET["email"];
$msg = $_GET["message"];
$message = "Message from ".$name." (".$email."):\n".
    $msg;
$headers = 'From: '.$from. "\r\n" .
    'Reply-To: '.$from. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
echo 'success';
?>
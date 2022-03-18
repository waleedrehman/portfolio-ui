<?php
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$name = $_GET['name'];
$email = $_GET['email'];
$subject1 = $_GET['subject'];
$message1 = $_GET['message'];

$from = 'no-reply@waleedrehman.co.uk';
$to = 'hello@waleedrehman.co.uk';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
	
$subject = 'Contact Form - Waleedrehman.co.uk';
// Compose a simple HTML email message
$message = '<html><body>';
$message .= '<h1>Contact form submitted from waleedrehman.co.uk</h1>';
$message .= '<h2>Name :</h2><h3>' .$name .'</h3>';
$message .= '<h2>Email Address :</h2><h3>' .$email .'</h3>';
$message .= '<h2>Subject :</h2><h3>' .$subject1 .'</h3>';
$message .= '<h2>Message :</h2><h3>' .$message1 .'</h3>';
$message .= '</body></html>';

if (mail($to, $subject, $message, $headers))
{
	echo '<script>
alert("Your Email has been sent. \nWe will be in touch soon.");
//window.location = "https://www.waleedrehman.co.uk"
</script>' .$message;
}
else {
	echo '<script>
alert("Something went wrong while sending email.");
</script>';
}

?>

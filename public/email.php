<?php
$visitorName = $_POST['contactName'];
$visitorEmailAddress = $_POST['contactEmail'];
$to      = 'admin@waleedrehman.ml';
$subject = $_POST['contactSubject'];
$message = "Name: ".$visitorName."\n".
			"Email Address: ".$visitorEmailAddress."\n".
			"Message: ".$_POST['contactMessage'];
$headers = 'From: '.$visitorEmailAddress. "\r\n" .
    'Reply-To: '.$visitorEmailAddress. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
echo '<script>
alert("Your Email has been sent. \nWe will be in touch soon.");
   window.location = "https://www.waleedrehman.ml"
</script>';

?>
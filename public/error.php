<?php

$error_msg = array();
  if (isset($_GET['q']) && is_numeric($_GET['q'])) {
    $status = array(
	  400 => array('<h1>400 - Bad Request</h1>', '<img width="300px" height="300" src="http://php.ledhubuk.com/Images/400.png"><img width="30" height="30" src="http://php.ledhubuk.com/Images/sad.png"><br>The request cannot be fulfilled due to bad syntax.'),
      401 => array('<h1>401 - Login Error</h1>', '<img width="300px" height="300" src="http://php.ledhubuk.com/Images/401.png"><img width="30" height="30" src="http://php.ledhubuk.com/Images/sad.png"><br>It appears that the password and/or user-name you entered was incorrect.'),
      403 => array('<h1>403 - Forbidden</h1>', '<img width="300px" height="300" src="http://php.ledhubuk.com/Images/403.png"><img width="30" height="30" src="http://php.ledhubuk.com/Images/sad.png"><br>Sorry, employees and staff only.'),
      404 => array('<h1>404 - Missing</h1>', '<img width="300px" height="300" src="http://php.ledhubuk.com/Images/404.png"><img width="30" height="30" src="http://php.ledhubuk.com/Images/sad.png"><br>We\'re sorry, but the page you\'re looking for is missing, hiding, or maybe it moved somewhere else and forgot to tell you.'),
      405 => array('<h1>405 - Method Not Allowed</h1>', 'The method specified in the Request-Line is not allowed for the specified resource.'),
      408 => array('<h1>408 - Request Timeout</h1>', 'Your browser failed to send a request in the time allowed by the server.'),
      414 => array('<h1>414 - URL To Long</h1>', 'The URL you entered is longer than the maximum length.'),
      500 => array('<h1>500 - Internal Server Error</h1>', '<img width="300px" height="300" src="http://php.ledhubuk.com/Images/500.png"><img width="30" height="30" src="http://php.ledhubuk.com/Images/sad.png"><br>The request was unsuccessful due to an unexpected condition encountered by the server.'),
      502 => array('<h1>502 - Bad Gateway</h1>', 'The server received an invalid response from the upstream server while trying to fulfill the request.'),
      504 => array('<h1>504 - Gateway Timeout</h1>', 'The upstream server failed to send a request in the time allowed by the server.'),
    );
    $error_msg = $status[$_GET['q']];
  }
  
  if (!empty($error_msg)) {
    foreach ($error_msg as $err) {
      echo $err . '<br>';
    }
  }
  else {
    echo 'Something went wrong.';
  }
?>
<!doctype html>
<html>
<head>
<title><?php echo($errortitle);?></title>
  <link rel="stylesheet" type="text/css" href="http://php.ledhubuk.com/Styles/Stylesheet.css" />
  <link rel="icon" href="Images/php.png" type="image/x-icon"/>
  <link rel="shortcut icon" href="Images/php.png" type="image/x-icon"/>
<meta charset="utf-8">
</head>
<body>

<!-- Insert headers here. -->

<?php
echo('<h3>'.$errortitle.'</h3>');
echo('<p>'.$message.'</p>');
?>

<!-- Insert footers here. -->
<a href="https://www.waleedrehman.ml">Back to home page</a>
<p>All rights reserved - 4Web Solutions &copy; 2016</p>
<p>Designed and Developed by <a target="_blank" href="http://www.about.me/waleedrehman">Waleed Rehman</a></p>

</body>
</html>
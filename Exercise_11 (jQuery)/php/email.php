<?php

// if (empty($_POST['email'])) {
//   echo "Please enter a valid email!\n";
// }

// $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

// if (isset($_POST['name'])) {
//   $name = $_POST['name'];
// }

// print_r($name);


$t = "arian@xhezairi.com";
$s = "O laj kryje mo se na thine.";
$m = "Phaa metem pa ushtru o burre.";

$bool = mail($t, $s, $m);

if ($bool) {
  echo "Message sent!";
}

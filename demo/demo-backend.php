<?php
/**
 * Author: g.wojak@aginternet.pl
 * Date: 08.01.21
 * Time: 09:18
 */

$hash = 'k5G0cx321dfk'; // default hash from source code of captcha.js
$stringA = md5($_POST['captcha-text-from-user'] . $hash); // user entered text
$stringB = $_POST['agi-captcha-hidden']; // string encrypted by captcha.js

if ($stringA === $stringB && strlen($_POST['captcha-text-from-user'])>1) {
  $result = true;
}
else {
  $result = false;
}

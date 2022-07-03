<?php
$name = $_POST['name'];
$email = $_POST['name'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $email . "\r\n";
$header = "X-Mailer : PHP/" . phpversion() . "\r\n";
$header = "Mine-Version: 1.0 \r\n";
$header = "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $name . "\r\n";
$mensaje .= "Su e-mail es : " . $email . "\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el: " . date('d/m/Y', time());

$para = 'pablomoya211@gmail.com';
$asunto = 'Mensaje portafolio =)';

mail($para, $asunto, utf8_decode($mensaje), $header);
header("Location:index.html");
?>
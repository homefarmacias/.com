<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    
    $to = "homefarmacias@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $subject = "Nuevo mensaje de contacto desde Hope Farmacia";
    $message = "Nombre: $name\n";
    $message .= "Email: $email\n";
    $message .= "Teléfono: $phone\n";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>

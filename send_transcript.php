<?php
// Get chat transcript from POST request
$transcript = $_POST['transcript'];

// Support email address
$supportEmail = 'amandanwadukwe@gmail.com';

// Email subject
$subject = 'Chat Transcript';

// Email headers
$headers = "From: amandanwadukwe@gmail.com\r\n";
$headers .= "Reply-To: amandanwadukwe@gmail.com\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Send email
mail($supportEmail, $subject, $transcript, $headers);

// Return success response
echo "Transcript sent successfully";
?>

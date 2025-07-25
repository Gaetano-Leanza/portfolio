<?php

switch ($_SERVER['REQUEST_METHOD']) {
  case "OPTIONS":
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    exit;

  case "POST":
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: text/plain");

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (!$params || !isset($params->email, $params->name, $params->message)) {
      http_response_code(400);
      echo "Ungültige Anfrage.";
      exit;
    }

    $email = $params->email;
    $name = $params->name;
    $message = $params->message;

    $recipient = 'gaetano1981@live.de';
    $subject = "Kontaktformular von <$email>";
    $mailBody = "Von: " . htmlspecialchars($name) . "<br><br>" . nl2br(htmlspecialchars($message));

    $headers = [
      'MIME-Version: 1.0',
      'Content-type: text/html; charset=utf-8',
      'From: noreply@gaetano-leanza.de'
    ];

    $success = mail($recipient, $subject, $mailBody, implode("\r\n", $headers));

    if ($success) {
      echo "OK";
    } else {
      http_response_code(500);
      echo "Fehler beim Senden.";
    }
    break;

  default:
    header("Allow: POST", true, 405);
    exit;
}

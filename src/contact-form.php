<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $message = $_POST['message'];

  $emailTo = "igor.uzelac@diwanee.com";
  $subject = "Diwanee: Poruka "
  $headers = "From: ".$emailFrom;
  $txt = "You have recieve an e-mail from ".$name.".\n\n\n".$message;

  mail($emailTo, $subject, $txt, $headers);
  header("Location: contact_page.html?message-send");
}

?>

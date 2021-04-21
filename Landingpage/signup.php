<?php

$serverName="db.lyfters-shop.com";
$dBUsername="md567856db557169";
$dBPassword="Klaasfaak@21";
$dBName="md567856db557169";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

$name = $_POST['user_name'];
$email = $_POST['email'];

if (!$conn) {
 die("Connection failed: " . mysqli_connect_error());
}


$sql = "INSERT INTO newsletter (name, email) VALUES(?, ?);";
$stmt = mysqli_stmt_init($conn);
if (!mysqli_stmt_prepare($stmt, $sql)) {
    header('location: ./index.html?error=stmtfailed');
    exit();
}


mysqli_stmt_bind_param($stmt, 'ss', $name, $email);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);

header('location: ./index.html?error=none');
mysqli_field_count($stmt);
exit();
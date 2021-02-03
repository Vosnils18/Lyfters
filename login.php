<?php
include_once './includes/header.php';

?>
<!DOCTYPE html>

<html lang="eng">
<body>
<div class="logincontainer">
<form action="./includes/login.inc.php" method="post">
    <label for="username"><b>Gebruikernaam</b></label><br>
    <input type="text" placeholder="Barney de dino" id="username" name="username" required><br><br>

    <label for="pwd"><b>Wachtwoord</b></label><br>
    <input type="password" placeholder="Wachtwoord" name="pwd" id="pwd" required><br><br>

    <input type="submit" value="Inloggen" name="submit">
</form>
    <a href="./signup.php">Ik heb nog geen account</a>
</div>

</body>
</html>
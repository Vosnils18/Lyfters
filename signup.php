<?php
include_once './includes/header.php';

?>
<!DOCTYPE html>
<html>
<body>

<div class="registercontainer">
    <form action="includes/signup.inc.php" method="post">

        <label for="username"><b>Gebruikernaam</b></label><br>
        <input type="text" placeholder="Barney123" id="username" name="username" required><br><br>

        <label for="name"><b>Voornaam</b></label><br>
        <input type="text" placeholder="Barney" id="first_name" name="first_name" required><br><br>

        <label for="name"><b>Achternaam</b></label><br>
        <input type="text" placeholder="de Dino" id="last_name" name="last_name" required><br><br>

        <label for="gender"><b>Geslcaht</b></label><br>
        <input type="radio" name="gender" value="male"> Man<br>
        <input type="radio" name="gender" value="female"> Vrouw<br>
        <input type="radio" name="gender" value="other"> Anders<br>
        <br>

        <label for="email"><b>Emailadres</b></label><br>
        <input type="text" placeholder="Barney@email.nl" name="email" id="email" required><br><br>

        <label for="pwd"><b>Wachtwoord</b></label><br>
        <input type="password" placeholder="Wachtwoord" name="pwd" id="pwd" required><br><br>

        <label for="pwdRepeat"><b>Herhaal wachtwoord</b></label><br>
        <input type="password" placeholder="Herhaal wachtwoord" name="pwdRepeat" id="pwdRepeat" required><br>

        <label for="street"><b>Straatnaam</b></label><br>
        <input type="text" placeholder="Barneystraat" name="street" id="street"><br>

        <label for="house_number"><b>huisnummer</b></label><br>
        <input type="text" placeholder="5" name="house_number" id="house_number"><br>

        <label for="pwdRepeat"><b>Straatnaam</b></label><br>
        <input type="text" placeholder="Barneystraat" name="street" id="street"><br>



        <input type="submit" name="submit" value="Registreren">
    </form>
</div>
</body>
</html>
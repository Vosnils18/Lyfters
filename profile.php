<?php
include_once './includes/header.php';

if (!isset ($_SESSION['username'])) {
    header ('location: ./login.php');
    exit();
}
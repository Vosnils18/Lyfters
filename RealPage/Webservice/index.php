<?php
require_once "dummyArrays.php";

$data = getImageSlideshow1();

header("Content-Type: application/json");
echo json_encode($data);
exit;
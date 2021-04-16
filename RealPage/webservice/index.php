<?php
require_once "dummyArrays.php";

$data = getImageSlideshow();

header("Content-Type: application/json");
echo json_encode($data);
exit;
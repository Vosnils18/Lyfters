<?php

require_once "dummyArrays.php";

$data = getProductDetails();

header("Content-Type: application/json");
echo json_encode($data);
exit;
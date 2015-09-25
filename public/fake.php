<?php
require ('../vendor/autoload.php');

use Fakerino\Fakerino;

$data = $_POST['inputData'];
$lang = $_POST['lang'];

$arrayData = parseData($data);
$fakerino = Fakerino::create(array('locale'=>$lang));

try {
    $result = $fakerino->fake($arrayData)->toArray();
    foreach ($result as $res) {
        echo $res . '<br/>';
    }
} catch (Exception $e) {
    echo 'Error found in the input data';
    exit;
}

function parseData($data){
    if($parseData = json_decode($data)) {
        return $parseData;
    }
    echo 'Not valid Json data'; exit;
}


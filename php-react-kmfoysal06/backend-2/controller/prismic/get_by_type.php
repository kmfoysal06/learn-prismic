<?php
if(!defined("ABSPATH")) exit;
use Prismic\Api;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

http_response_code(200);


$repo_name = KMFOYSAL_PRISMIC_REPO;
$api = Api::get("https://{$repo_name}.prismic.io/api/v2");
$document = $api->getSingle($page_type, ['lang' => $lang]);


echo json_encode($document, JSON_PRETTY_PRINT);

<?php

require_once '../src/PrismicClient.php';

use App\PrismicClient;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $prismicClient = new PrismicClient();
    
    // Get the home document
    $lang = $_GET['lang'] ?? 'en-us';
    // $document = $prismicClient->getDocumentByUID('footer', 'footer', $lang);
   
    $document = $prismicClient->getDocumentByType('footer', $lang);
    // Transform the document data for object from Prismic\Api
    $transformedDocument = [
        'id' => $document->id,
        'uid' => $document->uid,
        'type' => $document->type,
        'data' => [
            'slices' => [],
            'meta_title' => $document->data->meta_title ?? null,
            'meta_description' => $document->data->meta_description ?? null,
            'meta_image' => isset($document->data->meta_image) ? [
                'url' => $document->data->meta_image->url ?? '',
                'alt' => $document->data->meta_image->alt ?? ''
            ] : null
        ]
    ];

    // Transform slices
    if (isset($document->data->slices) && is_array($document->data->slices)) {
        foreach ($document->data->slices as $slice) {
            $transformedDocument['data']['slices'][] = $prismicClient->transformSliceData((array)$slice);
        }
    }
    
    echo json_encode($transformedDocument, JSON_PRETTY_PRINT);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to fetch home page data',
        'message' => $e->getMessage()
    ]);
}
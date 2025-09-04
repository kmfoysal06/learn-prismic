<?php

namespace App;

require '../vendor/autoload.php';

use Prismic\Api;
use Prismic\Predicates;

class PrismicClient {
    private $repositoryName;
    private $apiEndpoint;
    private $api;

    public function __construct() {
        $this->repositoryName = 'kmfoysal06';
        $this->apiEndpoint = 'https://' . $this->repositoryName . '.cdn.prismic.io/api/v2';
        $this->api = Api::get($this->apiEndpoint);
    }
    
    public function getDocumentByUID($type, $uid, $lang = null) {
        try {
            $predicates = [
                Predicates::at('document.type', $type),
                Predicates::at('my.' . $type . '.uid', $uid)
            ];
            $options = [];
            if ($lang) {
                $options['lang'] = $lang;
            }
            $response = $this->api->query($predicates, $options);
            if (empty($response->results)) {
                throw new \Exception('Document not found a');
            }
            return $response->results[0];
        } catch (\Exception $e) {
            error_log('Prismic API Error: ' . $e->getMessage());
            throw $e;
        }
    }
    public function getDocumentByType($type, $lang = null) {
        try {
            $predicates = [
                Predicates::at('document.type', $type)
            ];
            $options = [];
            if ($lang) {
                $options['lang'] = $lang;
            }
            $response = $this->api->query($predicates, $options);
            if (empty($response->results)) {
                throw new \Exception('Document not found a');
            }
            return $response->results[0];
        } catch (\Exception $e) {
            error_log('Prismic API Error: ' . $e->getMessage());
            throw $e;
        }
    }
    
    public function transformSliceData($slice) {
        // Transform Prismic slice data to match our React component expectations
        $transformed = [
            'slice_type' => $slice['slice_type'],
            'variation' => $slice['variation'] ?? 'default',
            'primary' => []
        ];
        
        if (isset($slice['primary'])) {
            foreach ($slice['primary'] as $key => $value) {
                if (is_array($value)) {
                    // Handle different field types
                    if (isset($value['url'])) {
                        // Image field
                        $transformed['primary'][$key] = [
                            'url' => $value['url'],
                            'alt' => $value['alt'] ?? '',
                            'dimensions' => $value['dimensions'] ?? null
                        ];
                    } elseif (isset($value['link_type'])) {
                        // Link field
                        $transformed['primary'][$key] = [
                            'url' => $value['url'] ?? '',
                            'link_type' => $value['link_type'],
                            'target' => $value['target'] ?? null
                        ];
                    } else {
                        // Group field or other complex types
                        $transformed['primary'][$key] = $value;
                    }
                } else {
                    // Simple text field
                    $transformed['primary'][$key] = $value;
                }
            }
        }
        
        return $transformed;
    }
}
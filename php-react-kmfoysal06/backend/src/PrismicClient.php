<?php

namespace App;

class PrismicClient {
    private $repositoryName;
    private $apiEndpoint;
    
    public function __construct() {
        $this->repositoryName = 'kmfoysal06';
        $this->apiEndpoint = 'https://' . $this->repositoryName . '.cdn.prismic.io/api/v2';
    }
    
    public function getAPI() {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiEndpoint);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json'
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode !== 200) {
            throw new \Exception('Failed to fetch API info a');
        }
        
        return json_decode($response, true);
    }
    
    public function getDocumentByUID($type, $uid, $lang = null) {
        try {
            $api = $this->getAPI();
            $documentsUrl = $api['refs'][0]['ref'];
            
            $queryUrl = $this->apiEndpoint . '/documents/search?ref=' . $documentsUrl;
            $queryUrl .= '&q=[[at(document.type,"' . $type . '")]]';
            $queryUrl .= '&q=[[at(my.' . $type . '.uid,"' . $uid . '")]]';
            
            if ($lang) {
                $queryUrl .= '&lang=' . $lang;
            }
            
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $queryUrl);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Accept: application/json'
            ]);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode !== 200) {
                throw new \Exception('Failed to fetch document b');
            }
            
            $result = json_decode($response, true);
            
            if (empty($result['results'])) {
                throw new \Exception('Document not found');
            }
            
            return $result['results'][0];
            
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
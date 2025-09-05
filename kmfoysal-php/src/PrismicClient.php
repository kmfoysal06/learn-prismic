<?php
declare(strict_types=1);

namespace App;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class PrismicClient
{
    private string $repo;
    private ?string $accessToken;
    private Client $http;
    private ?string $masterRef = null;

    public function __construct(string $repo, ?string $accessToken = null)
    {
        $this->repo = $repo;
        $this->accessToken = $accessToken;
        $this->http = new Client([
            'base_uri' => "https://{$repo}.cdn.prismic.io/",
            'timeout' => 10.0,
        ]);
    }

    private function getMasterRef(): string
    {
        if ($this->masterRef !== null) {
            return $this->masterRef;
        }

        try {
            $args = [];
            if ($this->accessToken) $args['query'] = ['access_token' => $this->accessToken];
            $resp = $this->http->request('GET', 'api/v2', $args);
            $data = json_decode((string)$resp->getBody(), true);
            $ref = null;
            foreach ($data['refs'] ?? [] as $r) {
                if (($r['id'] ?? '') === 'master') {
                    $ref = $r['ref'];
                    break;
                }
            }
            if (!$ref) throw new \RuntimeException('Could not discover Prismic master ref');
            $this->masterRef = $ref;
            return $ref;
        } catch (GuzzleException $e) {
            throw new \RuntimeException('Error fetching Prismic API: ' . $e->getMessage());
        }
    }

    public function search(array $predicates = [], int $pageSize = 20): array
    {
        $query = [
            'ref' => $this->getMasterRef(),
            'pageSize' => (string)$pageSize,
        ];
        if ($this->accessToken) {
            $query['access_token'] = $this->accessToken;
        }
        foreach ($predicates as $p) {
            $query['q'][] = $p;
        }
        try {
            $resp = $this->http->request('GET', 'api/v2/documents/search', ['query' => $query]);
            $data = json_decode((string)$resp->getBody(), true);
            return $data['results'] ?? [];
        } catch (GuzzleException $e) {
            throw new \RuntimeException('Prismic search error: ' . $e->getMessage());
        }
    }

    public function fetchByUID(string $type, string $uid): ?array
    {
        $predicates = [
            sprintf('[[at(document.type,"%s")]]', $type),
            sprintf('[[at(my.%s.uid,"%s")]]', $type, $uid),
        ];
        $results = $this->search($predicates, 1);
        return $results[0] ?? null;
    }

    public function fetchByUIDAny(string $uid): ?array
    {
        $types = ['page', 'post', 'article', 'home'];
        foreach ($types as $t) {
            $doc = $this->fetchByUID($t, $uid);
            if ($doc) return $doc;
        }
        return null;
    }

    public function fetchFirstOfType(string $type): ?array
    {
        $predicates = [
            sprintf('[[at(document.type,"%s")]]', $type),
        ];
        $results = $this->search($predicates, 1);
        return $results[0] ?? null;
    }

    public function fetchAll(int $pageSize = 20): array
    {
        return $this->search([], $pageSize);
    }
}
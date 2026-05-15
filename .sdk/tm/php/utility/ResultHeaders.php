<?php
declare(strict_types=1);

// FirstNews SDK utility: result_headers

class FirstNewsResultHeaders
{
    public static function call(FirstNewsContext $ctx): ?FirstNewsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

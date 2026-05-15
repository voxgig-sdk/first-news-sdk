<?php
declare(strict_types=1);

// FirstNews SDK utility: result_body

class FirstNewsResultBody
{
    public static function call(FirstNewsContext $ctx): ?FirstNewsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

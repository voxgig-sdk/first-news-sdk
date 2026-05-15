<?php
declare(strict_types=1);

// FirstNews SDK exists test

require_once __DIR__ . '/../firstnews_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FirstNewsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

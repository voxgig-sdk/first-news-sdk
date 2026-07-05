<?php
declare(strict_types=1);

// Typed models for the FirstNews SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** New entity data model. */
class New
{
    public ?string $access = null;
    public ?array $data = null;
    public ?int $id = null;
    public ?string $last_modified = null;
    public ?string $link = null;
    public ?string $published = null;
    public ?string $status = null;
    public ?int $status_code = null;
    public ?string $summary = null;
    public ?string $title = null;
    public ?string $version = null;
}

/** Request payload for New#load. */
class NewLoadMatch
{
    public int $id;
}

/** Request payload for New#list. */
class NewListMatch
{
    public ?string $access = null;
    public ?array $data = null;
    public ?int $id = null;
    public ?string $last_modified = null;
    public ?string $link = null;
    public ?string $published = null;
    public ?string $status = null;
    public ?int $status_code = null;
    public ?string $summary = null;
    public ?string $title = null;
    public ?string $version = null;
}


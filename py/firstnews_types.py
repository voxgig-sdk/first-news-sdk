# Typed models for the FirstNews SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class New:
    access: Optional[str] = None
    data: Optional[dict] = None
    id: Optional[int] = None
    last_modified: Optional[str] = None
    link: Optional[str] = None
    published: Optional[str] = None
    status: Optional[str] = None
    status_code: Optional[int] = None
    summary: Optional[str] = None
    title: Optional[str] = None
    version: Optional[str] = None


@dataclass
class NewLoadMatch:
    id: int


@dataclass
class NewListMatch:
    access: Optional[str] = None
    data: Optional[dict] = None
    id: Optional[int] = None
    last_modified: Optional[str] = None
    link: Optional[str] = None
    published: Optional[str] = None
    status: Optional[str] = None
    status_code: Optional[int] = None
    summary: Optional[str] = None
    title: Optional[str] = None
    version: Optional[str] = None


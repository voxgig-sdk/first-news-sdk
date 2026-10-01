-- Typed models for the FirstNews SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class New
---@field access? string
---@field data? table
---@field id? number
---@field lastmodified? string
---@field link? string
---@field published? string
---@field status? string
---@field statuscode? number
---@field summary? string
---@field title? string
---@field version? string

---@class NewLoadMatch
---@field id number

---@class NewListMatch
---@field after? string
---@field before? string
---@field channel? string
---@field limit? number
---@field link? string
---@field offset? number
---@field pretty? boolean
---@field q? string

local M = {}

return M

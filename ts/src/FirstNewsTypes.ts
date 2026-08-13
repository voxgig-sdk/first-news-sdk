// Typed models for the FirstNews SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface New {
  channels?: any[]
  content?: string
  id?: number
  link?: string
  published?: string
  summary?: string
  title?: string
}

export interface NewLoadMatch {
  id: number
}

export interface NewListMatch {
  channels?: any[]
  content?: string
  id?: number
  link?: string
  published?: string
  summary?: string
  title?: string
}


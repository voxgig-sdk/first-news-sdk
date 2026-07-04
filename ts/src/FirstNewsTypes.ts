// Typed models for the FirstNews SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface New {
  access?: string
  data?: Record<string, any>
  id?: number
  last_modified?: string
  link?: string
  published?: string
  status?: string
  status_code?: number
  summary?: string
  title?: string
  version?: string
}

export interface NewLoadMatch {
  id: number
}

export type NewListMatch = Partial<New>


package voxgigfirstnewssdk

import (
	"github.com/voxgig-sdk/first-news-sdk/core"
	"github.com/voxgig-sdk/first-news-sdk/entity"
	"github.com/voxgig-sdk/first-news-sdk/feature"
	_ "github.com/voxgig-sdk/first-news-sdk/utility"
)

// Type aliases preserve external API.
type FirstNewsSDK = core.FirstNewsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FirstNewsEntity = core.FirstNewsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FirstNewsError = core.FirstNewsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewNewEntityFunc = func(client *core.FirstNewsSDK, entopts map[string]any) core.FirstNewsEntity {
		return entity.NewNewEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFirstNewsSDK = core.NewFirstNewsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

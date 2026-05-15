package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewNewEntityFunc func(client *FirstNewsSDK, entopts map[string]any) FirstNewsEntity


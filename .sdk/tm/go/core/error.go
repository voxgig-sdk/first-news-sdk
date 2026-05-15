package core

type FirstNewsError struct {
	IsFirstNewsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFirstNewsError(code string, msg string, ctx *Context) *FirstNewsError {
	return &FirstNewsError{
		IsFirstNewsError: true,
		Sdk:              "FirstNews",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FirstNewsError) Error() string {
	return e.Msg
}

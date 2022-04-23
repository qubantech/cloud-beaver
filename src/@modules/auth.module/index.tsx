import React from 'react'
import { Module } from '../../app.core'
import { AuthForm } from './auth.module'

export const AuthModule = Module(<AuthForm/>)({
	routeProps: {
		path: 'login',
	},
	name: 'Auth'
})
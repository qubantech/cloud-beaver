import React from 'react'
import { Module } from '../../app.core'
import Conference from './conferences.module'

export const ConferencesModule = Module(<Conference/>)({
	routeProps: {
		path: 'conferences/*',
	},
	name: 'Conferences'
})
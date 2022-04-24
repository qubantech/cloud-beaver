import React from 'react'
import { Module } from '../../app.core'
import Conferences from './conferences.module'

export const ConferencesModule = Module(<Conferences/>)({
	routeProps: {
		path: 'conferences/*',
	},
	name: 'Conferences'
})
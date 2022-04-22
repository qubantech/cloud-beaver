import React from 'react'
import { Template } from './template.module'
import { Module } from '../../app.core'


export const TemplateModule = Module(<Template/>)({
	routeProps: {
		path: 'template/*',
	},
	name: 'Template'
})
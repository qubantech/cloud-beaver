import { Module } from '../../app.core'
import React from 'react'
import { Project } from './project.module'

export const ProjectModule = Module(<Project/>)({
	routeProps: {
		path: 'project/*',
	},
	name: 'Project'
})
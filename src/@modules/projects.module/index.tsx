import React from 'react'
import { Module } from '../../app.core'
import { Projects } from './projects.module'

export const ProjectsModule = Module(<Projects/>)({
	routeProps: {
		path: 'projects/*',
	},
	name: 'Projects'
})
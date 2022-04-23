import React from 'react'
import { Module } from '../../app.core'
import Checkpoint from './checkpoint.module'


export const CheckpointModule = Module(<Checkpoint/>)({
	routeProps: {
		path: 'project/*',
	},
	name: 'Checkpoint'
})
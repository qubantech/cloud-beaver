import React from 'react'
import { Module } from '../../app.core'
import { Notifications } from './notifications.module'

export const NotificationsModule = Module(<Notifications/>)({
	routeProps: {
		path: 'notifications/*',
	},
	name: 'Notifications'
})
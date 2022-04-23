import axios from 'axios'
import {JWT} from './zoomConfig'

const zoomClient = axios.create()
zoomClient.defaults.headers.common['Authorization'] = `Bearer ${JWT}`

const CORS_PREFIX = 'https://thingproxy.freeboard.io/fetch/'

const startMeeting = () => zoomClient.post<never>(CORS_PREFIX + 'https://api.zoom.us/v2/users/me/meetings', {
	default_password: false,
	duration: 60,
	pre_schedule: false,
	settings: {
		allow_multiple_devices: true,
		approval_type: 2,
		audio: 'telephony',
		authentication_option: false,
		calendar_type: 1,
		close_registration: false,
		cn_meeting: false,
		email_notification: true,
		encryption_type: 'enhanced_encryption',
		focus_mode: true,
		global_dial_in_countries: [],
		host_video: true,
		in_meeting: false,
		jbh_time: 0,
		join_before_host: true,
		meeting_authentication: false,
		mute_upon_entry: false,
		participant_video: true,
		private_meeting: false,
		registrants_confirmation_email: true,
		registrants_email_notification: true,
		registration_type: 1,
		show_share_button: true,
		use_pmi: false,
		waiting_room: false,
		watermark: false
	},
	type: 2
})
	.then(t => t.data['join_url'])


export {startMeeting}

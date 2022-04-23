import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	list: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		minWidth: '110px',
		padding: '20px 10px',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
		borderRadius: '5px',
	},

	item: {
		// fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		// fontWeight: 700,
		// lineHeight: 1,
		display: 'flex',
		alignItems: 'center',
		boxSizing: 'border-box',
		width: '110px',
		height: '30px',
		marginBottom: '5px',
		paddingLeft: '5px',
		border: '1px solid gray',
		borderRadius: '5px',
		userSelect: 'none',
		backgroundColor: 'white',
	},

	lead: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
		fontSize: 22,
		lineHeight: 1,
	},

	inner: {
		display: 'flex',

		[theme.fn.smallerThan(350)]: {
			flexDirection: 'column',
		},
	},
}))

import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	footer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
	},
}))
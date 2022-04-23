import { createStyles } from '@mantine/core'


export const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	date:{

	},

	dateSelected:{
		color: theme.colors.gray[3],
	},

	selectedCard: {
		backgroundColor: theme.colors.blue[7],
		color: theme.colors.gray[3]
	},

	title: {
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1.2,
	},

	titleSelected: {
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1.2,
		color: theme.colors.gray[3],
	},

	bodySelected: {
		fontWeight: 600,
		padding: theme.spacing.md,
		color: theme.colors.gray[3],
	},

	body: {
		padding: theme.spacing.md,
	},
}))
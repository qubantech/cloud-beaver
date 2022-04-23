import React from 'react'
import { Container, Timeline, Text, Tabs } from '@mantine/core'
import { GitBranch, GitCommit, GitPullRequest, MessageCircle, MessageDots, Photo, Settings } from 'tabler-icons-react'
import { Route, Routes, useParams } from 'react-router-dom'


const ProjectBoard = () => {

	const { id } = useParams()

	return <Container mt={'lg'}>
		<Tabs>
			<Tabs.Tab label="Gallery" icon={<Photo size={14} />}>
				Gallery tab content
			</Tabs.Tab>
			<Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>
				Messages tab content
			</Tabs.Tab>
			<Tabs.Tab label="Settings" icon={<Settings size={14} />}>
				Settings tab content
			</Tabs.Tab>
		</Tabs>
		<Text size="sm" mt="sm" color="dimmed">
			{id}
		</Text>
		<Container>
			<Timeline active={1} bulletSize={24} lineWidth={2}>
				<Timeline.Item bullet={<GitBranch size={12} />} title="New branch">
					<Text color="dimmed" size="sm">
						You&apos;ve created new branch
						<Text variant="link" component="span" inherit>fix-notifications</Text>
						from master
					</Text>
					<Text size="xs" mt={4}>2 hours ago</Text>
				</Timeline.Item>
				<Timeline.Item bullet={<GitCommit size={12} />} title="Commits">
					<Text color="dimmed" size="sm">
						You&apos;ve pushed 23 commits to
						<Text variant="link" component="span" inherit>fix-notifications branch</Text>
					</Text>
					<Text size="xs" mt={4}>52 minutes ago</Text>
				</Timeline.Item>
				<Timeline.Item title="Pull request" bullet={<GitPullRequest size={12} />} lineVariant="dashed">
					<Text color="dimmed" size="sm">
						You&apos;ve submitted a pull request
						<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text>
					</Text>
					<Text size="xs" mt={4}>34 minutes ago</Text>
				</Timeline.Item>
				<Timeline.Item title="Code review" bullet={<MessageDots size={12} />}>
					<Text color="dimmed" size="sm">
						<Text variant="link" component="span" inherit>Robert Gluesticker</Text>
						left a code review on your pull request
					</Text>
					<Text size="xs" mt={4}>12 minutes ago</Text>
				</Timeline.Item>
			</Timeline>
		</Container>
	</Container>
}


export const Project = () => {

	return <>
		<Routes>
			<Route path={':id'} element={<ProjectBoard/>}/>
		</Routes>
	</>
}
import activeDirectory from '../../resources/technologies/active-directory.svg';
import androidStudio from '../../resources/technologies/android-studio.png';
import azure from '../../resources/technologies/azure.jpg';
import azureActiveDirectory from '../../resources/technologies/azure-active-directory.svg';
import devops from '../../resources/technologies/devops.png';
import firebase from '../../resources/technologies/firebase.png';
import githubWhite from '../../resources/technologies/github-white.png';
import gitlab from '../../resources/technologies/gitlab.png';
import mvvmcross from '../../resources/technologies/mvvmcross.png';
import powershell from '../../resources/technologies/powershell.svg';
import react from '../../resources/technologies/react.png';
import tortoiseSVN from '../../resources/technologies/tortoise-svn.png';
import visualStudio from '../../resources/technologies/visual-studio.png';
import vmware from '../../resources/technologies/vmware.png';
import vscode from '../../resources/technologies/vscode.png';
import vue from '../../resources/technologies/vue.png';
import webstorm from '../../resources/technologies/webstorm.png';
import xamarin from '../../resources/technologies/xamarin.png';
import xcode from '../../resources/technologies/xcode.png';

type ProjectItem = { title: string; description: string; imgSrcList: string[] };

const ProjectItems: ProjectItem[] = [
	{
		title: 'IT Ops Admin Tool',
		description:
			'Built an Automation tool with a UI which made a 4+ hour manual process down to 5 mins',
		imgSrcList: [
			powershell,
			visualStudio,
			activeDirectory,
			vmware,
			tortoiseSVN,
			gitlab,
		],
	},
	{
		title: 'Internal Company Contact Book',
		description:
			'Built an internal contact book as a desktop application which has been installed on every employees laptop',
		imgSrcList: [visualStudio, mvvmcross, tortoiseSVN, gitlab],
	},
	{
		title: 'Audio Stories Android/IOS',
		description:
			'Built a native Android and IOS social app which records and shares stories',
		imgSrcList: [androidStudio, xcode, firebase, githubWhite],
	},
	{
		title: 'Azure Management Tool',
		description:
			'Built a desktop application which uses Azure Management APIs to manage internal users',
		imgSrcList: [
			azureActiveDirectory,
			azure,
			visualStudio,
			mvvmcross,
			tortoiseSVN,
			gitlab,
		],
	},
	{
		title: 'Xamarin Forms Mail App',
		description:
			'Contributed alongside senior developers to building an encrypted cross platform Mail App ',
		imgSrcList: [xamarin, androidStudio, xcode, mvvmcross, devops],
	},
	{
		title: 'Xamarin Forms Media Upload',
		description:
			'Built an MVP cross platform media upload for a company’s service which uploads to their servers',
		imgSrcList: [xamarin, androidStudio, xcode, mvvmcross, gitlab, tortoiseSVN],
	},
	{
		title: 'Office JS',
		description:
			'Contributed alongside senior developers to build an Office JS adding for outlook which uses companies’ services',
		imgSrcList: [visualStudio, vscode, webstorm, vue, devops],
	},
	{
		title: 'Portfolio',
		description:
			'Built this website as a portfolio for all the projects I have worked on and to show off what I am done',
		imgSrcList: [webstorm, vscode, react, githubWhite],
	},
];

export default ProjectItems;

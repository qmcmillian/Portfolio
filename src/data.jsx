import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaVuejs, FaNodeJs, FaAws, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiVuetify, SiNestjs, SiRedux, SiMongodb, SiPandas, SiNumpy, SiTensorflow, SiPostgresql, SiFastapi} from 'react-icons/si';

export const links = [
	{ id: nanoid(), href: '#home', text: 'home'},
	{ id: nanoid(), href: '#skills', text: 'skills'},
	{ id: nanoid(), href: '#about', text: 'about'},
	// { id: nanoid(), href: '#projects', text: 'projects'},
	{ id: nanoid(), href: '#contact', text: 'Contact'},
];

export const skills = [
	{
		id:nanoid(),
		title: 'Python',
		icon: <FaPython className="h-14 w-14 text-violet-600"/>
	}, 
	{
		id: nanoid(),
		title: 'Javascript',
		icon: <FaJs className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'Typescript',
		icon: <SiTypescript className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'HTML&CSS',
		icon: <FaHtml5 className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'VueJs',
		icon: <FaVuejs className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'NodeJs',
		icon: <FaNodeJs className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'NestJs',
		icon: <SiNestjs className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'FastAPI',
		icon: <SiFastapi className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'Redux',
		icon: <SiRedux className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'MongoDB',
		icon: <SiMongodb className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'PostgreSQL',
		icon: <SiPostgresql className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'AWS',
		icon: <FaAws className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'Pandas',
		icon: <SiPandas className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'Numpy',
		icon: <SiNumpy className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'Tensorflow',
		icon: <SiTensorflow className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'TailwindCss',
		icon: <SiTailwindcss className="h-14 w-14 text-violet-600"/>
	},
	{
		id: nanoid(),
		title: 'Vuetify',
		icon: <SiVuetify className="h-14 w-14 text-violet-600"/>
	},
];

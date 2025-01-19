import { nanoid } from "nanoid";
import stock1 from './photos/stock1.jpg';
import stock2 from './photos/stock2.jpg';
import stock3 from './photos/stock3.jpg';

export const projects = [
	{
		id: nanoid(),
		img: stock1,
		url: 'link1',
		github: 'link1',
		title: 'first project',
		test: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
	},
	{
		id: nanoid(),
		img: stock2,
		url: 'link2',
		github: 'link2',
		title: 'second project',
		test: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
	},
	{
		id: nanoid(),
		img: stock3,
		url: 'link3',
		github: 'link3',
		title: 'third project',
		test: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
	},
];
import React from 'react';
import '../css/Home.css';
import Homebanner from './Homebanner';
import Homesec1 from './Homesec1';
import Homesec2 from './Homesec2';
import Homesec3 from './Homesec3';
import HomeFAQ from './HomeFAQ';
import Homeslider from './Homeslider';


const Home = () => {
	return (
		<>
			<div className='home-parent'>
				<Homebanner />
				<Homesec1 />
				<Homesec2 />
				<Homesec3 />
				<HomeFAQ />
				<Homeslider/>
			</div>
		</>
	)
}

export default Home

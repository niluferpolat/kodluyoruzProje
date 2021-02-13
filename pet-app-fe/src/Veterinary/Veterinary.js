import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './Veterinary.css';
import Content from './Content';
class Veterinary extends Component {
	initMap() {
		let map = new window.google.maps.Map(document.getElementById('map'), {
			center: { lat: 41.1558, lng: 27.8137 },
			zoom: 12,
		});
		window.mapObject = map;
	}

	loadScript() {
		let scriptEl = this.createMapScript();
		let scriptsOnPage = document.getElementsByTagName('script');
		let script = scriptsOnPage[0];
		console.log(scriptsOnPage);
		console.log(script.parentNode);
		script.parentNode.insertBefore(scriptEl, script);
		window.initMap = this.initMap;
	}

	createMapScript() {
		let mapScript = document.createElement('script');
		const API_KEY = 'AIzaSyCj9NkidHq86NCNFLOrZw_wZsFmrpDQFAY';
		mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
		mapScript.async = true;
		mapScript.defer = true;
		return mapScript;
	}
	render() {
		this.loadScript();
		return (
			<>

				<Navbar />
				<Content />


			</>
		);
	}
}

export default Veterinary;

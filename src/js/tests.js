import { BLOCK_THEME_SERVICE_WORKER } from 'config/wp-settings';

/**
 * @module
 * @description Some handy test for common issues.
 */

const isJson = (str) => {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}

	return true;
};

const canLocalStore = () => {
	let mod;
	let result = false;

	try {
		mod = new Date();
		window.localStorage.setItem(mod, mod.toString());

		result = window.localStorage.getItem(mod) === mod.toString();
		window.localStorage.removeItem(mod);
		return result;
	} catch (_error) {
		return result;
	}
};

/**
 * @function supportsWorkers
 * @description Checks for both service worker support and indexedDb support, plus also checks if we want them loaded with a passed php constant messaged to js through our js config
 */

const supportsWorkers = () =>
	'serviceWorker' in window.navigator &&
	'indexedDB' in window &&
	!BLOCK_THEME_SERVICE_WORKER;

const android = /(android)/i.test(window.navigator.userAgent);
const chrome = !!window.chrome;
const firefox = typeof InstallTrigger !== 'undefined';
const ie = /* @cc_on!@ */ false || document.documentMode || false;
const edge = !ie && !!window.StyleMedia;
const ios = !!window.navigator.userAgent.match(/(iPod|iPhone|iPad)/i);
const iosMobile = !!window.navigator.userAgent.match(/(iPod|iPhone)/i);
const opera =
	!!window.opera || window.navigator.userAgent.indexOf(' OPR/') >= 0;
const safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || !chrome && !opera && window.webkitAudioContext !== 'undefined'; // eslint-disable-line
const os = window.navigator.platform;

/**
 * do not change to arrow function until testing dependencies are updated beyond the following reported issue
 * https://github.com/facebook/jest/issues/5001
 */
function browserTests() {
	return {
		android,
		chrome,
		edge,
		firefox,
		ie,
		ios,
		iosMobile,
		opera,
		safari,
		os,
	};
}

export { isJson, canLocalStore, browserTests, supportsWorkers };

// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

export default class Web {
	static getQuery() {
		let params = {};
		if (window.location.search) {
			let queryString = window.location.search.substring(1);
			let kvs = queryString.split("&");
			for (let i = 0; i < kvs.length; i++) {
				let kv = kvs[i].split("=");
				params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
			}
		}
		return params;
	}

	static getLanguage() {
		return (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage;
	}

	static getLanguages() {
		return window.navigator.languages || [window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage];
	}
}

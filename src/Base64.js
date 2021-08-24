// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

export default class Base64 {
	static encode(value) {
		return btoa(unescape(encodeURIComponent(value)));
	}

	static decode(value) {
		return decodeURIComponent(escape(atob(value)));
	}
}

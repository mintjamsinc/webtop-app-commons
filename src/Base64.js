// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

export default class Base64 {
	static encode(value) {
		return btoa(unescape(encodeURIComponent(value)));
	}

	static decode(value) {
		return decodeURIComponent(escape(atob(value)));
	}

	static randomBytes(length = 20) {
		return Base64.encode(window.crypto.getRandomValues(new Uint8Array(length)));
	}
}

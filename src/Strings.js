// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import CryptoJS from 'crypto-js';

export default class Strings {
	static defaultString(v, defaultValue) {
		if (defaultValue == undefined) {
			defaultValue = '';
		}

		if (v == undefined) {
			return defaultValue;
		}

		return v;
	}

	static trim(v) {
		return v
			.replace(/\r\n/g, "\n")
			.replace(/\r/g, "\n")
			.split('\n')
			.join(' ')
			.trim();
	}

	static toString(v) {
		if (Array.isArray(v)) {
			v.forEach(function(currentValue, index, array) {
				array[index] = Strings.toString(currentValue);
			});
			return v;
		}

		if (v == undefined) {
			return '';
		}
		if (typeof v == 'string') {
			return v;
		}
		return '' + v;
	}

	static digest(algorithm, v) {
		const f = CryptoJS[algorithm.toUpperCase()];
		if (!f) {
			throw 'No such algorithm: ' + algorithm;
		}
		return f(v).toString();
	}

	static randomString(length = 16) {
		const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		return Array.from(Array(length)).map(() => S[Math.floor(Math.random() * S.length)]).join('');
	}
}

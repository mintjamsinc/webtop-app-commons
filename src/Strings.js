// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

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
}

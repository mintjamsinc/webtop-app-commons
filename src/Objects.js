// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

let replacer = function(key, value) {
	if (this[key] instanceof Date) {
		return '{typed:Date}' + this[key].getTime();
	}
	return value;
};

let reviver = function(key, value) {
	if (typeof value === 'string') {
		if (value.startsWith('{typed:Date}')) {
			let data = value.substring('{typed:Date}'.length);
			return new Date(new Number(data));
		}
	}
	return value;
};

export default class Objects {
	static clone(o) {
		if (o == undefined) {
			return undefined;
		}
		return Objects.parse(Objects.stringify(o));
	}

	static stringify(o) {
		if (o == undefined) {
			return undefined;
		}
		return JSON.stringify(o, replacer);
	}

	static parse(o) {
		if (o == undefined) {
			return undefined;
		}
		return JSON.parse(o, reviver);
	}
}

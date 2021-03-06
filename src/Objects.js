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

	static equals(o1, o2) {
		return (Objects.stringify(o1) === Objects.stringify(o2));
	}

	static defineProperties(config) {
		for (let [k, v] of Object.entries(config.definitions)) {
			if (!Array.isArray(v)) {
				v = [v];
			}

			const refdata = function() {
				if (typeof config.data === 'function') {
					return config.data();
				}
				return config.data;
			};

			let descriptor = {};
			for (const e of v) {
				if (typeof e == 'function') {
					descriptor[e.name] = e;
					continue;
				}

				if (e == 'get') {
					descriptor['get'] = function() {
						return refdata()[k];
					};
				}
				if (e == 'set') {
					descriptor['set'] = function(value) {
						refdata()[k] = value;
					};
				}
			}

			if (Object.keys(descriptor).length > 0) {
				Object.defineProperty(config.instance, k, descriptor);
			}
		}
		return config.instance;
	}
}

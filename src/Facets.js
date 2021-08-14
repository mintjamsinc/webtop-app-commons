// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import yaml from 'js-yaml'
import Dates from './Dates'

export default class Facets {
	static iconClasses(type) {
		if (!type) {
			return 'fas';
		}

		return {
			'singlelinetext': 'fas fa-font',
			'multiplelinestext': 'fas fa-align-left',
			'choice': 'fas fa-tasks',
			'number': 'fas number-9',
			'currency': 'fas fa-dollar-sign',
			'datetime': 'far fa-clock',
			'lookup': 'fas fa-share-alt',
			'boolean': 'far fa-check-square',
			'principal': 'fas fa-users',
			'hyperlink': 'fas fa-link',
			'picture': 'far fa-image',
			'calculated': 'fas fa-subscript',
			'query': 'fas fa-search',
			'propertyset': 'fas fa-cubes'
		}[type];
	}

	static parseYaml(text) {
		return yaml.safeLoad(text);
	}

	static makeYaml(o) {
		return yaml.safeDump(JSON.parse(JSON.stringify(o)));
	}

	static trim(text) {
		if (!text) {
			return '';
		}
		return text.trim();
	}

	static toJSONString(text) {
		if (text == undefined) {
			return undefined;
		}
		return ('' + text).trim();
	}

	static toJSONBoolean(text) {
		if (typeof text == 'boolean') {
			return text;
		}

		if (text == undefined) {
			return undefined;
		}
		return (('' + text).trim() == 'true');
	}

	static toJSONNumber(text) {
		if (typeof text == 'number') {
			return text;
		}

		if (text == undefined || text.trim().length == 0) {
			return undefined;
		}
		return parseFloat(('' + text).trim());
	}

	static fromString(val) {
		if (Array.isArray(val)) {
			val.forEach(function(currentValue, index, array) {
				array[index] = Facets.fromString(currentValue);
			});
			return val;
		}
		if (val == undefined) {
			return '';
		}
		return ('' + val).trim();
	}

	static fromBoolean(val) {
		if (val == undefined) {
			return '';
		}
		if (typeof val != 'boolean') {
			return '' + false;
		}
		return '' + val;
	}

	static fromNumber(val) {
		if (val == undefined) {
			return '';
		}
		if (typeof val != 'number') {
			return '';
		}
		return '' + val;
	}

	static fromDate(val) {
		if (val == undefined) {
			return '';
		}
		if (!(typeof val == 'object' && val.constructor.name == 'Date')) {
			return '';
		}
		return '' + val;
	}

	static toString(v) {
		if (Array.isArray(v)) {
			v.forEach(function(currentValue, index, array) {
				array[index] = Facets.toString(currentValue);
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

	static toBoolean(v) {
		if (Array.isArray(v)) {
			v.forEach(function(currentValue, index, array) {
				array[index] = Facets.toBoolean(currentValue);
			});
			return v;
		}

		if (v == undefined) {
			return false;
		}
		if (typeof v == 'boolean') {
			return v;
		}
		return (('' + v) == 'true');
	}

	static toNumber(v) {
		if (Array.isArray(v)) {
			v.forEach(function(currentValue, index, array) {
				array[index] = Facets.toNumber(currentValue);
			});
			return v;
		}

		if (v == undefined) {
			return 0;
		}
		if (typeof v == 'number') {
			return v;
		}
		if (typeof v == 'boolean') {
			return (v) ? 1 : 0;
		}
		return new Number(v);
	}

	static toDate(v) {
		if (Array.isArray(v)) {
			v.forEach(function(currentValue, index, array) {
				array[index] = Facets.toDate(currentValue);
			});
			return v;
		}

		if (v == undefined) {
			return undefined;
		}
		if (typeof v == 'object' && v.constructor.name == 'Date') {
			return v;
		}
		try {
			return Dates.toDate(v);
		} catch (e) {
			// ignore
		}
		return undefined;
	}

	static defaultString(v, defaultValue) {
		if (defaultValue == undefined) {
			defaultValue = '';
		}

		if (v == undefined) {
			return defaultValue;
		}

		return v;
	}

	static defaultNumber(v, defaultValue) {
		if (defaultValue == undefined) {
			defaultValue = 0;
		}

		if (v == undefined) {
			return defaultValue;
		}

		return v;
	}

	static compareString(v1, v2) {
		v1 = Facets.defaultString(v1).toLowerCase();
		v2 = Facets.defaultString(v2).toLowerCase();
		if (v1 < v2) {
			return -1;
		}
		if (v1 > v2) {
			return 1;
		}
		return 0;
	}

	static compareNumber(v1, v2) {
		v1 = Facets.defaultNumber(v1);
		v2 = Facets.defaultNumber(v2);
		if (v1 < v2) {
			return -1;
		}
		if (v1 > v2) {
			return 1;
		}
		return 0;
	}
}

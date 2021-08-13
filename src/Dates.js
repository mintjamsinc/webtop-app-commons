// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import moment from 'moment'

export default class Dates {
	static text(value, valueType) {
		if (value == undefined) {
			return undefined;
		}

		if (!valueType) {
			valueType = 'datetime';
		}

		try {
			if (!(value instanceof Date)) {
				value = Dates.toDate(value);
			}

			if (valueType == 'friendly') {
				return moment(value).fromNow();
			}

			let options;
			if (valueType == 'datetime') {
				options = {
					weekday: 'short',
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric'
				};
			}
			if (valueType == 'date') {
				options = {
					'weekday': undefined,
					'year': 'numeric',
					'month': 'short',
					'day': 'numeric'
				};
			}
			if (valueType == 'time') {
				options = {
					'hour': 'numeric',
					'minute': 'numeric'
				};
			}
			return value.toLocaleString(window.Webtop.language, options);
		} catch (e) {
			return undefined;
		}
	}

	static today() {
		let today = new Date();
		today.setHours(0);
		today.setMinutes(0);
		today.setSeconds(0);
		today.setMilliseconds(0);
		return today;
	}

	static toDate(text) {
		if (text == undefined) {
			return undefined;
		}
		if (text instanceof Date) {
			return text;
		}
		if ((text instanceof Number) || (typeof text == 'number')) {
			return new Date(text);
		}

		if (text.indexOf('T') != -1) {
			// datetime
			let n = text.split(/[^0-9]/);
			if (n.length < 5) {
				throw 'Invalid Date: ' + text;
			}

			while (n.length < 7) {
				n.push('0');
			}
			for (let i = 0; i < n.length; i++) {
				n[i] = Number(n[i]);
			}
			if (n[1] == 0) {
				n[1] = 1;
			}
			if (n[2] == 0) {
				n[2] = 1;
			}
			let d = new Date(n[0], n[1] - 1, n[2], n[3], n[4], n[5], n[6]);
			if (text.endsWith('Z')) {
				d = new Date(d.getTime() - (d.getTimezoneOffset() * 60000));
			}
			return d;
		} else if (text.indexOf(':') != -1) {
			// time
			let n = text.split(/[^0-9]/);
			if (n.length < 2) {
				throw 'Invalid Date: ' + text;
			}

			while (n.length < 4) {
				n.push('0');
			}
			let d = new Date(1970, 0, 1, n[0], n[1], n[2], n[3]);
			if (text.endsWith('Z')) {
				d = new Date(d.getTime() - (d.getTimezoneOffset() * 60000));
			}
			return d;
		} else {
			// date
			let n = text.split(/[^0-9]/);
			if (n.length < 3) {
				throw 'Invalid Date: ' + text;
			}

			while (n.length < 7) {
				n.push('0');
			}
			for (let i = 0; i < n.length; i++) {
				n[i] = Number(n[i]);
			}
			if (n[1] == 0) {
				n[1] = 1;
			}
			if (n[2] == 0) {
				n[2] = 1;
			}
			let d = new Date(n[0], n[1] - 1, n[2], n[3], n[4], n[5], n[6]);
			if (text.endsWith('Z')) {
				d = new Date(d.getTime() - (d.getTimezoneOffset() * 60000));
			}
			return d;
		}
	}

	static isValidDate(text) {
		if (text == undefined) {
			return false;
		}
		if (typeof text != 'string') {
			return false;
		}

		let l = text.split('-');
		if (l.length != 3) {
			return false;
		}
		for (let e of l) {
			if (Number.isNaN(Number(e))) {
				return false;
			}
		}
		return true;
	}

	static isValidTime(text) {
		if (text == undefined) {
			return false;
		}
		if (typeof text != 'string') {
			return false;
		}

		let l = text.split(':');
		if (l.length != 2) {
			return false;
		}
		for (let e of l) {
			if (Number.isNaN(Number(e))) {
				return false;
			}
		}
		return true;
	}

	static isValidDatetime(text) {
		if (text == undefined) {
			return false;
		}
		if (typeof text != 'string') {
			return false;
		}

		let l = text.split('T');
		if (l.length != 2) {
			return false;
		}
		if (!Dates.isValidDate(l[0])) {
			return false;
		}
		if (!Dates.isValidTime(l[1])) {
			return false;
		}
		return true;
	}

	static addDays(d, days) {
		if (d == undefined) {
			return undefined;
		}
		return new Date(d.setDate(d.getDate() + days));
	}

	static addMonths(d, months) {
		if (d == undefined) {
			return undefined;
		}
		return new Date(d.setMonth(d.getMonth() + months));
	}

	static duration(text) {
		if (text == undefined) {
			return undefined;
		}
		try {
			return moment.duration(text).asMilliseconds();
		} catch (ignore) {
			return undefined;
		}
	}

	static toInputString(isoString) {
		if (!isoString) {
			return '';
		}

		try {
			let millis = Dates.toDate(isoString).getTime();
			let offset = new Date().getTimezoneOffset() * 60000;
			let text = new Date(millis - offset).toISOString();
			return text.substring(0, text.lastIndexOf(':'));
		} catch (ex) {
			// ignore
		}
		return '';
	}
}

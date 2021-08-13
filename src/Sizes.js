// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

export default class Sizes {
	static text(l, unit) {
		if (unit == undefined) {
			unit = 'k';
		}
		try {
			if (unit == 'k') {
				l = Math.ceil(l / 1024);
				return '' + l.toLocaleString() + ' kB';
			}

			return '' + l.toLocaleString() + ' bytes';
		} catch (e) {
			return '';
		}
	}
}

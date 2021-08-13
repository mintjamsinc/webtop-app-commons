// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

export default class Numbers {
	static text(n, fractionDigits) {
		if (!(n instanceof Number)) {
			n = new Number(n);
		}

		let options = {};
		if (fractionDigits != undefined) {
			options.minimumFractionDigits = fractionDigits;
			options.maximumFractionDigits = fractionDigits;
		}
		return n.toLocaleString(window.Webtop.language, options);
	}

	static toNumber(text) {
		if (text instanceof Number) {
			return text;
		}
		if (text == undefined) {
			return undefined;
		}

		return new Number(text.split(',').join('').split(' ').join(''));
	}
}

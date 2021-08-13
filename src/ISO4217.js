// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

export default class ISO4217 {
	static text(n, fractionDigits, currency) {
		try {
			let options = {};
			if (currency) {
				options.style = 'currency';
				options.currency = currency;
			}
			if (fractionDigits != undefined) {
				options.minimumFractionDigits = fractionDigits;
				options.maximumFractionDigits = fractionDigits;
			}
			return n.toLocaleString(undefined, options);
		} catch (e) {
			try {
				return n.toLocaleString();
			} catch (e2) {
				return undefined;
			}
		}
	}
}

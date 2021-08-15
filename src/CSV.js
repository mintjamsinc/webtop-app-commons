// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import Papa from 'papaparse'

export default class CSV {
	static parse(text) {
		return Papa.parse(text, {
			'skipEmptyLines': false
		});
	}

	static stringify(o) {
		return Papa.unparse(o);
	}
}

// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import * as base32 from 'hi-base32';

export default class Base32 {
	static encode(value) {
		return base32.encode(value);
	}

	static decode(value) {
		return base32.decode(value);
	}
}

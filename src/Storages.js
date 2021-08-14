// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import Objects from './Objects';

export default class Storages {
	constructor(storage) {
		this.$data = {
			'storage': storage,
			'keyPrefix': ''
		};
	}

	static session() {
		return new Storages(window.top.sessionStorage);
	}

	static local() {
		return new Storages(window.top.localStorage);
	}

	get supports() {
		return !!this.$data.storage;
	}

	keyPrefix(prefix) {
		this.$data.keyPrefix = (prefix) ? prefix : '';
		return this;
	}

	get length() {
		if (!this.supports) {
			return 0;
		}

		return this.$data.storage.length;
	}

	get(key, defaultValue) {
		if (!this.supports) {
			return defaultValue;
		}

		let value = this.$data.storage.getItem(this.$data.keyPrefix + key);
		if (value == undefined) {
			return defaultValue;
		}

		try {
			return Objects.parse(value);
		} catch (ex) {
			throw 'Unsupported: ' + value;
		}
	}

	set(key, value) {
		if (!this.supports) {
			return undefined;
		}

		let oldValue;
		try {
			oldValue = this.get(key);
		} catch (ex) {
			// ignore
		}

		if (value == undefined) {
			this.$data.storage.removeItem(this.$data.keyPrefix + key);
			return oldValue;
		}

		let valueString;
		try {
			valueString = Objects.stringify(value);
		} catch (ex) {
			throw 'Unsupported: ' + value;
		}

		this.$data.storage.setItem(this.$data.keyPrefix + key, valueString);
		return oldValue;
	}

	remove(key) {
		if (!this.supports) {
			return undefined;
		}

		let oldValue;
		try {
			oldValue = this.get(key);
		} catch (ex) {
			// ignore
		}

		this.$data.storage.removeItem(this.$data.keyPrefix + key);
		return oldValue;
	}

	clear() {
		if (!this.supports) {
			return;
		}

		if (!this.$data.keyPrefix) {
			this.$data.storage.clear();
			return;
		}

		let keys = Object.keys(this.$data.storage);
		for (let k of keys) {
			if (!k.startsWith(this.$data.keyPrefix)) {
				continue;
			}
			this.$data.storage.removeItem(k);
		}
	}

	has(key) {
		if (!this.supports) {
			return false;
		}

		let value;
		try {
			value = this.get(key);
		} catch (ex) {
			// ignore
		}

		return (value != undefined);
	}
}

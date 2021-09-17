// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import yaml from 'js-yaml'

export default class YAML {
	static parse(text) {
		return yaml.safeLoad(text);
	}

	static stringify(o) {
		return yaml.dump(JSON.parse(JSON.stringify(o)));
	}
}

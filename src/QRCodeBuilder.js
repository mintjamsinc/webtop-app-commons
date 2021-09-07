// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import QRCode from 'qrcode';
import Base64 from './Base64';

export default class QRCodeBuilder {
	static getAsString(text) {
		return new Promise(function(resolve) {
			QRCode.toString(text, {type: 'svg'}, function (err, svg) {
				resolve(svg);
			});
		});
	}

	static getAsDataURL(text) {
		return QRCodeBuilder.getAsString(text).then(function(svg) {
			return 'data:image/svg+xml;base64,' + Base64.encode(svg);
		});
	}
}

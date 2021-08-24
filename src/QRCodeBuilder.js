// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import QRCode from 'qrcode';
import Base64 from './Base64';

export default class QRCodeBuilder {
	async getAsString(text) {
		return await new Promise(function(resolve) {
			QRCode.toString(text, {type: 'svg'}, function (err, svg) {
				resolve(svg);
			});
		});
	}

	getAsDataURL(text) {
		return 'data:image/svg+xml;base64,' + Base64.encode(this.getAsString(text));
	}
}

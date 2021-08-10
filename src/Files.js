// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

export default class Files {
	static iconClasses(item) {
		if (!item) {
			return '';
		}

		if (item.isCollection) {
			return 'far fa-folder';
		}

		if (!item.mimeType) {
			return 'far fa-file';
		}

		if (item.mimeType.indexOf('video/') != -1) {
			return 'far fa-file-video';
		}

		if (item.mimeType.indexOf('audio/') != -1) {
			return 'far fa-file-audio';
		}

		if (item.mimeType.indexOf('archive') != -1 ||
			item.mimeType.indexOf('/zip') != -1 ||
			item.mimeType.indexOf('-bzip') != -1 ||
			item.mimeType.indexOf('-compress') != -1) {
			return 'far fa-file-archive';
		}

		if (item.mimeType.indexOf('image/') != -1) {
			return 'far fa-file-image';
		}

		if (item.mimeType.indexOf('.ms-powerpoint') != -1 ||
			item.mimeType.indexOf('officedocument.presentationml') != -1) {
			return 'far fa-file-powerpoint';
		}

		if (item.mimeType.indexOf('.ms-excel') != -1 ||
			item.mimeType.indexOf('officedocument.spreadsheetml') != -1) {
			return 'far fa-file-excel';
		}

		if (item.mimeType.indexOf('/msword') != -1 ||
			item.mimeType.indexOf('officedocument.wordprocessingml') != -1) {
			return 'far fa-file-word';
		}

		if (item.mimeType.indexOf('/pdf') != -1) {
			return 'far fa-file-pdf';
		}

		if (item.mimeType.indexOf('application/') != -1) {
			if (item.mimeType.indexOf('/bpmn+xml') != -1 ||
				item.mimeType.indexOf('/cmmn+xml') != -1 ||
				item.mimeType.indexOf('/dmn+xml') != -1) {
				return 'far fa-file-code';
			}

			if (item.mimeType.indexOf('/javascript') != -1 ||
				item.mimeType.indexOf('/json') != -1) {
				return 'far fa-file-code';
			}
		}

		if (item.mimeType.indexOf('text/') != -1) {
			if (item.mimeType.indexOf('/html') != -1 ||
				item.mimeType.indexOf('/xml') != -1 ||
				item.mimeType.indexOf('+xml') != -1 ||
				item.mimeType.indexOf('/xsl') != -1 ||
				item.mimeType.indexOf('/javascript') != -1 ||
				item.mimeType.indexOf('/css') != -1 ||
				item.mimeType.indexOf('/x-yaml') != -1) {
				return 'far fa-file-code';
			}

			return 'far fa-file-alt';
		}
		if (item.mimeType.indexOf('application/') != -1) {
			if (item.mimeType.indexOf('/ecmascript') != -1 ||
				item.mimeType.indexOf('/x-esp') != -1 ||
				item.mimeType.indexOf('/x-gsp') != -1 ||
				item.mimeType.indexOf('/x-groovy') != -1) {
				return 'far fa-file-code';
			}
		}

		return 'far fa-file';
	}

	static colorClasses(item) {
		if (item.isCollection) {
			return 'bg-m-darkgrey text-white';
		}

		if (!item.mimeType) {
			return 'bg-m-lightgrey text-white';
		}

		if (item.mimeType.indexOf('video/') != -1) {
			return 'bg-m-lightgrey text-white';
		}

		if (item.mimeType.indexOf('audio/') != -1) {
			return 'bg-m-pink text-white';
		}

		if (item.mimeType.indexOf('archive') != -1 ||
			item.mimeType.indexOf('/zip') != -1 ||
			item.mimeType.indexOf('-bzip') != -1 ||
			item.mimeType.indexOf('-compress') != -1) {
			return 'bg-m-indigo text-white';
		}

		if (item.mimeType.indexOf('image/') != -1) {
			return 'bg-m-lightgrey text-white';
		}

		if (item.mimeType.indexOf('.ms-powerpoint') != -1 ||
			item.mimeType.indexOf('officedocument.presentationml') != -1) {
			return 'bg-m-orange text-white';
		}

		if (item.mimeType.indexOf('.ms-excel') != -1 ||
			item.mimeType.indexOf('officedocument.spreadsheetml') != -1) {
			return 'bg-m-green text-white';
		}

		if (item.mimeType.indexOf('/msword') != -1 ||
			item.mimeType.indexOf('officedocument.wordprocessingml') != -1) {
			return 'bg-m-blue text-white';
		}

		if (item.mimeType.indexOf('/pdf') != -1) {
			return 'bg-m-red text-white';
		}

		if (item.mimeType.indexOf('application/') != -1) {
			if (item.mimeType.indexOf('/bpmn+xml') != -1 ||
				item.mimeType.indexOf('/cmmn+xml') != -1 ||
				item.mimeType.indexOf('/dmn+xml') != -1) {
				return 'bg-m-lightgreen text-white';
			}

			if (item.mimeType.indexOf('/javascript') != -1 ||
				item.mimeType.indexOf('/json') != -1) {
				return 'bg-m-cyan text-white';
			}
		}

		if (item.mimeType.indexOf('text/') != -1) {
			if (item.mimeType.indexOf('/html') != -1 ||
				item.mimeType.indexOf('/xml') != -1 ||
				item.mimeType.indexOf('+xml') != -1 ||
				item.mimeType.indexOf('/xsl') != -1 ||
				item.mimeType.indexOf('/javascript') != -1 ||
				item.mimeType.indexOf('/ecmascript') != -1 ||
				item.mimeType.indexOf('/css') != -1 ||
				item.mimeType.indexOf('/x-yaml') != -1) {
				return 'bg-m-cyan text-white';
			}
		}
		if (item.mimeType.indexOf('application/') != -1) {
			if (item.mimeType.indexOf('/ecmascript') != -1 ||
				item.mimeType.indexOf('/x-esp') != -1 ||
				item.mimeType.indexOf('/x-gsp') != -1 ||
				item.mimeType.indexOf('/x-groovy') != -1) {
				return 'bg-m-cyan text-white';
			}
		}

		return 'bg-m-lightgrey text-white';
	}
}

export default {
    os() {
        const os = navigator.userAgent;
        const isWindowsPhone = /(?:Windows Phone)/.test(os);
        const isSymbian = /(?:SymbianOS)/.test(os) || isWindowsPhone;
        const isAndroid = /(?:Android)/.test(os);
        const isFireFox = /(?:Firefox)/.test(os);
        const isChrome = /(?:Chrome|CriOS)/.test(os);
        const isPad = /(?:iPad|PlayBook)/.test(os) || (isAndroid && !/(?:Mobile)/.test(os)) || (isFireFox && /(?:Tablet)/.test(os));
        const isPhone = /(?:iPhone)/.test(os) && !isPad;
        const isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isPad: isPad,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc,
            isChrome: isChrome
        }
    },
    leftPad(str, len, ch) {
        const cache = [
            '',
            ' ',
            '  ',
            '   ',
            '    ',
            '     ',
            '      ',
            '       ',
            '        ',
            '         '
        ];
        // convert `str` to a `string`
        str = str + '';
        // `len` is the `pad`'s length now
        len = len - str.length;
        // doesn't need to pad
        if (len <= 0) return str;
        // `ch` defaults to `' '`
        if (!ch && ch !== 0) ch = ' ';
        // convert `ch` to a `string` cuz it could be a number
        ch = ch + '';
        // cache common use cases
        if (ch === ' ' && len < 10) return cache[len] + str;
        // `pad` starts with an empty string
        var pad = '';
        // loop
        while (true) {
            // add `ch` to `pad` if `len` is odd
            if (len & 1) pad += ch;
            // divide `len` by 2, ditch the remainder
            len >>= 1;
            // "double" the `ch` so this operation count grows logarithmically on `len`
            // each time `ch` is "doubled", the `len` would need to be "doubled" too
            // similar to finding a value in binary search tree, hence O(log(n))
            if (len) ch += ch;
            // `len` is 0, exit the loop
            else break;
        }
        // pad `str`!
        return pad + str;
    },
    isWebGLAvailable: function () {

		try {

			var canvas = document.createElement( 'canvas' );
			return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

	},

	isWebGL2Available: function () {

		try {

			var canvas = document.createElement( 'canvas' );
			return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );

		} catch ( e ) {

			return false;

		}

	},

	getWebGLErrorMessage: function () {

		return this.getErrorMessage( 1 );

	},

	getWebGL2ErrorMessage: function () {

		return this.getErrorMessage( 2 );

	},

	getErrorMessage: function ( version ) {

		var names = {
			1: 'WebGL',
			2: 'WebGL 2'
		};

		var contexts = {
			1: window.WebGLRenderingContext,
			2: window.WebGL2RenderingContext
		};

		var message = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

		var element = document.createElement( 'div' );
		element.id = 'webglmessage';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( contexts[ version ] ) {

			message = message.replace( '$0', 'graphics card' );

		} else {

			message = message.replace( '$0', 'browser' );

		}

		message = message.replace( '$1', names[ version ] );

		element.innerHTML = message;

		return element;

	}
}
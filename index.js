const fs = require('fs-extra');
const glob = require('glob');
const webp = require('webp-converter');
const SRC = 'src';
const DIST = 'dist';

glob(`${SRC}/**/*.{jpg,png,gif}`, (er, files) => {
	files.forEach(file => {
		const name = file.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1];
		webp.cwebp(file,`${DIST}/${name}.webp`,"-q 100",function(status,error) {
			console.log(status,error);
		});
	});
})

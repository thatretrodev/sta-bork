const borkfuscator = require('borkfuscator');
const fs = require('fs');

if (process.argv.length != 4) {
	process.exit();
}

const input = JSON.parse(fs.readFileSync(process.argv[2], "utf8"))
const output = {};
const areas = Object.keys(input);

for (let i = 0; i < areas.length; i++) {
	const area = input[areas[i]];
	const messages = Object.keys(area);
	let newArea = {};

	for (let j = 0; j < messages.length; j++) {
		const message = area[messages[j]];
		newArea[messages[j]] = borkfuscator(message);
	}

	output[areas[i]] = newArea;
}

fs.writeFileSync(process.argv[3], JSON.stringify(output));
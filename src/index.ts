#!/usr/bin/env node
import Pdf from 'pdfkit';
import fs from 'fs';
import path from 'path';

const pageWidth = 1131;
const pageHeight = 1600;

function getDirContent(dir: string): string[] {
	fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK);
	// if access didn't fail we can return the content
	return fs.readdirSync(dir);
}

function structurePdf(dir: string, target: string): void {
	//get the dir content first to not create pdf if couldn't access the path
	const dirContent = getDirContent(dir);
	// create the pdf and pipe it out to output
	const doc = new Pdf({ autoFirstPage: false });
	doc.pipe(fs.createWriteStream(target));

	for (const file of dirContent) {
		// todo read the image size and make the page the same size
		doc.addPage({ size: [pageWidth, pageHeight], margin: 0 });
		doc.image(path.join(dir, file), {
			width: pageWidth,
			height: pageHeight,
			fit: [pageWidth, pageHeight],
			align: 'center',
		});
	}
	// must end pdf because it's an writable stream
	doc.end();
}

function main(): void {
	// no cli interface because it's only for me and for specific use case
	// arg[2] folder absolute path, arg[1] where to ouput absolute path
	//pdfer /folder/contains/images /folder/where/to/save/output.pdf

	const dir = process.argv[2];
	const target = process.argv[3];
	if (dir === undefined || target === undefined) {
		throw new Error(
			'cli usage =>\npdfer /folder/contains/images /folder/where/to/save/output.pdf',
		);
	}
	structurePdf(dir, target);
}
main();


// function that creates a string with lots of HTML tags of different types

function createHTMLString () {
	var html = ''; for ( var i = 0; i < 100; i++ ) {
		html += ' ';
		html += '<div class="foo">';
		html += '<span class="bar">';
		html += '<a href="http://www.google.com">';
		html += 'Google';
		html += '</a>';
		html += '</span>';
		html += '</div>';
	}
	return html;
}

// function that creates a string with lots of HTML tags of different types including header tags and text

function createHTMLString () {
	let html = ''; for ( let i = 0; i < 100; i++ ) {
		html += `
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<details>
<summary>Summary</summary>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
</details>
<div class="foo">
<span class="bar">
<a href="http://www.google.com">Google</a>
</span>
</div>
`;

	}
	return html;
}

// function that updates the DOM with the HTML string

function createHTML () {
	document.getElementById( 'divContentHTML' ).innerHTML = createHTMLString();
}

// function that translates the HTML string to Markdown

function translateHTMLToMarkdownShowdown ( html = divContentHTML.innerHTML ) {
	var converter = new showdown.Converter();
	var markdown = converter.makeMarkdown( html );
	return markdown;
}

function updateMDShowdown ( html ) {
	document.getElementById( 'divContentMD' ).innerText = translateHTMLToMarkdownShowdown();
}

// function that translates the HTML string to Markdown using turndown.js

function translateHTMLToMarkdownTurndown ( html = divContentHTML.innerHTML ) {
	var turndownService = new TurndownService({ headingStyle: 'atx'});
	turndownService.keep( [ 'details', 'summary' ] )
	var markdown = turndownService.turndown( html );
	return markdown;
}

function updateMDturndown ( html ) {
	document.getElementById( 'divContentMD' ).innerText = translateHTMLToMarkdownTurndown();
}


function translateMarkdowntoHTMLShowdown ( text = divContentMD.innerText ) {
	var converter = new showdown.Converter();
	var html = converter.makeHtml( text );
	return html;
}

function updateHTML ( html ) {
	document.getElementById( 'divContentHTML' ).innerHTML = translateMarkdowntoHTMLShowdown();
}
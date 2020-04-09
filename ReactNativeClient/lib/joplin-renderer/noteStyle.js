function formatCssSize(v) {
	if (typeof v === 'string') {
		if (v.includes('px') || v.includes('em') || v.includes('%')) return v;
	}
	return `${v}px`;
}

module.exports = function(theme) {
	theme = theme ? theme : {};

	const fontFamily = '\'Avenir\', \'Arial\', sans-serif';

	const css =
		`
		/* https://necolas.github.io/normalize.css/ */
		html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}
		article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}
		pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}
		b,strong{font-weight:bolder}small{font-size:80%}img{border-style:none}

		body {
			font-size: ${theme.htmlFontSize};
			color: ${theme.htmlColor};
			word-wrap: break-word;
			line-height: ${theme.htmlLineHeight};
			background-color: ${theme.htmlBackgroundColor};
			font-family: ${fontFamily};
			padding-bottom: ${formatCssSize(theme.bodyPaddingBottom)};
			padding-top: ${formatCssSize(theme.bodyPaddingTop)};
		}
		strong {
			color: ${theme.colorBright};
		}
		kbd {
			border: 1px solid ${theme.htmlCodeBorderColor};
			box-shadow: inset 0 -1px 0 ${theme.htmlCodeBorderColor};
			padding: 2px 4px;
			border-radius: 3px;
			background-color: ${theme.htmlCodeBackgroundColor};
		}
		::-webkit-scrollbar {
			width: 7px;
			height: 7px;
		}
		::-webkit-scrollbar-corner {
			background: none;
		}
		::-webkit-scrollbar-track {
			border: none;
		}
		::-webkit-scrollbar-thumb {
			background: rgba(100, 100, 100, 0.3); 
			border-radius: 5px;
		}
		::-webkit-scrollbar-track:hover {
			background: rgba(0, 0, 0, 0.1); 
		}
		::-webkit-scrollbar-thumb:hover {
			background: rgba(100, 100, 100, 0.7); 
		}

		/* Remove top padding and margin from first child so that top of rendered text is aligned to top of text editor text */

		#rendered-md > h1:first-child,
		#rendered-md > h2:first-child,
		#rendered-md > h3:first-child,
		#rendered-md > h4:first-child,
		#rendered-md > ul:first-child,
		#rendered-md > ol:first-child,
		#rendered-md > table:first-child,
		#rendered-md > blockquote:first-child,
		#rendered-md > img:first-child,
		#rendered-md > p:first-child {
			margin-top: 0;
			padding-top: 0;
		}
		
		p, h1, h2, h3, h4, h5, h6, ul, table {
			margin-top: .6em;
			margin-bottom: .65em;
		}
		h1, h2, h3, h4, h5, h6 {
			line-height: 1.5em;
		}
		h1 {
			font-size: 1.5em;
			font-weight: bold;
			border-bottom: 1px solid ${theme.htmlDividerColor};
			padding-bottom: .3em;
		}
		h2 {
			font-size: 1.3em;
			font-weight: bold;
			padding-bottom: .1em; */
		}
		h3 {
			font-size: 1.1em;
		}
		h4, h5, h6 {
			font-size: 1em;
			font-weight: bold;
		}
		a {
			color: ${theme.htmlLinkColor};
		}
		ul, ol {
			padding-left: 0;
			margin-left: 1.7em;
		}
		li {
			margin-bottom: .4em;
		}
		li p {
			margin-top: 0.2em;
			margin-bottom: 0;
		}
		.resource-icon {
			display: inline-block;
			position: relative;
			top: .5em;
			text-decoration: none;
			width: 1.2em;
			height: 1.4em;
			margin-right: 0.4em;
			background-color:  ${theme.htmlLinkColor};
		}
    /* These icons are obtained from the wonderful ForkAwesome project by copying the src svgs 
     * into the css classes below.
     * svgs are obtained from https://github.com/ForkAwesome/Fork-Awesome/tree/master/src/icons/svg
     * instead of the svg width, height property you must use a viewbox here, 0 0 1536 1792 is typically the actual size of the icon
     * each line begins with the pre-amble -webkit-mask: url("data:image/svg+xml;utf8,
     * and of course finishes with ");
     * to precvent artifacts it is also necessary to include -webkit-mask-repeat: no-repeat;
     * on the following line
     * */
		.fa-joplin {
			/* Awesome Font file */
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M373.834 128C168.227 128 0 296.223 0 501.834v788.336C0 1495.778 168.227 1664 373.834 1664h788.336c205.608 0 373.83-168.222 373.83-373.83V501.834C1536 296.224 1367.778 128 1162.17 128zm397.222 205.431h417.424a7.132 7.132 0 0 1 7.132 7.133v132.552c0 4.461-3.619 8.073-8.077 8.073h-57.23c-24.168 0-43.768 19.338-44.284 43.374v2.377h-.017v136.191h-.053l-.466 509.375c-5.02 77.667-39.222 149.056-96.324 201.046-60.28 54.834-141.948 85.017-229.962 85.017-12.45 0-25.208-.61-37.907-1.785-92.157-8.682-181.494-48.601-251.662-112.438-71.99-65.517-117.147-150.03-127.164-238-11.226-98.763 23.42-192.783 95.045-257.937 81.99-74.637 198.185-101.768 316.613-75.704 5.574 1.227 9.55 6.282 9.55 11.997v199.52c-.199 2.625-1.481 6.599-8.183 2.896-.663-.365-1.194-.511-1.653-.531-21.987-10.587-45.159-17.57-68.559-19.916-.38-.04-.757-.124-1.138-.163-.537-.048-1.034-.033-1.556-.075-4.13-.354-8.183-.517-12.203-.58-.87-.011-1.771-.127-2.641-.127-.486 0-.951.05-1.437.057-1.464.011-2.886.115-4.33.163-2.76.102-5.497.211-8.182.448-.273.024-.547.07-.835.097-25.509 2.4-47.864 11.104-65.012 25.47-.954.802-1.974 1.53-2.9 2.36a1.34 1.34 0 0 1-.168.146c-23.96 21.8-34.881 53.872-30.726 90.316 4.62 40.737 26.94 81.156 62.841 113.823 35.908 32.67 80.335 52.977 125.113 57.186 35.118 3.36 66.547-3.919 89.899-20.461a97.255 97.255 0 0 0 9.365-7.501c2.925-2.661 5.569-5.5 8.086-8.416.3-.348.672-.673.975-1.024 8.253-9.864 14.222-21.067 17.996-33.148.639-2.034 1.051-4.148 1.564-6.227.381-1.563.81-3.106 1.112-4.693.555-2.784.923-5.632 1.253-8.49.086-.709.183-1.414.237-2.128.492-4.893.693-9.858.55-14.91h.013V521.623c-2.01-22.626-20.78-40.434-43.928-40.434h-57.23a8.071 8.071 0 0 1-8.077-8.073V340.564a7.132 7.132 0 0 1 7.136-7.133z'/></svg>");
		}
		.fa-file-image {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zm-128-448v320H256v-192l192-192 128 128 384-384zm-832-192c-106 0-192-86-192-192s86-192 192-192 192 86 192 192-86 192-192 192z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-pdf {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zm-514-593c25 20 53 38 84 56 42-5 81-7 117-7 67 0 152 8 177 49 7 10 13 28 2 52-1 1-2 3-3 4v1c-3 18-18 38-71 38-64 0-161-29-245-73-139 15-285 46-392 83-103 176-182 262-242 262-10 0-19-2-28-7l-24-12c-3-1-4-3-6-5-5-5-9-16-6-36 10-46 64-123 188-188 8-5 18-2 23 6 1 1 2 3 2 4 31-51 67-116 107-197 45-90 80-178 104-262-32-109-42-221-24-287 7-25 22-40 42-40h22c15 0 27 5 35 15 12 14 15 36 9 68-1 3-2 6-4 8 1 3 1 5 1 8v30c-1 63-2 123-14 192 35 105 87 190 146 238zm-576 411c30-14 73-57 137-158-75 58-122 124-137 158zm398-920c-10 28-10 76-2 132 3-16 5-31 7-44 2-17 5-31 7-43 1-3 2-5 4-8-1-1-1-3-2-5-1-18-7-29-13-36 0 2-1 3-1 4zm-124 661c88-35 186-63 284-81-10-8-20-15-29-23-49-43-93-103-127-176-19 61-47 126-83 197-15 28-30 56-45 83zm646-16c-5-5-31-24-140-24 49 18 94 28 124 28 9 0 14 0 18-1 0-1-1-2-2-3z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-word {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zM233 768v107h70l164 661h159l128-485c5-15 8-30 10-46 1-8 2-16 2-24h4l3 24c3 14 4 30 9 46l128 485h159l164-661h70V768h-300v107h90l-99 438c-4 16-6 33-7 46l-2 21h-4c0-6-2-14-3-21-3-13-5-30-9-46L825 768H711l-144 545c-4 16-5 33-8 46l-4 21h-4l-2-21c-1-13-3-30-7-46l-99-438h90V768H233z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-powerpoint {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zm-992-234v106h327v-106h-93v-167h137c43 0 82-2 118-15 90-31 146-124 146-233s-54-193-137-228c-38-15-84-19-130-19H416v107h92v555h-92zm353-280H650V882h120c35 0 62 6 83 18 36 21 56 62 56 115 0 56-20 99-62 120-21 10-47 15-78 15z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-excel {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zm-979-234v106h281v-106h-75l103-161c12-19 18-34 21-34h2c1 4 3 7 5 10 4 8 10 14 17 24l107 161h-76v106h291v-106h-68l-192-273 195-282h67V768H828v107h74l-103 159c-12 19-21 34-21 33h-2c-1-4-3-7-5-10-4-7-9-14-17-23L648 875h76V768H434v107h68l189 272-194 283h-68z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-audio {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zM620 850c12 5 20 17 20 30v544c0 13-8 25-20 30-4 1-8 2-12 2-8 0-16-3-23-9l-166-167H288c-18 0-32-14-32-32v-192c0-18 14-32 32-32h131l166-167c10-9 23-12 35-7zm417 689c19 0 37-8 50-24 83-102 129-231 129-363s-46-261-129-363c-22-28-63-32-90-10-28 23-32 63-9 91 65 80 100 178 100 282s-35 202-100 282c-23 28-19 68 9 90 12 10 26 15 40 15zm-211-148c17 0 34-7 47-20 56-60 87-137 87-219s-31-159-87-219c-24-26-65-27-91-3-25 24-27 65-2 91 33 36 52 82 52 131s-19 95-52 131c-25 26-23 67 2 91 13 11 29 17 44 17z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-video {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zM768 768c70 0 128 58 128 128v384c0 70-58 128-128 128H384c-70 0-128-58-128-128V896c0-70 58-128 128-128h384zm492 2c12 5 20 17 20 30v576c0 13-8 25-20 30-4 1-8 2-12 2-8 0-17-3-23-9l-265-266v-90l265-266c6-6 15-9 23-9 4 0 8 1 12 2z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-archive {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M640 384V256H512v128h128zm128 128V384H640v128h128zM640 640V512H512v128h128zm128 128V640H640v128h128zm700-388c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H768v128H640V128H128v1536h1280zM781 943c85 287 107 349 107 349 5 17 8 34 8 52 0 111-108 192-256 192s-256-81-256-192c0-18 3-35 8-52 0 0 21-62 120-396V768h128v128h79c29 0 54 19 62 47zm-141 465c71 0 128-29 128-64s-57-64-128-64-128 29-128 64 57 64 128 64z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-code {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zM480 768c11-14 31-17 45-6l51 38c14 11 17 31 6 45l-182 243 182 243c11 14 8 34-6 45l-51 38c-14 11-34 8-45-6l-226-301c-8-11-8-27 0-38zm802 301c8 11 8 27 0 38l-226 301c-11 14-31 17-45 6l-51-38c-14-11-17-31-6-45l182-243-182-243c-11-14-8-34 6-45l51-38c14-11 34-8 45 6zm-620 461c-18-3-29-20-26-37l138-831c3-18 20-29 37-26l63 10c18 3 29 20 26 37l-138 831c-3 18-20 29-37 26z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file-alt, .fa-file-csv {
      /* fork-awesome doesn't have csv so we use the text icon */
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280zM384 800c0-18 14-32 32-32h704c18 0 32 14 32 32v64c0 18-14 32-32 32H416c-18 0-32-14-32-32v-64zm736 224c18 0 32 14 32 32v64c0 18-14 32-32 32H416c-18 0-32-14-32-32v-64c0-18 14-32 32-32h704zm0 256c18 0 32 14 32 32v64c0 18-14 32-32 32H416c-18 0-32-14-32-32v-64c0-18 14-32 32-32h704z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		.fa-file {
			-webkit-mask: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1536 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1468 380c37 37 68 111 68 164v1152c0 53-43 96-96 96H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h896c53 0 127 31 164 68zm-444-244v376h376c-6-17-15-34-22-41l-313-313c-7-7-24-16-41-22zm384 1528V640H992c-53 0-96-43-96-96V128H128v1536h1280z'/></svg>");
      -webkit-mask-repeat: no-repeat;
		}
		blockquote {
			border-left: 4px solid ${theme.htmlCodeBorderColor};
			padding-left: 1.2em;
			margin-left: 0;
			opacity: .7;
		}
		table {
			text-align: left-align;
			border-collapse: collapse;
			border: 1px solid ${theme.htmlCodeBorderColor};
			background-color: ${theme.htmlBackgroundColor};
		}
		td, th {
			padding: .5em 1em .5em 1em;
			font-size: ${theme.htmlFontSize};
			color: ${theme.htmlColor};
			font-family: ${fontFamily};
		}
		td {
			border: 1px solid ${theme.htmlCodeBorderColor};
		}
		th {
			border: 1px solid ${theme.htmlCodeBorderColor};
			border-bottom: 2px solid ${theme.htmlCodeBorderColor};
			background-color: ${theme.htmlTableBackgroundColor};
		}
		tr:nth-child(even) {
			background-color: ${theme.htmlTableBackgroundColor};
		}
		tr:hover {
			background-color: ${theme.raisedBackgroundColor};
		}
		hr {
			border: none;
			border-bottom: 2px solid ${theme.htmlDividerColor};
		}
		img {
			max-width: 100%;
			height: auto;
		}
		
		.inline-code,
		.tox :not(.joplin-editable) code {
			border: 1px solid ${theme.htmlCodeBorderColor};
			background-color: ${theme.htmlCodeBackgroundColor};
			padding-right: .2em;
			padding-left: .2em;
			border-radius: .25em;
			color: ${theme.htmlCodeColor};
			font-size: ${theme.htmlCodeFontSize};
		}

		.highlighted-keyword {
			background-color: #F3B717;
			color: black;
		}

		.not-loaded-resource img {
			width: 1.15em;
			height: 1.15em;
			background: white;
			padding: 2px !important;
			border-radius: 2px;
			box-shadow: 0 1px 3px #000000aa;
		}

		a.not-loaded-resource img {
			margin-right: .2em;
		}

		a.not-loaded-resource {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.md-checkbox input[type=checkbox]:checked {
			opacity: 0.7;
		}

		.md-checkbox .checkbox-label-checked {
			opacity: 0.5;
		}

		.exported-note-title {
			font-size: 2.2em;
			font-weight: bold;
			margin-bottom: 1em;
		}

		.exported-note {
			padding: 1em;
		}

		.joplin-editable .joplin-source {
			display: none;
		}

		/* =============================================== */
		/* For TinyMCE */
		/* =============================================== */

		.mce-content-body {
			/* Note: we give a bit more padding at the bottom, to allow scrolling past the end of the document */
			padding: 5px 10px 10em 10px;
		}

		.mce-content-body code {
			background-color: transparent;
		}

		.mce-content-body [data-mce-selected=inline-boundary] {
			background-color: transparent;
		}

		.mce-content-body .joplin-editable {
			cursor: pointer !important;
		}

		.mce-content-body.mce-content-readonly {
			opacity: 0.5;
		}

		/* We need that to make sure click events have the A has a target */
		.katex a span {
			pointer-events: none;
		}

		/* =============================================== */
		/* For TinyMCE */
		/* =============================================== */

		@media print {
			body {
				height: auto !important;
			}

			pre {
				white-space: pre-wrap;
			}

			.code, .inline-code {
				border: 1px solid #CBCBCB;
			}

			#joplin-container-content {
				/* The height of the content is set dynamically by JavaScript (in updateBodyHeight) to go
				   around various issues related to scrolling. However when printing we don't want this
				   fixed size as that would crop the content. So we set it to auto here. "important" is
				   needed to override the style set by JavaScript at the element-level. */
				height: auto !important;
			}
		}
	`;

	return [css];
};

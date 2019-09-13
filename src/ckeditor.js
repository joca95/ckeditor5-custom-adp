/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import SubScript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import SuperScript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Code,
	StrikeThrough,
	SubScript,
	SuperScript,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	FontColor,
	FontFamily,
	FontSize,
	FontBackgroundColor
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	fontFamily: {
		options: [
			'default',
			'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif'
		]
	},
	fontSize: {
		options: ['tiny', 'default', 'big']
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'WHITE'
			},
			{
				color: 'hsl(0, 0%, 75%)',
				label: 'SILVER'
			},
			{
				color: 'hsl(0, 0%, 50%)',
				label: 'GRAY'
			},
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'BLACK'
			},
			{
				color: 'hsl(0, 100%, 50%)',
				label: 'RED'
			},
			{
				color: 'hsl(0, 100%, 25%)',
				label: 'MAROON'
			},
			{
				color: 'hsl(60, 100%, 50%)',
				label: 'YELLOW'
			},
			{
				color: 'hsl(0, 100%, 25%)',
				label: 'OLIVE'
			},
			{
				color: 'hsl(120, 100%, 50%)',
				label: 'LIME'
			},
			{
				color: 'hsl(120, 100%, 25%)',
				label: 'GREEN'
			},
			{
				color: 'hsl(180, 100%, 50%)',
				label: 'AQUA'
			},
			{
				color: 'hsl(180, 100%, 25%)',
				label: 'TEAL'
			},
			{
				color: 'hsl(240, 100%, 50%)',
				label: 'BLUE'
			},
			{
				color: 'hsl(240, 100%, 25%)',
				label: 'NAVY'
			},
			{
				color: 'hsl(300, 100%, 50%)',
				label: 'FUCHSIA'
			},
			{
				color: 'hsl(300, 100%, 25%)',
				label: 'PURPLE'
			},
		]
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'WHITE'
			},
			{
				color: 'hsl(0, 0%, 75%)',
				label: 'SILVER'
			},
			{
				color: 'hsl(0, 0%, 50%)',
				label: 'GRAY'
			},
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'BLACK'
			},
			{
				color: 'hsl(0, 100%, 50%)',
				label: 'RED'
			},
			{
				color: 'hsl(0, 100%, 25%)',
				label: 'MAROON'
			},
			{
				color: 'hsl(60, 100%, 50%)',
				label: 'YELLOW'
			},
			{
				color: 'hsl(0, 100%, 25%)',
				label: 'OLIVE'
			},
			{
				color: 'hsl(120, 100%, 50%)',
				label: 'LIME'
			},
			{
				color: 'hsl(120, 100%, 25%)',
				label: 'GREEN'
			},
			{
				color: 'hsl(180, 100%, 50%)',
				label: 'AQUA'
			},
			{
				color: 'hsl(180, 100%, 25%)',
				label: 'TEAL'
			},
			{
				color: 'hsl(240, 100%, 50%)',
				label: 'BLUE'
			},
			{
				color: 'hsl(240, 100%, 25%)',
				label: 'NAVY'
			},
			{
				color: 'hsl(300, 100%, 50%)',
				label: 'FUCHSIA'
			},
			{
				color: 'hsl(300, 100%, 25%)',
				label: 'PURPLE'
			},
		]
	},
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

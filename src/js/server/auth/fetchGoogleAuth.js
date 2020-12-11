// Працює тільки на залогінення

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://callboard-backend.herokuapp.com/auth/google", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// <!DOCTYPE html>
// <html lang="uk">

// <head>
// 	<meta charset="utf-8">
// 	<meta content="width=300, initial-scale=1" name="viewport">
// 	<meta name="google-site-verification" content="LrdTUW9psUAMbh4Ia074-BPEVmcpBxF6Gwf0MSgQXZs">
// 	<title>Вхід – Облікові записи Google</title>
// 	<style>
// 		@font-face {
// 			font-family: 'Open Sans';
// 			font-style: normal;
// 			font-weight: 300;
// 			src: url(//fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN_r8OVuhs.ttf) format('truetype');
// 		}

// 		@font-face {
// 			font-family: 'Open Sans';
// 			font-style: normal;
// 			font-weight: 400;
// 			src: url(//fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFUZ0e.ttf) format('truetype');
// 		}
// 	</style>
// 	<style>
// 		h1,
// 		h2 {
// 			-webkit-animation-duration: 0.1s;
// 			-webkit-animation-name: fontfix;
// 			-webkit-animation-iteration-count: 1;
// 			-webkit-animation-timing-function: linear;
// 			-webkit-animation-delay: 0;
// 		}

// 		@-webkit-keyframes fontfix {
// 			from {
// 				opacity: 1;
// 			}

// 			to {
// 				opacity: 1;
// 			}
// 		}
// 	</style>
// 	<style>
// 		html,
// 		body {
// 			font-family: Arial, sans-serif;
// 			background: #fff;
// 			margin: 0;
// 			padding: 0;
// 			border: 0;
// 			position: absolute;
// 			height: 100%;
// 			min-width: 100%;
// 			font-size: 13px;
// 			color: #404040;
// 			direction: ltr;
// 			-webkit-text-size-adjust: none;
// 		}

// 		button,
// 		input[type=button],
// 		input[type=submit] {
// 			font-family: Arial, sans-serif;
// 			font-size: 13px;
// 		}

// 		a,
// 		a:hover,
// 		a:visited {
// 			color: #427fed;
// 			cursor: pointer;
// 			text-decoration: none;
// 		}

// 		a:hover {
// 			text-decoration: underline;
// 		}

// 		h1 {
// 			font-size: 20px;
// 			color: #262626;
// 			margin: 0 0 15px;
// 			font-weight: normal;
// 		}

// 		h2 {
// 			font-size: 14px;
// 			color: #262626;
// 			margin: 0 0 15px;
// 			font-weight: bold;
// 		}

// 		input[type=email],
// 		input[type=number],
// 		input[type=password],
// 		input[type=tel],
// 		input[type=text],
// 		input[type=url] {
// 			-moz-appearance: none;
// 			-webkit-appearance: none;
// 			appearance: none;
// 			display: inline-block;
// 			height: 36px;
// 			padding: 0 8px;
// 			margin: 0;
// 			background: #fff;
// 			border: 1px solid #d9d9d9;
// 			border-top: 1px solid #c0c0c0;
// 			-moz-box-sizing: border-box;
// 			-webkit-box-sizing: border-box;
// 			box-sizing: border-box;
// 			-moz-border-radius: 1px;
// 			-webkit-border-radius: 1px;
// 			border-radius: 1px;
// 			font-size: 15px;
// 			color: #404040;
// 		}

// 		input[type=email]:hover,
// 		input[type=number]:hover,
// 		input[type=password]:hover,
// 		input[type=tel]:hover,
// 		input[type=text]:hover,
// 		input[type=url]:hover {
// 			border: 1px solid #b9b9b9;
// 			border-top: 1px solid #a0a0a0;
// 			-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
// 			-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
// 			box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
// 		}

// 		input[type=email]:focus,
// 		input[type=number]:focus,
// 		input[type=password]:focus,
// 		input[type=tel]:focus,
// 		input[type=text]:focus,
// 		input[type=url]:focus {
// 			outline: none;
// 			border: 1px solid #4d90fe;
// 			-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 			-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 			box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 		}

// 		input[type=checkbox],
// 		input[type=radio] {
// 			-webkit-appearance: none;
// 			display: inline-block;
// 			width: 13px;
// 			height: 13px;
// 			margin: 0;
// 			cursor: pointer;
// 			vertical-align: bottom;
// 			background: #fff;
// 			border: 1px solid #c6c6c6;
// 			-moz-border-radius: 1px;
// 			-webkit-border-radius: 1px;
// 			border-radius: 1px;
// 			-moz-box-sizing: border-box;
// 			-webkit-box-sizing: border-box;
// 			box-sizing: border-box;
// 			position: relative;
// 		}

// 		input[type=checkbox]:active,
// 		input[type=radio]:active {
// 			background: #ebebeb;
// 		}

// 		input[type=checkbox]:hover {
// 			border-color: #c6c6c6;
// 			-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
// 			-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
// 			box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
// 		}

// 		input[type=radio] {
// 			-moz-border-radius: 1em;
// 			-webkit-border-radius: 1em;
// 			border-radius: 1em;
// 			width: 15px;
// 			height: 15px;
// 		}

// 		input[type=checkbox]:checked,
// 		input[type=radio]:checked {
// 			background: #fff;
// 		}

// 		input[type=radio]:checked::after {
// 			content: '';
// 			display: block;
// 			position: relative;
// 			top: 3px;
// 			left: 3px;
// 			width: 7px;
// 			height: 7px;
// 			background: #666;
// 			-moz-border-radius: 1em;
// 			-webkit-border-radius: 1em;
// 			border-radius: 1em;
// 		}

// 		input[type=checkbox]:checked::after {
// 			content: url(https://ssl.gstatic.com/ui/v1/menu/checkmark.png);
// 			display: block;
// 			position: absolute;
// 			top: -6px;
// 			left: -5px;
// 		}

// 		input[type=checkbox]:focus {
// 			outline: none;
// 			border-color: #4d90fe;
// 		}

// 		.stacked-label {
// 			display: block;
// 			font-weight: bold;
// 			margin: .5em 0;
// 		}

// 		.hidden-label {
// 			position: absolute !important;
// 			clip: rect(1px 1px 1px 1px);
// 			/* IE6, IE7 */
// 			clip: rect(1px, 1px, 1px, 1px);
// 			height: 0px;
// 			width: 0px;
// 			overflow: hidden;
// 			visibility: hidden;
// 		}

// 		input[type=checkbox].form-error,
// 		input[type=email].form-error,
// 		input[type=number].form-error,
// 		input[type=password].form-error,
// 		input[type=text].form-error,
// 		input[type=tel].form-error,
// 		input[type=url].form-error {
// 			border: 1px solid #dd4b39;
// 		}

// 		.error-msg {
// 			margin: .5em 0;
// 			display: block;
// 			color: #dd4b39;
// 			line-height: 17px;
// 		}

// 		.help-link {
// 			background: #dd4b39;
// 			padding: 0 5px;
// 			color: #fff;
// 			font-weight: bold;
// 			display: inline-block;
// 			-moz-border-radius: 1em;
// 			-webkit-border-radius: 1em;
// 			border-radius: 1em;
// 			text-decoration: none;
// 			position: relative;
// 			top: 0px;
// 		}

// 		.help-link:visited {
// 			color: #fff;
// 		}

// 		.help-link:hover {
// 			color: #fff;
// 			background: #c03523;
// 			text-decoration: none;
// 		}

// 		.help-link:active {
// 			opacity: 1;
// 			background: #ae2817;
// 		}

// 		.wrapper {
// 			position: relative;
// 			min-height: 100%;
// 		}

// 		.content {
// 			padding: 0 44px;
// 		}

// 		.main {
// 			padding-bottom: 100px;
// 		}

// 		/* For modern browsers */
// 		.clearfix:before,
// 		.clearfix:after {
// 			content: "";
// 			display: table;
// 		}

// 		.clearfix:after {
// 			clear: both;
// 		}

// 		/* For IE 6/7 (trigger hasLayout) */
// 		.clearfix {
// 			zoom: 1;
// 		}

// 		.google-header-bar {
// 			height: 71px;
// 			border-bottom: 1px solid #e5e5e5;
// 			overflow: hidden;
// 		}

// 		.header .logo {
// 			background-image: url(https://ssl.gstatic.com/accounts/ui/logo_1x.png);
// 			background-size: 116px 38px;
// 			background-repeat: no-repeat;
// 			margin: 17px 0 0;
// 			float: left;
// 			height: 38px;
// 			width: 116px;
// 		}

// 		.header .logo-w {
// 			background-image: url(https://ssl.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_112x36dp.png);
// 			background-size: 112px 36px;
// 			margin: 21px 0 0;
// 		}

// 		.header .secondary-link {
// 			margin: 28px 0 0;
// 			float: right;
// 		}

// 		.header .secondary-link a {
// 			font-weight: normal;
// 		}

// 		.google-header-bar.centered {
// 			border: 0;
// 			height: 108px;
// 		}

// 		.google-header-bar.centered .header .logo {
// 			float: none;
// 			margin: 40px auto 30px;
// 			display: block;
// 		}

// 		.google-header-bar.centered .header .secondary-link {
// 			display: none
// 		}

// 		.google-footer-bar {
// 			position: absolute;
// 			bottom: 0;
// 			height: 35px;
// 			width: 100%;
// 			border-top: 1px solid #e5e5e5;
// 			overflow: hidden;
// 		}

// 		.footer {
// 			padding-top: 7px;
// 			font-size: .85em;
// 			white-space: nowrap;
// 			line-height: 0;
// 		}

// 		.footer ul {
// 			float: left;
// 			max-width: 80%;
// 			min-height: 16px;
// 			padding: 0;
// 		}

// 		.footer ul li {
// 			color: #737373;
// 			display: inline;
// 			padding: 0;
// 			padding-right: 1.5em;
// 		}

// 		.footer a {
// 			color: #737373;
// 		}

// 		.lang-chooser-wrap {
// 			float: right;
// 			display: inline;
// 		}

// 		.lang-chooser-wrap img {
// 			vertical-align: top;
// 		}

// 		.lang-chooser {
// 			font-size: 13px;
// 			height: 24px;
// 			line-height: 24px;
// 		}

// 		.lang-chooser option {
// 			font-size: 13px;
// 			line-height: 24px;
// 		}

// 		.hidden {
// 			height: 0px;
// 			width: 0px;
// 			overflow: hidden;
// 			visibility: hidden;
// 			display: none !important;
// 		}

// 		.banner {
// 			text-align: center;
// 		}

// 		.card {
// 			background-color: #f7f7f7;
// 			padding: 20px 25px 30px;
// 			margin: 0 auto 25px;
// 			width: 304px;
// 			-moz-border-radius: 2px;
// 			-webkit-border-radius: 2px;
// 			border-radius: 2px;
// 			-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
// 			-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
// 			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
// 		}

// 		.card>*:first-child {
// 			margin-top: 0;
// 		}

// 		.rc-button,
// 		.rc-button:visited {
// 			display: inline-block;
// 			min-width: 46px;
// 			text-align: center;
// 			color: #444;
// 			font-size: 14px;
// 			font-weight: 700;
// 			height: 36px;
// 			padding: 0 8px;
// 			line-height: 36px;
// 			-moz-border-radius: 3px;
// 			-webkit-border-radius: 3px;
// 			border-radius: 3px;
// 			-o-transition: all 0.218s;
// 			-moz-transition: all 0.218s;
// 			-webkit-transition: all 0.218s;
// 			transition: all 0.218s;
// 			border: 1px solid #dcdcdc;
// 			background-color: #f5f5f5;
// 			background-image: -webkit-linear-gradient(top, #f5f5f5, #f1f1f1);
// 			background-image: -moz-linear-gradient(top, #f5f5f5, #f1f1f1);
// 			background-image: -ms-linear-gradient(top, #f5f5f5, #f1f1f1);
// 			background-image: -o-linear-gradient(top, #f5f5f5, #f1f1f1);
// 			background-image: linear-gradient(top, #f5f5f5, #f1f1f1);
// 			-o-transition: none;
// 			-moz-user-select: none;
// 			-webkit-user-select: none;
// 			user-select: none;
// 			cursor: default;
// 		}

// 		.card .rc-button {
// 			width: 100%;
// 			padding: 0;
// 		}

// 		.rc-button.disabled,
// 		.rc-button[disabled] {
// 			opacity: .5;
// 			filter: alpha(opacity=50);
// 			cursor: default;
// 			pointer-events: none;
// 		}

// 		.rc-button:hover {
// 			border: 1px solid #c6c6c6;
// 			color: #333;
// 			text-decoration: none;
// 			-o-transition: all 0.0s;
// 			-moz-transition: all 0.0s;
// 			-webkit-transition: all 0.0s;
// 			transition: all 0.0s;
// 			background-color: #f8f8f8;
// 			background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
// 			background-image: -moz-linear-gradient(top, #f8f8f8, #f1f1f1);
// 			background-image: -ms-linear-gradient(top, #f8f8f8, #f1f1f1);
// 			background-image: -o-linear-gradient(top, #f8f8f8, #f1f1f1);
// 			background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
// 			-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
// 			-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
// 			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
// 		}

// 		.rc-button:active {
// 			background-color: #f6f6f6;
// 			background-image: -webkit-linear-gradient(top, #f6f6f6, #f1f1f1);
// 			background-image: -moz-linear-gradient(top, #f6f6f6, #f1f1f1);
// 			background-image: -ms-linear-gradient(top, #f6f6f6, #f1f1f1);
// 			background-image: -o-linear-gradient(top, #f6f6f6, #f1f1f1);
// 			background-image: linear-gradient(top, #f6f6f6, #f1f1f1);
// 			-moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
// 			-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
// 			box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
// 		}

// 		.rc-button-submit,
// 		.rc-button-submit:visited {
// 			border: 1px solid #3079ed;
// 			color: #fff;
// 			text-shadow: 0 1px rgba(0, 0, 0, 0.1);
// 			background-color: #4d90fe;
// 			background-image: -webkit-linear-gradient(top, #4d90fe, #4787ed);
// 			background-image: -moz-linear-gradient(top, #4d90fe, #4787ed);
// 			background-image: -ms-linear-gradient(top, #4d90fe, #4787ed);
// 			background-image: -o-linear-gradient(top, #4d90fe, #4787ed);
// 			background-image: linear-gradient(top, #4d90fe, #4787ed);
// 		}

// 		.rc-button-submit:hover {
// 			border: 1px solid #2f5bb7;
// 			color: #fff;
// 			text-shadow: 0 1px rgba(0, 0, 0, 0.3);
// 			background-color: #357ae8;
// 			background-image: -webkit-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: -moz-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: -ms-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: -o-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: linear-gradient(top, #4d90fe, #357ae8);
// 		}

// 		.rc-button-submit:active {
// 			background-color: #357ae8;
// 			background-image: -webkit-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: -moz-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: -ms-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: -o-linear-gradient(top, #4d90fe, #357ae8);
// 			background-image: linear-gradient(top, #4d90fe, #357ae8);
// 			-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 			-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 			box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 		}

// 		.rc-button-red,
// 		.rc-button-red:visited {
// 			border: 1px solid transparent;
// 			color: #fff;
// 			text-shadow: 0 1px rgba(0, 0, 0, 0.1);
// 			background-color: #d14836;
// 			background-image: -webkit-linear-gradient(top, #dd4b39, #d14836);
// 			background-image: -moz-linear-gradient(top, #dd4b39, #d14836);
// 			background-image: -ms-linear-gradient(top, #dd4b39, #d14836);
// 			background-image: -o-linear-gradient(top, #dd4b39, #d14836);
// 			background-image: linear-gradient(top, #dd4b39, #d14836);
// 		}

// 		.rc-button-red:hover {
// 			border: 1px solid #b0281a;
// 			color: #fff;
// 			text-shadow: 0 1px rgba(0, 0, 0, 0.3);
// 			background-color: #c53727;
// 			background-image: -webkit-linear-gradient(top, #dd4b39, #c53727);
// 			background-image: -moz-linear-gradient(top, #dd4b39, #c53727);
// 			background-image: -ms-linear-gradient(top, #dd4b39, #c53727);
// 			background-image: -o-linear-gradient(top, #dd4b39, #c53727);
// 			background-image: linear-gradient(top, #dd4b39, #c53727);
// 		}

// 		.rc-button-red:active {
// 			border: 1px solid #992a1b;
// 			background-color: #b0281a;
// 			background-image: -webkit-linear-gradient(top, #dd4b39, #b0281a);
// 			background-image: -moz-linear-gradient(top, #dd4b39, #b0281a);
// 			background-image: -ms-linear-gradient(top, #dd4b39, #b0281a);
// 			background-image: -o-linear-gradient(top, #dd4b39, #b0281a);
// 			background-image: linear-gradient(top, #dd4b39, #b0281a);
// 			-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 			-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 			box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
// 		}

// 		.secondary-actions {
// 			text-align: center;
// 		}
// 	</style>
// 	<style media="screen and (max-width: 800px), screen and (max-height: 800px)">
// 		.google-header-bar.centered {
// 			height: 83px;
// 		}

// 		.google-header-bar.centered .header .logo {
// 			margin: 25px auto 20px;
// 		}

// 		.card {
// 			margin-bottom: 20px;
// 		}
// 	</style>
// 	<style media="screen and (max-width: 580px)">
// 		html,
// 		body {
// 			font-size: 14px;
// 		}

// 		.google-header-bar.centered {
// 			height: 73px;
// 		}

// 		.google-header-bar.centered .header .logo {
// 			margin: 20px auto 15px;
// 		}

// 		.content {
// 			padding-left: 10px;
// 			padding-right: 10px;
// 		}

// 		.hidden-small {
// 			display: none;
// 		}

// 		.card {
// 			padding: 20px 15px 30px;
// 			width: 270px;
// 		}

// 		.footer ul li {
// 			padding-right: 1em;
// 		}

// 		.lang-chooser-wrap {
// 			display: none;
// 		}
// 	</style>
// 	<style
// 		media="screen and (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5)">
// 		.header .logo {
// 			background-image: url(https://ssl.gstatic.com/accounts/ui/logo_2x.png);
// 		}

// 		.header .logo-w {
// 			background-image: url(https://ssl.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_112x36dp.png);
// 		}
// 	</style>
// 	<style>
// 		pre.debug {
// 			font-family: monospace;
// 			position: absolute;
// 			left: 0;
// 			margin: 0;
// 			padding: 1.5em;
// 			font-size: 13px;
// 			background: #f1f1f1;
// 			border-top: 1px solid #e5e5e5;
// 			direction: ltr;
// 			white-space: pre-wrap;
// 			width: 90%;
// 			overflow: hidden;
// 		}
// 	</style>
// 	<style>
// 		.banner h1 {
// 			font-family: 'Open Sans', arial;
// 			-webkit-font-smoothing: antialiased;
// 			color: #555;
// 			font-size: 42px;
// 			font-weight: 300;
// 			margin-top: 0;
// 			margin-bottom: 20px;
// 		}

// 		.banner h2 {
// 			font-family: 'Open Sans', arial;
// 			-webkit-font-smoothing: antialiased;
// 			color: #555;
// 			font-size: 18px;
// 			font-weight: 400;
// 			margin-bottom: 20px;
// 		}

// 		.signin-card {
// 			width: 274px;
// 			padding: 40px 40px;
// 		}

// 		.signin-card .profile-img {
// 			width: 96px;
// 			height: 96px;
// 			margin: 0 auto 10px;
// 			display: block;
// 			-moz-border-radius: 50%;
// 			-webkit-border-radius: 50%;
// 			border-radius: 50%;
// 		}

// 		.signin-card .profile-name {
// 			font-size: 16px;
// 			font-weight: bold;
// 			text-align: center;
// 			margin: 10px 0 0;
// 			min-height: 1em;
// 		}

// 		.signin-card .profile-email {
// 			font-size: 16px;
// 			text-align: center;
// 			margin: 10px 0 20px 0;
// 			min-height: 1em;
// 		}

// 		.signin-card input[type=email],
// 		.signin-card input[type=password],
// 		.signin-card input[type=text],
// 		.signin-card input[type=submit] {
// 			width: 100%;
// 			display: block;
// 			margin-bottom: 10px;
// 			z-index: 1;
// 			position: relative;
// 			-moz-box-sizing: border-box;
// 			-webkit-box-sizing: border-box;
// 			box-sizing: border-box;
// 		}

// 		.signin-card #Email,
// 		.signin-card #Passwd,
// 		.signin-card .captcha {
// 			direction: ltr;
// 			height: 44px;
// 			font-size: 16px;
// 		}

// 		.signin-card #Email+.stacked-label {
// 			margin-top: 15px;
// 		}

// 		.signin-card #reauthEmail {
// 			display: block;
// 			margin-bottom: 10px;
// 			line-height: 36px;
// 			padding: 0 8px;
// 			font-size: 15px;
// 			color: #404040;
// 			line-height: 2;
// 			margin-bottom: 10px;
// 			font-size: 14px;
// 			text-align: center;
// 			overflow: hidden;
// 			text-overflow: ellipsis;
// 			white-space: nowrap;
// 			-moz-box-sizing: border-box;
// 			-webkit-box-sizing: border-box;
// 			box-sizing: border-box;
// 		}

// 		.one-google p {
// 			margin: 0 0 10px;
// 			color: #555;
// 			font-size: 14px;
// 			text-align: center;
// 		}

// 		.one-google p.create-account,
// 		.one-google p.switch-account {
// 			margin-bottom: 60px;
// 		}

// 		.one-google .logo-strip {
// 			background-repeat: no-repeat;
// 			display: block;
// 			margin: 10px auto;
// 			background-image: url(https://ssl.gstatic.com/accounts/ui/wlogostrip_230x17_1x.png);
// 			background-size: 230px 17px;
// 			width: 230px;
// 			height: 17px;
// 		}
// 	</style>
// 	<style media="screen and (max-width: 800px), screen and (max-height: 800px)">
// 		.banner h1 {
// 			font-size: 38px;
// 			margin-bottom: 15px;
// 		}

// 		.banner h2 {
// 			margin-bottom: 15px;
// 		}

// 		.one-google p.create-account,
// 		.one-google p.switch-account {
// 			margin-bottom: 30px;
// 		}

// 		.signin-card #Email {
// 			margin-bottom: 0;
// 		}

// 		.signin-card #Passwd {
// 			margin-top: -1px;
// 		}

// 		.signin-card #Email.form-error,
// 		.signin-card #Passwd.form-error {
// 			z-index: 2;
// 		}

// 		.signin-card #Email:hover,
// 		.signin-card #Email:focus,
// 		.signin-card #Passwd:hover,
// 		.signin-card #Passwd:focus {
// 			z-index: 3;
// 		}
// 	</style>
// 	<style media="screen and (max-width: 580px)">
// 		.banner h1 {
// 			font-size: 22px;
// 			margin-bottom: 15px;
// 		}

// 		.signin-card {
// 			width: 260px;
// 			padding: 20px 20px;
// 			margin: 0 auto 20px;
// 		}

// 		.signin-card .profile-img {
// 			width: 72px;
// 			height: 72px;
// 			-moz-border-radius: 72px;
// 			-webkit-border-radius: 72px;
// 			border-radius: 72px;
// 		}
// 	</style>
// 	<style
// 		media="screen and (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5)">
// 		.one-google .logo-strip {
// 			background-image: url(https://ssl.gstatic.com/accounts/ui/wlogostrip_230x17_2x.png);
// 		}
// 	</style>
// 	<style>
// 		.remember .bubble-wrap {
// 			position: absolute;
// 			padding-top: 3px;
// 			-o-transition: opacity .218s ease-in .218s;
// 			-moz-transition: opacity .218s ease-in .218s;
// 			-webkit-transition: opacity .218s ease-in .218s;
// 			transition: opacity .218s ease-in .218s;
// 			left: -999em;
// 			opacity: 0;
// 			width: 314px;
// 			margin-left: -20px;
// 		}

// 		.remember:hover .bubble-wrap,
// 		.remember input:focus~.bubble-wrap,
// 		.remember .bubble-wrap:hover,
// 		.remember .bubble-wrap:focus {
// 			opacity: 1;
// 			left: inherit;
// 		}

// 		.bubble-pointer {
// 			border-left: 10px solid transparent;
// 			border-right: 10px solid transparent;
// 			border-bottom: 10px solid #fff;
// 			width: 0;
// 			height: 0;
// 			margin-left: 17px;
// 		}

// 		.bubble {
// 			background-color: #fff;
// 			padding: 15px;
// 			margin-top: -1px;
// 			font-size: 11px;
// 			-moz-border-radius: 2px;
// 			-webkit-border-radius: 2px;
// 			border-radius: 2px;
// 			-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
// 			-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
// 			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
// 		}

// 		#stay-signed-in {
// 			float: left;
// 		}

// 		#stay-signed-in-tooltip {
// 			left: auto;
// 			margin-left: -20px;
// 			padding-top: 3px;
// 			position: absolute;
// 			top: 0;
// 			visibility: hidden;
// 			width: 314px;
// 			z-index: 1;
// 		}

// 		.dasher-tooltip {
// 			top: 380px;
// 		}
// 	</style>
// 	<style media="screen and (max-width: 800px), screen and (max-height: 800px)">
// 		.dasher-tooltip {
// 			top: 340px;
// 		}
// 	</style>
// 	<style>
// 		.jfk-tooltip {
// 			background-color: #fff;
// 			border: 1px solid;
// 			color: #737373;
// 			font-size: 12px;
// 			position: absolute;
// 			z-index: 800 !important;
// 			border-color: #bbb #bbb #a8a8a8;
// 			padding: 16px;
// 			width: 250px;
// 		}

// 		.jfk-tooltip h3 {
// 			color: #555;
// 			font-size: 12px;
// 			margin: 0 0 .5em;
// 		}

// 		.jfk-tooltip-content p:last-child {
// 			margin-bottom: 0;
// 		}

// 		.jfk-tooltip-arrow {
// 			position: absolute;
// 		}

// 		.jfk-tooltip-arrow .jfk-tooltip-arrowimplbefore,
// 		.jfk-tooltip-arrow .jfk-tooltip-arrowimplafter {
// 			display: block;
// 			height: 0;
// 			position: absolute;
// 			width: 0;
// 		}

// 		.jfk-tooltip-arrow .jfk-tooltip-arrowimplbefore {
// 			border: 9px solid;
// 		}

// 		.jfk-tooltip-arrow .jfk-tooltip-arrowimplafter {
// 			border: 8px solid;
// 		}

// 		.jfk-tooltip-arrowdown {
// 			bottom: 0;
// 		}

// 		.jfk-tooltip-arrowup {
// 			top: -9px;
// 		}

// 		.jfk-tooltip-arrowleft {
// 			left: -9px;
// 			top: 30px;
// 		}

// 		.jfk-tooltip-arrowright {
// 			right: 0;
// 			top: 30px;
// 		}

// 		.jfk-tooltip-arrowdown .jfk-tooltip-arrowimplbefore,
// 		.jfk-tooltip-arrowup .jfk-tooltip-arrowimplbefore {
// 			border-color: #bbb transparent;
// 			left: -9px;
// 		}

// 		.jfk-tooltip-arrowdown .jfk-tooltip-arrowimplbefore {
// 			border-color: #a8a8a8 transparent;
// 		}

// 		.jfk-tooltip-arrowdown .jfk-tooltip-arrowimplafter,
// 		.jfk-tooltip-arrowup .jfk-tooltip-arrowimplafter {
// 			border-color: #fff transparent;
// 			left: -8px;
// 		}

// 		.jfk-tooltip-arrowdown .jfk-tooltip-arrowimplbefore {
// 			border-bottom-width: 0;
// 		}

// 		.jfk-tooltip-arrowdown .jfk-tooltip-arrowimplafter {
// 			border-bottom-width: 0;
// 		}

// 		.jfk-tooltip-arrowup .jfk-tooltip-arrowimplbefore {
// 			border-top-width: 0;
// 		}

// 		.jfk-tooltip-arrowup .jfk-tooltip-arrowimplafter {
// 			border-top-width: 0;
// 			top: 1px;
// 		}

// 		.jfk-tooltip-arrowleft .jfk-tooltip-arrowimplbefore,
// 		.jfk-tooltip-arrowright .jfk-tooltip-arrowimplbefore {
// 			border-color: transparent #bbb;
// 			top: -9px;
// 		}

// 		.jfk-tooltip-arrowleft .jfk-tooltip-arrowimplafter,
// 		.jfk-tooltip-arrowright .jfk-tooltip-arrowimplafter {
// 			border-color: transparent #fff;
// 			top: -8px;
// 		}

// 		.jfk-tooltip-arrowleft .jfk-tooltip-arrowimplbefore {
// 			border-left-width: 0;
// 		}

// 		.jfk-tooltip-arrowleft .jfk-tooltip-arrowimplafter {
// 			border-left-width: 0;
// 			left: 1px;
// 		}

// 		.jfk-tooltip-arrowright .jfk-tooltip-arrowimplbefore {
// 			border-right-width: 0;
// 		}

// 		.jfk-tooltip-arrowright .jfk-tooltip-arrowimplafter {
// 			border-right-width: 0;
// 		}

// 		.jfk-tooltip-closebtn {
// 			background: url("//ssl.gstatic.com/ui/v1/icons/common/x_8px.png") no-repeat;
// 			border: 1px solid transparent;
// 			height: 21px;
// 			opacity: .4;
// 			outline: 0;
// 			position: absolute;
// 			right: 2px;
// 			top: 2px;
// 			width: 21px;
// 		}

// 		.jfk-tooltip-closebtn:focus,
// 		.jfk-tooltip-closebtn:hover {
// 			opacity: .8;
// 			cursor: pointer;
// 		}

// 		.jfk-tooltip-closebtn:focus {
// 			border-color: #4d90fe;
// 		}
// 	</style>
// 	<style media="screen and (max-width: 580px)">
// 		.jfk-tooltip {
// 			display: none;
// 		}
// 	</style>
// 	<style type="text/css">
// 		.captcha-box {
// 			background: #fff;
// 			margin: 0 0 10px;
// 			overflow: hidden;
// 			padding: 10px;
// 		}

// 		.captcha-box .captcha-img {
// 			text-align: center;
// 		}

// 		.captcha-box .captcha-label {
// 			font-weight: bold;
// 			display: block;
// 			margin: .5em 0;
// 		}

// 		.captcha-box .captcha-msg {
// 			color: #999;
// 			display: block;
// 			position: relative;
// 		}

// 		.captcha-box .captcha-msg .accessibility-logo {
// 			float: right;
// 			border: 0;
// 		}

// 		.captcha-box .audio-box {
// 			position: absolute;
// 			top: 0;
// 		}
// 	</style>
// 	<style>
// 		.chromiumsync-custom-content {
// 			padding-top: 20px;
// 			margin-bottom: 0;
// 		}

// 		.form-panel {
// 			-webkit-box-sizing: border-box;
// 			box-sizing: border-box;
// 			-webkit-transform: translateZ(0);
// 			-moz-transform: translateZ(0);
// 			-ms-transform: translateZ(0);
// 			-o-transform: translateZ(0);
// 			transform: translateZ(0);
// 			width: 100%;
// 		}

// 		.form-panel.first {
// 			z-index: 2;
// 		}

// 		.form-panel.second {
// 			z-index: 1;
// 		}

// 		.shift-form .form-panel.first {
// 			z-index: 1;
// 		}

// 		.shift-form .form-panel.second {
// 			z-index: 2;
// 		}

// 		.slide-in,
// 		.slide-out {
// 			display: block;
// 			-webkit-transition-property: -webkit-transform, opacity;
// 			-moz-transition-property: -moz-transform, opacity;
// 			-ms-transition-property: -ms-transform, opacity;
// 			-o-transition-property: -o-transform, opacity;
// 			transition-property: transform, opacity;
// 			-webkit-transition-duration: 0.1s;
// 			-moz-transition-duration: 0.1s;
// 			-ms-transition-duration: 0.1s;
// 			-o-transition-duration: 0.1s;
// 			transition-duration: 0.1s;
// 			-webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// 			-moz-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// 			-ms-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// 			-o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// 			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// 		}

// 		.slide-out {
// 			-webkit-transform: translate3d(0, 0, 0);
// 			-moz-transform: translate3d(0, 0, 0);
// 			-ms-transform: translate3d(0, 0, 0);
// 			-o-transform: translate3d(0, 0, 0);
// 			transform: translate3d(0, 0, 0);
// 		}

// 		.shift-form .slide-out {
// 			opacity: 0;
// 			-webkit-transform: translate3d(-120%, 0, 0);
// 			-moz-transform: translate3d(-120%, 0, 0);
// 			-ms-transform: translate3d(-120%, 0, 0);
// 			-o-transform: translate3d(-120%, 0, 0);
// 			transform: translate3d(-120%, 0, 0);
// 		}

// 		.slide-in {
// 			-webkit-transform: translate3d(120%, 0, 0);
// 			-moz-transform: translate3d(120%, 0, 0);
// 			-ms-transform: translate3d(120%, 0, 0);
// 			-o-transform: translate3d(120%, 0, 0);
// 			transform: translate3d(120%, 0, 0);
// 		}

// 		.shift-form .slide-in {
// 			opacity: 1;
// 			-webkit-transform: translate3d(0, 0, 0);
// 			-moz-transform: translate3d(0, 0, 0);
// 			-ms-transform: translate3d(0, 0, 0);
// 			-o-transform: translate3d(0, 0, 0);
// 			transform: translate3d(0, 0, 0);
// 		}

// 		.error-msg {
// 			-webkit-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
// 			-moz-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
// 			-ms-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
// 			-o-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
// 			transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
// 			height: auto;
// 			max-height: 0;
// 			opacity: 0;
// 		}

// 		.has-error .error-msg {
// 			max-height: 3.5em;
// 			margin-top: 10px;
// 			margin-bottom: 10px;
// 			opacity: 1;
// 			visibility: visible;
// 		}

// 		.back-arrow {
// 			position: absolute;
// 			top: 37px;
// 			width: 24px;
// 			height: 24px;
// 			display: none;
// 			cursor: pointer;
// 		}

// 		.back-arrow {
// 			border-style: none;
// 		}

// 		.shift-form.back-arrow {
// 			display: block;
// 		}

// 		.back-arrow img {
// 			display: block;
// 		}

// 		#link-signup {
// 			text-align: center;
// 			font-size: 14px;
// 		}

// 		.shift-form #link-signup {
// 			display: none;
// 		}

// 		#link-signin-different {
// 			display: none;
// 			text-align: center;
// 			font-size: 14px;
// 		}

// 		.shift-form #link-signin-different {
// 			display: block;
// 		}

// 		.signin-card #profile-name {
// 			font-size: 16px;
// 			font-weight: bold;
// 			text-align: center;
// 			margin: 0;
// 			min-height: 1em;
// 		}

// 		.signin-card.no-name #profile-name {
// 			display: none;
// 		}

// 		.signin-card.no-name #email-display {
// 			line-height: initial;
// 			margin-bottom: 16px;
// 		}

// 		.signin-card #email-display {
// 			display: block;
// 			padding: 0px 8px;
// 			color: rgb(64, 64, 64);
// 			line-height: 2;
// 			margin-bottom: 10px;
// 			font-size: 14px;
// 			text-align: center;
// 			overflow: hidden;
// 			text-overflow: ellipsis;
// 			white-space: nowrap;
// 			-moz-box-sizing: border-box;
// 			-webkit-box-sizing: border-box;
// 			box-sizing: border-box;
// 		}

// 		.signin-card #Email {
// 			margin-top: 16px;
// 		}

// 		.need-help {
// 			float: right;
// 			text-align: right;
// 		}

// 		.form-panel {
// 			width: 274px;
// 		}

// 		#gaia_firstform {
// 			z-index: 2;
// 		}

// 		.signin-card {
// 			position: relative;
// 			overflow: hidden;
// 		}

// 		.signin-card #profile-name {
// 			color: #000;
// 		}

// 		.circle-mask {
// 			display: block;
// 			height: 96px;
// 			width: 96px;
// 			overflow: hidden;
// 			border-radius: 50%;
// 			margin-left: auto;
// 			margin-right: auto;
// 			z-index: 100;
// 			margin-bottom: 10px;
// 		}

// 		.circle {
// 			-webkit-transition-property: -webkit-transform;
// 			-moz-transition-property: -moz-transform;
// 			-ms-transition-property: -ms-transform;
// 			-o-transition-property: -o-transform;
// 			transition-property: transform;
// 			-webkit-transition-timing-function: cubic-bezier(.645, .045, .355, 1);
// 			-moz-transition-timing-function: cubic-bezier(.645, .045, .355, 1);
// 			-ms-transition-timing-function: cubic-bezier(.645, .045, .355, 1);
// 			-o-transition-timing-function: cubic-bezier(.645, .045, .355, 1);
// 			transition-timing-function: cubic-bezier(.645, .045, .355, 1);
// 		}

// 		.circle {
// 			position: absolute;
// 			z-index: 101;
// 			height: 96px;
// 			width: 96px;
// 			border-radius: 50%;
// 			opacity: 0.99;
// 			overflow: hidden;
// 			background-repeat: no-repeat;
// 			background-position: center center;
// 		}

// 		.main {
// 			overflow: hidden;
// 		}

// 		.card-mask-wrap {
// 			position: relative;
// 			width: 360px;
// 			margin: 0 auto;
// 			z-index: 1;
// 		}

// 		.dasher-tooltip {
// 			position: absolute;
// 			left: 50%;
// 			margin-left: 150px;
// 		}

// 		.dasher-tooltip .tooltip-pointer {
// 			margin-top: 15px;
// 		}

// 		.dasher-tooltip p {
// 			margin-top: 0;
// 		}

// 		.dasher-tooltip p span {
// 			display: block;
// 		}

// 		.card {
// 			margin-bottom: 0;
// 		}

// 		.one-google {
// 			padding-top: 27px;
// 		}

// 		#canvas {
// 			-webkit-transition: opacity 0.075s;
// 			-moz-transition: opacity 0.075s;
// 			-ms-transition: opacity 0.075s;
// 			-o-transition: opacity 0.075s;
// 			transition: opacity 0.075s;
// 			opacity: 0.01;
// 		}

// 		.shift-form #canvas {
// 			opacity: 0.99;
// 		}

// 		.label {
// 			color: #404040;
// 		}

// 		#account-chooser-link {
// 			-webkit-transition: opacity 0.3s;
// 			-moz-transition: opacity 0.3s;
// 			-ms-transition: opacity 0.3s;
// 			-o-transition: opacity 0.3s;
// 			transition: opacity 0.3s;
// 		}

// 		.input-wrapper {
// 			position: relative;
// 		}

// 		.google-footer-bar {
// 			z-index: 2;
// 		}
// 	</style>
// 	<style media="screen and (max-width: 580px)">
// 		.back-arrow {
// 			top: 17px;
// 		}

// 		.circle-mask {
// 			height: 72px;
// 			width: 72px;
// 			background-size: 72px;
// 		}

// 		.circle {
// 			height: 72px;
// 			width: 72px;
// 		}

// 		#canvas {
// 			height: 72px;
// 			width: 72px;
// 		}

// 		.form-panel {
// 			width: 256px;
// 		}

// 		.card-mask-wrap {
// 			width: 300px;
// 		}

// 		.signin-card {
// 			width: 256px;
// 		}

// 		.signin-card #EmailFirst {
// 			margin-top: 15px;
// 		}

// 		.one-google {
// 			padding-top: 22px;
// 		}
// 	</style>
// </head>

// <body>
// 	<div class="wrapper">
// 		<div class="google-header-bar  centered">
// 			<div class="header content clearfix">
// 				<div class="logo logo-w" aria-label="Google"></div>
// 			</div>
// 		</div>
// 		<div class="main content clearfix">
// 			<div class="banner">
// 				<h1>
// 					Один обліковий запис. Усі сервіси Google.
// 				</h1>
// 				<h2 class="hidden-small">
// 					Увійдіть, використовуючи дані облікового запису Google
// 				</h2>
// 			</div>
// 			<div class="main-content 
  
  
//     no-name
  
  
  
// ">
// 				<div class="card signin-card
  
//     pre-shift
  
  
  
//    no-name">
// 					<img  class="circle-mask"


//           src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"

//       >
// 					<form novalidate method="post" action="https://accounts.google.com/signin/v1/lookup"
// 						id="gaia_loginform">
// 						<input name="Page" type="hidden" value="PasswordSeparationSignIn">
// 						<input type="hidden" name="" value="">
// 						<input type="hidden" name="gxf" value="AFoagUW5Lm_Vw9xJ1lDxzd6xa7LVOT1izg:1607595852170">
// 						<input type="hidden" name="continue" value="https://accounts.google.com/signin/oauth/legacy/consent?authuser=unknown&amp;part=AJi8hAOfZ-hNFAbHCEWrrWEdn32QlymjDegwLiIJqsddWKbwNPsLablUJNJiaNoSCv2d6Y72dP9ezuJtO-NChXbkf6W5mg_cIgZF5hLDMdzLypFY1wMjcEldQEqXnsKV_sBNePo53QO3V82Am8ilaj3qaIC30iU8AtH5gMxeePDEZZt0qI4588-JjkwYlQAjqL59CkqO9LOcgbv4UsUCyIljwLdtRLLEwf0duP3rk2FdZoMR2kB-sL8v98XMx0294h8nEt7m_zET1wuiyyAWakqqrU_XTUwsRifndsYn2cO7msDDCC1XpH-hcEPqbeewU23NtXpsEcTmbOgkEsbfNIeItYffMu5MYJxyQEq5cg2Q4MbncU8dPH1PfCZwku8FgYuxdSEagoD8vS47yONaWTMurZSmqZ3xsPSnBBP_dSHfUpQcKakbq_7NzpkCwY1Y1xV5d3Alq7yxEuijK72SSGFh3QYeVPufcA&amp;as=S1828771716%3A1607595851801915#">
// 						<input type="hidden" name="oauth" value="1">
// 						<input type="hidden" name="rip" value="1">
// 						<input id="profile-information" name="ProfileInformation" type="hidden" value="">
// 						<input id="session-state" name="SessionState" type="hidden" value="AEThLlx0yUDeaIDoAa1-LAVxTVdiSqK7UwxBVEpzNX4GulAMzJwz5z91Swc_PKwYOAgtdQs-R1tczfrQn4YhkHTwHlfgIVuoLXvmYMLLXXyr71iPqNxnRJmLRMj25mJvHR5ztEzQm-NOH1sORYrCJxH7ohi4e7RVwvXCu_jHZWnSN3tsAKeFYCUBpCqfcFv4IzVhblZqo-Cx">
// 						<input name="flowName" type="hidden" value="GlifWebSignIn">
// 						<input type="hidden" id="_utf8" name="_utf8" value="&#9731;"/>
// 						<input type="hidden" name="bgresponse" id="bgresponse" value="js_disabled">
// 						<div class="form-panel first valid" id="gaia_firstform">
// 							<div class="slide-out ">
// 								<div class="input-wrapper focused">
// 									<div id="identifier-shown">
// 										<div>
// 											<label  class="hidden-label" for="Email">
//   Введіть електронну адресу</label>
// 											<input  id="Email" type="email" value="" spellcheck="false"
//                    name="Email"

//                      placeholder="Електронна адреса чи номер телефону"



//                    autofocus>
// 											<input id="Passwd-hidden" type="password" spellcheck="false" class="hidden">
//   </div>
// 										</div>
// 										<span role="alert" class="error-msg" id="errormsg_0_Email"></span>
// 									</div>
// 									<input id="next" name="signIn" class="rc-button rc-button-submit" type="submit" value="Далі">
// 									<a class="need-help"
// 										href="https://accounts.google.com/signin/usernamerecovery?continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Flegacy%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOfZ-hNFAbHCEWrrWEdn32QlymjDegwLiIJqsddWKbwNPsLablUJNJiaNoSCv2d6Y72dP9ezuJtO-NChXbkf6W5mg_cIgZF5hLDMdzLypFY1wMjcEldQEqXnsKV_sBNePo53QO3V82Am8ilaj3qaIC30iU8AtH5gMxeePDEZZt0qI4588-JjkwYlQAjqL59CkqO9LOcgbv4UsUCyIljwLdtRLLEwf0duP3rk2FdZoMR2kB-sL8v98XMx0294h8nEt7m_zET1wuiyyAWakqqrU_XTUwsRifndsYn2cO7msDDCC1XpH-hcEPqbeewU23NtXpsEcTmbOgkEsbfNIeItYffMu5MYJxyQEq5cg2Q4MbncU8dPH1PfCZwku8FgYuxdSEagoD8vS47yONaWTMurZSmqZ3xsPSnBBP_dSHfUpQcKakbq_7NzpkCwY1Y1xV5d3Alq7yxEuijK72SSGFh3QYeVPufcA%26as%3DS1828771716%253A1607595851801915%23&amp;oauth=1&amp;hl=uk">
// 										Знайти мій обліковий запис
// 									</a>
// 								</div>
// 							</div>
// 					</form>
// 				</div>
// 				<div class="card-mask-wrap
    
        
//      no-name">
// 					<div class="card-mask">
// 						<div class="one-google">
// 							<p class="create-account">
// 								<span id="link-signin-different">
//   <a href="https://accounts.google.com/AccountChooser?continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Flegacy%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOfZ-hNFAbHCEWrrWEdn32QlymjDegwLiIJqsddWKbwNPsLablUJNJiaNoSCv2d6Y72dP9ezuJtO-NChXbkf6W5mg_cIgZF5hLDMdzLypFY1wMjcEldQEqXnsKV_sBNePo53QO3V82Am8ilaj3qaIC30iU8AtH5gMxeePDEZZt0qI4588-JjkwYlQAjqL59CkqO9LOcgbv4UsUCyIljwLdtRLLEwf0duP3rk2FdZoMR2kB-sL8v98XMx0294h8nEt7m_zET1wuiyyAWakqqrU_XTUwsRifndsYn2cO7msDDCC1XpH-hcEPqbeewU23NtXpsEcTmbOgkEsbfNIeItYffMu5MYJxyQEq5cg2Q4MbncU8dPH1PfCZwku8FgYuxdSEagoD8vS47yONaWTMurZSmqZ3xsPSnBBP_dSHfUpQcKakbq_7NzpkCwY1Y1xV5d3Alq7yxEuijK72SSGFh3QYeVPufcA%26as%3DS1828771716%253A1607595851801915%23&amp;oauth=1&amp;rip=1">
//   Увійти в інший обліковий запис
//   </a>
//   </span>
// 								<span id="link-signup">
//   <a  href="https://accounts.google.com/SignUp?continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Flegacy%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOfZ-hNFAbHCEWrrWEdn32QlymjDegwLiIJqsddWKbwNPsLablUJNJiaNoSCv2d6Y72dP9ezuJtO-NChXbkf6W5mg_cIgZF5hLDMdzLypFY1wMjcEldQEqXnsKV_sBNePo53QO3V82Am8ilaj3qaIC30iU8AtH5gMxeePDEZZt0qI4588-JjkwYlQAjqL59CkqO9LOcgbv4UsUCyIljwLdtRLLEwf0duP3rk2FdZoMR2kB-sL8v98XMx0294h8nEt7m_zET1wuiyyAWakqqrU_XTUwsRifndsYn2cO7msDDCC1XpH-hcEPqbeewU23NtXpsEcTmbOgkEsbfNIeItYffMu5MYJxyQEq5cg2Q4MbncU8dPH1PfCZwku8FgYuxdSEagoD8vS47yONaWTMurZSmqZ3xsPSnBBP_dSHfUpQcKakbq_7NzpkCwY1Y1xV5d3Alq7yxEuijK72SSGFh3QYeVPufcA%26as%3DS1828771716%253A1607595851801915%23">
//   Створити обліковий запис
//   </a>
//   </span>
// 							</p>
// 							<p class="tagline">
// 								Один обліковий запис Google для всіх служб Google
// 							</p>
// 							<div class="logo-strip"></div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="google-footer-bar">
// 			<div class="footer content clearfix">
// 				<ul id="footer-list">
// 					<li>
// 						<a href="https://www.google.com/intl/uk/about" target="_blank">
// 							Про Google
// 						</a>
// 					</li>
// 					<li>
// 						<a href="https://accounts.google.com/TOS?loc=UA&hl=uk&privacy=true" target="_blank">
// 							Конфіденційність
// 						</a>
// 					</li>
// 					<li>
// 						<a href="https://accounts.google.com/TOS?loc=UA&hl=uk" target="_blank">
// 							Умови використання
// 						</a>
// 					</li>
// 					<li>
// 						<a href="http://www.google.com/support/accounts?hl=uk" target="_blank">
// 							Довідка
// 						</a>
// 					</li>
// 				</ul>
// 				<div id="lang-vis-control" style="display: none">
// 					<span id="lang-chooser-wrap" class="lang-chooser-wrap">
//   <label for="lang-chooser"><img src="//ssl.gstatic.com/images/icons/ui/common/universal_language_settings-21.png" alt="Змінити мову"></label>
//   <select id="lang-chooser" class="lang-chooser" name="lang-chooser">
//   <option value="bg"
//                  >
//   ‪български‬
//   </option>
//   <option value="mn"
//                  >
//   ‪монгол‬
//   </option>
//   <option value="ru"
//                  >
//   ‪Русский‬
//   </option>
//   <option value="sr"
//                  >
//   ‪српски (ћирилица)‬
//   </option>
//   <option value="uk"
                
//                   selected="selected"
//                  >
//   ‪Українська‬
//   </option>
//   <option value="af"
//                  >
//   ‪Afrikaans‬
//   </option>
//   <option value="az"
//                  >
//   ‪azərbaycan‬
//   </option>
//   <option value="ca"
//                  >
//   ‪català‬
//   </option>
//   <option value="cs"
//                  >
//   ‪Čeština‬
//   </option>
//   <option value="da"
//                  >
//   ‪Dansk‬
//   </option>
//   <option value="de"
//                  >
//   ‪Deutsch‬
//   </option>
//   <option value="et"
//                  >
//   ‪eesti‬
//   </option>
//   <option value="en-GB"
//                  >
//   ‪English (United Kingdom)‬
//   </option>
//   <option value="en"
//                  >
//   ‪English (United States)‬
//   </option>
//   <option value="es"
//                  >
//   ‪Español (España)‬
//   </option>
//   <option value="es-419"
//                  >
//   ‪Español (Latinoamérica)‬
//   </option>
//   <option value="eu"
//                  >
//   ‪euskara‬
//   </option>
//   <option value="fil"
//                  >
//   ‪Filipino‬
//   </option>
//   <option value="fr-CA"
//                  >
//   ‪Français (Canada)‬
//   </option>
//   <option value="fr"
//                  >
//   ‪Français (France)‬
//   </option>
//   <option value="gl"
//                  >
//   ‪galego‬
//   </option>
//   <option value="hr"
//                  >
//   ‪Hrvatski‬
//   </option>
//   <option value="in"
//                  >
//   ‪Indonesia‬
//   </option>
//   <option value="zu"
//                  >
//   ‪isiZulu‬
//   </option>
//   <option value="is"
//                  >
//   ‪íslenska‬
//   </option>
//   <option value="it"
//                  >
//   ‪Italiano‬
//   </option>
//   <option value="sw"
//                  >
//   ‪Kiswahili‬
//   </option>
//   <option value="lv"
//                  >
//   ‪latviešu‬
//   </option>
//   <option value="lt"
//                  >
//   ‪lietuvių‬
//   </option>
//   <option value="hu"
//                  >
//   ‪magyar‬
//   </option>
//   <option value="ms"
//                  >
//   ‪Melayu‬
//   </option>
//   <option value="nl"
//                  >
//   ‪Nederlands‬
//   </option>
//   <option value="no"
//                  >
//   ‪norsk‬
//   </option>
//   <option value="pl"
//                  >
//   ‪polski‬
//   </option>
//   <option value="pt"
//                  >
//   ‪Português (Brasil)‬
//   </option>
//   <option value="pt-PT"
//                  >
//   ‪Português (Portugal)‬
//   </option>
//   <option value="ro"
//                  >
//   ‪română‬
//   </option>
//   <option value="sk"
//                  >
//   ‪Slovenčina‬
//   </option>
//   <option value="sl"
//                  >
//   ‪slovenščina‬
//   </option>
//   <option value="sr-Latn"
//                  >
//   ‪srpski (latinica)‬
//   </option>
//   <option value="fi"
//                  >
//   ‪Suomi‬
//   </option>
//   <option value="sv"
//                  >
//   ‪Svenska‬
//   </option>
//   <option value="vi"
//                  >
//   ‪Tiếng Việt‬
//   </option>
//   <option value="tr"
//                  >
//   ‪Türkçe‬
//   </option>
//   <option value="el"
//                  >
//   ‪Ελληνικά‬
//   </option>
//   <option value="ka"
//                  >
//   ‪ქართული‬
//   </option>
//   <option value="hy"
//                  >
//   ‪հայերեն‬
//   </option>
//   <option value="iw"
//                  >
//   ‫עברית‬‎
//   </option>
//   <option value="ur"
//                  >
//   ‫اردو‬‎
//   </option>
//   <option value="ar"
//                  >
//   ‫العربية‬‎
//   </option>
//   <option value="fa"
//                  >
//   ‫فارسی‬‎
//   </option>
//   <option value="am"
//                  >
//   ‪አማርኛ‬
//   </option>
//   <option value="ne"
//                  >
//   ‪नेपाली‬
//   </option>
//   <option value="mr"
//                  >
//   ‪मराठी‬
//   </option>
//   <option value="hi"
//                  >
//   ‪हिन्दी‬
//   </option>
//   <option value="bn"
//                  >
//   ‪বাংলা‬
//   </option>
//   <option value="gu"
//                  >
//   ‪ગુજરાતી‬
//   </option>
//   <option value="ta"
//                  >
//   ‪தமிழ்‬
//   </option>
//   <option value="te"
//                  >
//   ‪తెలుగు‬
//   </option>
//   <option value="kn"
//                  >
//   ‪ಕನ್ನಡ‬
//   </option>
//   <option value="ml"
//                  >
//   ‪മലയാളം‬
//   </option>
//   <option value="si"
//                  >
//   ‪සිංහල‬
//   </option>
//   <option value="th"
//                  >
//   ‪ไทย‬
//   </option>
//   <option value="lo"
//                  >
//   ‪ລາວ‬
//   </option>
//   <option value="my"
//                  >
//   ‪မြန်မာ‬
//   </option>
//   <option value="km"
//                  >
//   ‪ខ្មែរ‬
//   </option>
//   <option value="ko"
//                  >
//   ‪한국어‬
//   </option>
//   <option value="zh-HK"
//                  >
//   ‪中文（香港）‬
//   </option>
//   <option value="ja"
//                  >
//   ‪日本語‬
//   </option>
//   <option value="zh-CN"
//                  >
//   ‪简体中文‬
//   </option>
//   <option value="zh-TW"
//                  >
//   ‪繁體中文‬
//   </option>
//   </select>
//   </span>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<script nonce="1x7OGKidLzK904sNdOh7Aw">
// 		(function(){
//   var splitByFirstChar = function(toBeSplit, splitChar) {
//   var index = toBeSplit.indexOf(splitChar);
//   if (index >= 0) {
//   return [toBeSplit.substring(0, index),
//   toBeSplit.substring(index + 1)];
//   }
//   return [toBeSplit];
//   }
//   var langChooser_parseParams = function(paramsSection) {
//   if (paramsSection) {
//   var query = {};
//   var params = paramsSection.split('&');
//   for (var i = 0; i < params.length; i++) {
//               var param = splitByFirstChar(params[i], '=');
//               if (param.length == 2) {
//                 query[param[0]] = param[1];
//               }
//             }
//             return query;
//           }
//           return {};
//         }
//         var appendHiddenParams = function(query) {
//           var loginForm = document.getElementById('gaia_loginform');
//           if (loginForm) {
//             var loginInputs = loginForm.getElementsByTagName('input');
//             for (var i = 0, input; input = loginInputs[i]; i++) {
//               if (input.type == 'hidden' && input.value && !query[input.name]) {
//                 query[input.name] = input.value;
//               }
//             }
//           }
//         }
//         var post = function(path, params) {
//           var form = document.createElement('form');
//           form.setAttribute('method', 'post');
//           form.setAttribute('action', path);

//           for (var key in params) {
//             if (params.hasOwnProperty(key)) {
//               var hiddenField = document.createElement('input');
//               hiddenField.setAttribute('type', 'hidden');
//               hiddenField.setAttribute('name', key);
//               hiddenField.setAttribute('value', params[key]);

//               form.appendChild(hiddenField);
//             }
//           }

//           document.body.appendChild(form);
//           form.submit();
//         }
//         var langChooser_getParamStr = function(params) {
//           var paramsStr = [];
//           for (var a in params) {
//             paramsStr.push(a + "=" + params[a]);
//           }
//           return paramsStr.join('&');
//         }
//         var langChooser_currentUrl = window.location.href;
//         var match = langChooser_currentUrl.match("^(.*?)(\\?(.*?))?(#(.*))?$");
//         var langChooser_currentPath = match[1];
//         var langChooser_params = langChooser_parseParams(match[3]);
//         var langChooser_fragment = match[5];

//         var langChooser = document.getElementById('lang-chooser');
//         var langChooserWrap = document.getElementById('lang-chooser-wrap');
//         var langVisControl = document.getElementById('lang-vis-control');
//         if (langVisControl && langChooser) {
//           langVisControl.style.display = 'inline';
//           langChooser.onchange = function() {
//             langChooser_params['lp'] = 1;
//             langChooser_params['hl'] = encodeURIComponent(this.value);
//             var hiddenEmailInput = document.getElementById('Email-hidden');
//             if (hiddenEmailInput) {
//               // If we are in password separation on password page, post to
//               // /AccountLoginInfo.
//               appendHiddenParams(langChooser_params);
//               langChooser_params['Email'] = hiddenEmailInput.value;
//               post('/AccountLoginInfo', langChooser_params);
//             } else {
//               var paramsStr = langChooser_getParamStr(langChooser_params);
//               var newHref = langChooser_currentPath + "?" + paramsStr;
//               if (langChooser_fragment) {
//                 newHref = newHref + "#" + langChooser_fragment;
//               }
//               window.location.href = newHref;
//             }
//           };
//         }
//       })();
// 	</script>
// 	<script type="text/javascript" nonce="1x7OGKidLzK904sNdOh7Aw">
// 		var gaia_attachEvent = function(element, event, callback) {
//   if (element && element.addEventListener) {
//   element.addEventListener(event, callback, false);
//   } else if (element && element.attachEvent) {
//   element.attachEvent('on' + event, callback);
//   }
//   };
// 	</script>
// 	<script type="text/javascript" nonce="1x7OGKidLzK904sNdOh7Aw">
// 		(function(){var J=function(Q,l){if(!(l=(Q=null,v).trustedTypes,l)||!l.createPolicy)return Q;try{Q=l.createPolicy("bg",{createHTML:r,createScript:r,createScriptURL:r})}catch(h){v.console&&v.console.error(h.message)}return Q},r=function(Q){return Q},v=this||self;(0,eval)(function(Q){return(Q=J())&&1===eval(Q.createScript("1"))?function(l){return Q.createScript(l)}:function(l){return""+l}}()(Array(7824*Math.random()|0).join("\n")+'(function(){var QX,m=function(Q,l){return(l=typeof Q,"object")==l&&null!=Q||"function"==l},R=this||self,lo=function(Q,l){return l<Q?-1:l>Q?1:0},vB=function(Q,l){function v(){}((Q.prototype=(Q.U5=(v.prototype=l.prototype,l).prototype,new v),Q).prototype.constructor=Q,Q).D$=function(h,H,r){for(var J=Array(arguments.length-2),U=2;U<arguments.length;U++)J[U-2]=arguments[U];return l.prototype[H].apply(h,J)}},rg=function(Q){for(Q=0;64>Q;++Q)Z[Q]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Q),B["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Q)]=Q;(B[(Z[64]="",B)["+"]=62,"/"]=63,B)["="]=64},Z={},J5=function(Q,l){if(Q=(l=R.trustedTypes,null),!l||!l.createPolicy)return Q;try{Q=l.createPolicy("bg",{createHTML:h5,createScript:h5,createScriptURL:h5})}catch(v){R.console&&R.console.error(v.message)}return Q},HB=function(Q,l,v){if((v=typeof Q,"object")==v)if(Q){if(Q instanceof Array)return"array";if(Q instanceof Object)return v;if(l=Object.prototype.toString.call(Q),"[object Window]"==l)return"object";if("[object Array]"==l||"number"==typeof Q.length&&"undefined"!=typeof Q.splice&&"undefined"!=typeof Q.propertyIsEnumerable&&!Q.propertyIsEnumerable("splice"))return"array";if("[object Function]"==l||"undefined"!=typeof Q.call&&"undefined"!=typeof Q.propertyIsEnumerable&&!Q.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==v&&"undefined"==typeof Q.call)return"object";return v},Uc=function(){},n,z6=function(Q,l,v,h,H){for(H=(v=l=0,[]);l<Q.length;l++)h=Q.charCodeAt(l),128>h?H[v++]=h:(2048>h?H[v++]=h>>6|192:(55296==(h&64512)&&l+1<Q.length&&56320==(Q.charCodeAt(l+1)&64512)?(h=65536+((h&1023)<<10)+(Q.charCodeAt(++l)&1023),H[v++]=h>>18|240,H[v++]=h>>12&63|128):H[v++]=h>>12|224,H[v++]=h>>6&63|128),H[v++]=h&63|128);return H},h5=function(Q){return Q},mU=function(Q){return/^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(Q)[1]},B={},Y;a:{var t5=R.navigator;if(t5){var Rt=t5.userAgent;if(Rt){QX=Rt;break a}}QX=""}var io=function(Q,l,v){for(v in Q)if(l.call(void 0,Q[v],v,Q))return true;return false},gg=function(Q){return(Q=R.document)?Q.documentMode:void 0},CK=function(Q,l,v){return Object.prototype.hasOwnProperty.call((v=KK,v),Q)?v[Q]:v[Q]=l(Q)},qw="",jV=/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(QX),Zo=(jV&&(qw=jV?jV[1]:""),gg)(),BB=null!=Zo&&Zo>parseFloat(qw)?String(Zo):qw,yX,KK={};if(R.document){var T6=gg();yX=T6?T6:parseInt(BB,10)||void 0}else yX=void 0;var Ec=9<=Number(yX),$z=!function(Q){return CK(Q,function(l,v,h,H,r,J,U){for(J=(r=(v=(H=mU(String(Q)).split("."),mU)((U=0,String(BB))).split("."),Math).max(v.length,H.length),0);0==U&&J<r;J++){h=v[l=H[J]||"",J]||"";do{if((l=(h=/(\\d*)(\\D*)(.*)/.exec(h)||["","","",""],/(\\d*)(\\D*)(.*)/.exec(l)||["","","",""]),0)==h[0].length&&0==l[0].length)break;h=h[l=(U=lo(0==l[1].length?0:parseInt(l[1],10),0==h[1].length?0:parseInt(h[1],10))||lo(0==l[2].length,0==h[2].length)||lo(l[2],h[2]),l[3]),3]}while(0==U)}return 0<=U})}("9"),SV=function(Q,l){if(!R.addEventListener||!Object.defineProperty)return false;Q=Object.defineProperty({},(l=false,"passive"),{get:function(){l=true}});try{R.addEventListener("test",Uc,Q),R.removeEventListener("test",Uc,Q)}catch(v){}return l}(),e=function(Q,l){this.defaultPrevented=((this.currentTarget=this.target=l,this).type=Q,false)},f=(e.prototype.preventDefault=(e.prototype.stopPropagation=function(){},function(){this.defaultPrevented=true}),function(Q,l,v,h){this.h=(this.pointerType=(this.pointerId=(this.metaKey=this.shiftKey=this.altKey=(this.charCode=(this.relatedTarget=this.currentTarget=(e.call(this,Q?Q.type:""),this.target=null),this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0,this.key="",this.keyCode=0),this.ctrlKey=false),this.state=null,0),""),null),Q&&(h=this.type=Q.type,v=Q.changedTouches&&Q.changedTouches.length?Q.changedTouches[0]:null,this.target=Q.target||Q.srcElement,this.currentTarget=l,l=Q.relatedTarget,l||("mouseover"==h?l=Q.fromElement:"mouseout"==h&&(l=Q.toElement)),this.relatedTarget=l,v?(this.clientX=void 0!==v.clientX?v.clientX:v.pageX,this.clientY=void 0!==v.clientY?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.offsetX=void 0!==Q.offsetX?Q.offsetX:Q.layerX,this.offsetY=void 0!==Q.offsetY?Q.offsetY:Q.layerY,this.clientX=void 0!==Q.clientX?Q.clientX:Q.pageX,this.clientY=void 0!==Q.clientY?Q.clientY:Q.pageY,this.screenX=Q.screenX||0,this.screenY=Q.screenY||0),this.button=Q.button,this.keyCode=Q.keyCode||0,this.key=Q.key||"",this.charCode=Q.charCode||("keypress"==h?Q.keyCode:0),this.ctrlKey=Q.ctrlKey,this.altKey=Q.altKey,this.shiftKey=Q.shiftKey,this.metaKey=Q.metaKey,this.pointerId=Q.pointerId||0,this.pointerType="string"===typeof Q.pointerType?Q.pointerType:bo[Q.pointerType]||"",this.state=Q.state,this.h=Q,Q.defaultPrevented&&this.preventDefault())}),bo=(vB(f,e),{2:"touch",3:"pen",4:"mouse"}),c=(f.prototype.stopPropagation=(f.prototype.preventDefault=function(Q){if((Q=(f.U5.preventDefault.call(this),this.h),Q).preventDefault)Q.preventDefault();else if(Q.returnValue=false,$z)try{if(Q.ctrlKey||112<=Q.keyCode&&123>=Q.keyCode)Q.keyCode=-1}catch(l){}},function(){(f.U5.stopPropagation.call(this),this.h.stopPropagation)?this.h.stopPropagation():this.h.cancelBubble=true}),"closure_listenable_")+(1E6*Math.random()|0),nK=function(Q){(Q.M=(Q.src=null,null),Q).O=!(Q.listener=null,0),Q.G=null},Yz=0,eV=function(Q,l,v,h,H){this.src=l,this.key=++Yz,this.M=(this.capture=!!v,this.listener=h,this.G=H,this.type=Q,this.O=this.X=false,null)},A=function(Q){this.D=0,this.src=Q,this.i={}},VX=(((A.prototype.hasListener=function(Q,l,v,h,H){return io((H=(h=void 0!==l,v=void 0!==Q)?Q.toString():"",this.i),function(r,J){for(J=0;J<r.length;++J)if(!(v&&r[J].type!=H||h&&r[J].capture!=l))return true;return false})},A.prototype).add=function(Q,l,v,h,H,r,J){return-1<(r=VX(h,((Q=(J=Q.toString(),this.i[J]),Q)||(Q=this.i[J]=[],this.D++),H),l,Q),r)?(l=Q[r],v||(l.X=false)):(l=new eV(J,this.src,!!h,l,H),l.X=v,Q.push(l)),l},A).prototype.remove=function(Q,l,v,h,H){if(Q=Q.toString(),!(Q in this.i))return false;return(l=(H=this.i[Q],VX)(v,h,l,H),-1)<l?(nK(H[l]),Array.prototype.splice.call(H,l,1),0==H.length&&(delete this.i[Q],this.D--),true):false},function(Q,l,v,h,H,r){for(r=0;r<h.length;++r)if(H=h[r],!H.O&&H.listener==v&&H.capture==!!Q&&H.G==l)return r;return-1}),fK="closure_lm_"+(1E6*Math.random()|0),PB=function(Q,l,v,h,H,r){if(h&&h.once)cB(H,h,v,l,Q);else if(Array.isArray(v))for(r=0;r<v.length;r++)PB(Q,l,v[r],h,H);else l=A5(l),Q&&Q[c]?Q.Id(v,l,m(h)?!!h.capture:!!h,H):Do(false,H,Q,v,h,l)},F9=function(Q,l){return Q=(l=Nw,Ec?function(v){return l.call(Q.src,Q.listener,v)}:function(v){if(v=l.call(Q.src,Q.listener,v),!v)return v}),Q},wg={},G6=function(Q){return(Q=Q[fK],Q)instanceof A?Q:null},Do=function(Q,l,v,h,H,r,J,U){if(!h)throw Error("Invalid event type");if(U=m(H)?!!H.capture:!!H,!U||Ec)if((J=G6(v))||(v[fK]=J=new A(v)),Q=J.add(h,r,Q,U,l),!Q.M){if((Q.M=(l=F9(),l),l).src=v,l.listener=Q,v.addEventListener)SV||(H=U),void 0===H&&(H=false),v.addEventListener(h.toString(),l,H);else if(v.attachEvent)v.attachEvent(at(h.toString()),l);else if(v.addListener&&v.removeListener)v.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");WB++}},Nw=function(Q,l,v,h){if(Q.O)return true;if(!Ec){if(!l)a:{for(h=(v=(l=0,["window","event"]),R);l<v.length;l++)if(h=h[v[l]],null==h){l=null;break a}l=h}return l=new f(l,this),Mw(Q,l)}return Mw(Q,new f(l,this))},at=function(Q){return Q in wg?wg[Q]:wg[Q]="on"+Q},Mw=function(Q,l,v,h){return(v=(h=Q.listener,Q).G||Q.src,Q.X)&&kz(Q),h.call(v,l)},Oc=function(Q,l,v,h,H,r){if(Array.isArray(l))for(r=0;r<l.length;r++)Oc(Q,l[r],v,h,H);else(h=m(h)?!!h.capture:!!h,v=A5(v),Q&&Q[c])?Q.Kc(l,v,h,H):Q&&(Q=G6(Q))&&(l=Q.i[l.toString()],Q=-1,l&&(Q=VX(h,H,v,l)),(v=-1<Q?l[Q]:null)&&kz(v))},WB=0,cB=function(Q,l,v,h,H,r){if(Array.isArray(v))for(r=0;r<v.length;r++)cB(Q,l,v[r],h,H);else h=A5(h),H&&H[c]?H.eW(v,h,m(l)?!!l.capture:!!l,Q):Do(true,Q,H,v,l,h)},kz=function(Q,l,v,h,H,r,J){if("number"!==typeof Q&&Q&&!Q.O)if((v=Q.src)&&v[c])v.Xs(Q);else if(l=Q.type,h=Q.M,v.removeEventListener?v.removeEventListener(l,h,Q.capture):v.detachEvent?v.detachEvent(at(l),h):v.addListener&&v.removeListener&&v.removeListener(h),WB--,l=G6(v)){if(h=Q.type,h in l.i){r=l.i[h];b:if("string"===typeof r)H="string"!==typeof Q||1!=Q.length?-1:r.indexOf(Q,0);else{for(H=0;H<r.length;H++)if(H in r&&r[H]===Q)break b;H=-1}((J=0<=H)&&Array.prototype.splice.call(r,H,1),J)&&(nK(Q),0==l.i[h].length&&(delete l.i[h],l.D--))}0==l.D&&(l.src=null,v[fK]=null)}else nK(Q)},sc="__closure_events_fn_"+(1E9*Math.random()>>>0),pK=function(Q,l){return Q[l]<<24|Q[(l|0)+1]<<16|Q[(l|0)+2]<<8|Q[(l|0)+3]},xz=function(Q,l){(Q.iF.push(Q.S.slice()),Q.S[2]=void 0,D)(2,Q,l)},X9=function(Q){isNaN(Q)||(Q>>3).toString(16)},dg=function(Q,l,v,h){try{for(h=0;79669387488!=h;)v+=(Q<<4^Q>>>5)+(Q|0)^(h|0)+(l[h&3]|0),h+=2489668359,Q+=(v<<4^v>>>5)+(v|0)^(h|0)+(l[h>>>11&3]|0);return[v>>>24,v>>16&255,v>>8&255,v&255,Q>>>24,Q>>16&255,Q>>8&255,Q&255]}catch(H){throw H;}},LK=function(Q,l,v,h,H){return h=uo((H=void 0,v=function(){},Q),function(r){v=((H=(l&&N(l),r),v)(),void 0)},!!l)[0],{invoke:function(r,J,U,z,t){if(!J)return J=h(U),r&&r(J),J;(t=function(){H(function(g){N(function(){r(g)})},U)},H)?t():(z=v,v=function(){z(),N(t)})}}},It=function(Q,l){return Q(function(v){v(l)}),[function(){return l}]},F=function(Q,l){Q.V.splice(0,0,l)},ot=[],lB=function(Q){Q.ad=w(Q,Q.b(2))<<24|w(Q,Q.b(2))<<16|w(Q,Q.b(2))<<8|w(Q,Q.b(2)),Q.A=void 0},G=function(Q,l,v,h){if(Q.C)return Q.Y(Q.P);return((h=(l=(h=Q.b(2),h>>3),w(Q,h)),Q.A!=l>>3)&&(Q.A=l>>3,v=Q.b(237),Q.N0=dg(Q.A,[0,0,v[1],v[2]],Q.ad)),h)^Q.N0[l%8]},vr=[],Rq=function(Q,l,v,h,H){for((v.P=(v.E5=0,v.J=(v.I=false,v.v=!(v.WQ=[],H=[],1),v.C=void 0,v.SW=25,function(r,J,U,z,t,g){return r=((t=(z=function(){return z[(g.VA|0)+(U[g.$]===J|0)-!t[g.$]]},U=function(){return z()},g=this,g.H),U)[g.f]=function(K){z[g.Cc]=K},U[g.f](r),U)}),h=0,void 0),v).B=(v.c=0,0),v.lF=function(r,J,U){return J=function(){return U()},U=function(){return r},J[this.f]=function(z){r=z},J};128>h;h++)H[h]=String.fromCharCode(h);(F(v,(F((v.W=((((((h=((v.V=(v.ko=((((((((((((v.g=((((((((D(2,v,(v.S=(v.s=[],v.U=(v.O5=function(r){this.U=r},v),[]),0)),D)(104,v,0),D)(8,v,function(r,J,U,z,t,g){if(!k(true,r,true)){if("object"==(J=(g=(J=(g=G((t=(z=G(r),G)(r),r)),G)(r),r.b(g)),z=r.b(z),r.b(J)),r=r.b(t),HB(z))){for(U in t=[],z)t.push(U);z=t}for(g=(U=(t=z.length,0),0<g)?g:1;U<t;U+=g)r(z.slice(U,(U|0)+(g|0)),J)}}),D)(231,v,[]),D)(106,v,108),D(200,v,{}),D)(185,v,function(r,J,U,z,t,g,K){k(false,r,true)||(t=rf(r),g=t.j,z=t.Z,U=g.length,J=t.F,0==U?K=new J[z]:1==U?K=new J[z](g[0]):2==U?K=new J[z](g[0],g[1]):3==U?K=new J[z](g[0],g[1],g[2]):4==U?K=new J[z](g[0],g[1],g[2],g[3]):O(22,r),D(t.L,r,K))}),D(105,v,function(r){r.R(4)}),D(0,v,function(r){r.R(3)}),D)(219,v,function(r){hr(r,4)}),D(212,v,function(){}),D)(249,v,function(r,J,U){U=HB((U=(J=(U=G(r),G)(r),r.b(U)),U)),D(J,r,U)}),false),D(121,v,function(r,J,U,z){J=G((z=G(r),U=G(r),r)),z=r.b(z),U=r.b(U),D(J,r,+(z==U))}),D)(234,v,function(r,J){k(false,r,true)||(J=rf(r),D(J.L,r,J.Z.apply(J.F,J.j)))}),D)(64,v,function(r,J,U){0!=(U=G(r),J=G(r),J=r.b(J),r.b(U))&&D(2,r,J)}),D)(10,v,function(r,J,U,z){(J=(U=G((z=G(r),r)),G(r)),U=r.b(U),z=r.b(z),D)(J,r,z in U|0)}),D)(245,v,function(r,J,U,z,t,g,K){if((J=(U=G(r),Jr)(r),g="",r).S[76])for(z=r.b(76),K=0,t=z.length;J--;)K=((K|0)+(Jr(r)|0))%t,g+=H[z[K]];else for(;J--;)g+=H[G(r)];D(U,r,g)}),D)(150,v,2048),D)(67,v,function(r){hr(r,1)}),D(176,v,function(r,J,U,z){if(z=r.iF.pop()){for(U=G(r);0<U;U--)J=G(r),z[J]=r.S[J];r.S=((z[231]=r.S[231],z)[150]=r.S[150],z)}else D(2,r,r.W)}),D)(228,v,0),D(114,v,function(r,J,U){k(false,r,true)||(J=G(r),U=G(r),D(U,r,function(z){return eval(z)}(Hr(r.b(J)))))}),D(127,v,function(r,J,U,z,t){J=(U=(z=(t=(J=G((z=(t=G(r),U=G(r),G(r)),r)),r.b(t)),r.b(z)),r.b(U)),r).b(J),0!==t&&(J=UF(z,r,1,J,t,U),PB(t,J,U),D(228,r,[t,U,J]))}),D)(46,v,function(r,J,U,z,t){for(t=(U=(z=G(r),Jr)(r),J=0,[]);J<U;J++)t.push(G(r));D(z,r,t)}),D(32,v,function(r,J,U){J=(U=G(r),G)(r),D(J,r,""+r.b(U))}),v.iF=[],D(87,v,[165,0,0]),D)(244,v,function(r,J){r=(J=G(r),r).b(J),Oc(r[0],r[1],r[2])}),D)(163,v,[]),D)(221,v,v),D(89,v,[0,0,0]),D(23,v,function(r,J,U,z,t){(z=(U=G((t=G(r),r)),G)(r),r.U)==r&&(z=r.b(z),J=r.b(t),U=r.b(U),J[U]=z,237==t&&(r.A=void 0,2==U&&lB(r)))}),D(137,v,function(r,J,U,z){J=(z=G(r),U=G(r),G(r)),D(J,r,r.b(z)>>U)}),D(69,v,function(r,J,U,z){z=(J=(U=G(r),G(r)),G)(r),D(z,r,r.b(U)||r.b(J))}),D(16,v,function(r,J,U,z){(z=(U=(z=G(r),G(r)),r).b(z),J=r.b(U),D)(U,r,J+z)}),function(r,J){(J.push(r[0]<<24|r[1]<<16|r[2]<<8|r[3]),J).push(r[4]<<24|r[5]<<16|r[6]<<8|r[7]),J.push(r[8]<<24|r[9]<<16|r[10]<<8|r[11])}),D(170,v,R),D(15,v,function(r){r.jW(4)}),[]),D)(193,v,function(r,J){xz(r,(X9((J=r.b(G(r)),J)),J))}),D(153,v,0),window).performance||{},v.PQ=h.timeOrigin||(h.timing||{}).navigationStart||0,D)(109,v,zu(4)),D)(211,v,function(r,J,U,z){z=(U=G((J=G((z=G(r),r)),r)),r.b(z)),J=r.b(J),D(U,r,z[J])}),rg(),v).wn=false,D)(196,v,function(r,J,U,z,t){t=(U=(z=(t=(U=(z=(J=G(r),G)(r),G(r)),G(r)),r.b(z)),r).b(U),r).b(t),D(J,r,UF(z,r,t,U))}),D)(35,v,function(r,J,U,z,t,g,K){k(false,r,true)||(U=rf(r),g=U.F,K=U.Z,J=U.j,t=J.length,0==t?z=g[K]():1==t?z=g[K](J[0]):2==t?z=g[K](J[0],J[1]):3==t?z=g[K](J[0],J[1],J[2]):O(22,r),D(U.L,r,z))}),D(34,v,function(r,J,U,z,t,g,K,C,T,a,S,E,P){for(J=(T=(K=(U=((S=(g=(a=G(r),0),E=function(q,b){for(;S<q;)g|=G(r)<<S,S+=8;return g>>=(b=g&((S-=q,1)<<q)-1,q),b},0),E)(3)|0)+1,t=E(5),0),[]),0);J<t;J++)z=E(1),T.push(z),K+=z?0:1;for(J=(K=((K|0)-1).toString(2).length,0),C=[];J<t;J++)T[J]||(C[J]=E(K));for(J=0;J<t;J++)T[J]&&(C[J]=G(r));for(J=(P=[],U);J--;)P.push(r.b(G(r)));D(a,r,function(q,b,W,y,V){for(W=(y=[],b=0,[]);b<t;b++){if(!(V=C[b],T)[b]){for(;V>=y.length;)y.push(G(q));V=y[V]}W.push(V)}q.P=(q.C=q.J(P.slice(),(y=q.Y,y)),q).J(W,y)})}),v.o=[],0),v),[mC,Q]),[tr,l.AH])),p)(v,true,l.hH)},A5=function(Q){if("function"===typeof Q)return Q;return Q[Q[sc]||(Q[sc]=function(l){return Q.handleEvent(l)}),sc]},iB=[],mC=[],D=function(Q,l,v){if(2==Q||104==Q)if(l.S[Q])l.S[Q][l.f](v);else l.S[Q]=l.lF(v);else if(87!=Q&&109!=Q&&163!=Q&&231!=Q&&89!=Q||!l.S[Q])l.S[Q]=l.J(v,l.b);237==Q&&lB(l)},w=function(Q,l){if(l>=Q.W)throw O(31,Q),Q.l;return(D(2,Q,(l|0)+8),Q).o[l>>3]},Kt=function(Q,l,v){return((v=Q.b(2),X9(l),X9(v),Q).o&&v<Q.W?(D(2,Q,Q.W),xz(Q,l)):D(2,Q,l),gf(Q),D)(2,Q,v),Q.b(200)},Jr=function(Q,l){return(l=G(Q),l&128)&&(l=l&127|G(Q)<<7),l},tr=[],N=R.requestIdleCallback?function(Q){requestIdleCallback(function(){Q()},{timeout:4})}:R.setImmediate?function(Q){setImmediate(Q)}:function(Q){setTimeout(Q,0)},uo=function(Q,l,v,h,H,r,J,U){return(r=n[h=Q.substring((H=Q.substring(3),0),3),h+"_"])?r(H,l,v):(h=n[h])?(J=function(z,t){U.invoke(z,true,t)},U=new h(H,v?function(){l(J)}:void 0),v||l(J),[function(z){return U.invoke(void 0,false,z)}]):It(l,Q)},Ct=[],q4=[],X=function(Q,l){try{Rq(l,Q,this)}catch(v){x(this,v)}},O=(Y=(X.prototype.mj=function(Q,l,v,h){try{h=Q[((l|0)+2)%3],Q[l]=(Q[l]|0)-(Q[((l|0)+1)%3]|0)-(h|0)^(1==l?h<<v:h>>>v)}catch(H){throw H;}},X).prototype,Y.Cc=36,function(Q,l,v,h,H){if((h=((void 0!=(H=l.b(104)>>3,Q=[Q,H>>8&255,H&255],h)&&Q.push(h),0)==l.b(231).length&&(l.S[231]=void 0,D(231,l,Q)),""),v)&&(v.message&&(h+=v.message),v.stack&&(h+=":"+v.stack)),v=l.b(150),3<v){l.U=(h=z6((v-=(h=h.slice(0,(v|0)-3),(h.length|0)+3),h).replace(/\\r\\n/g,"\\n")),Q=l.U,l);try{d(109,l,u(h.length,2).concat(h),12)}finally{l.U=Q}}D(150,l,v)}),x=(X.prototype.b=(X.prototype.q0=function(){return G(this)},Y.yA=false,X.prototype.Y=function(Q){return(Q=Q().shift(),this).C().length||this.P().length||(this.P=this.C=void 0),Q},function(Q,l){if((l=this.S[Q],void 0)===l)throw O(30,this,0,Q),this.l;for(Q=7;Q--;);return l()}),function(Q,l){Q.T=("E:"+l.message+":"+l.stack).slice(0,2048)}),UF=((Y.f=(X.prototype.bF=function(Q,l,v,h,H){if(this.T)Q(this.T);else try{H=[],h=!this.V.length,F(this,[Ct,H,v]),F(this,[iB,Q,H]),l&&!h||p(this,true,l)}catch(r){x(this,r),Q(this.T)}},"toString"),Y).$="caller",function(Q,l,v,h,H,r){return function(){if(l.U==l){var J=[q4,Q,h,void 0,H,r,arguments],U=v&1;if(v&2)var z=(F(l,J),p(l,false,false));else U?(U=!l.V.length,F(l,J),U&&p(l,false,false)):z=jK(J,l);return z}}}),rf=(Y.l={},function(Q,l,v,h,H,r){for(l=(h=(((v=G((H={},Q)),H).L=G(Q),H).j=[],r=Q.U==Q?(G(Q)|0)-1:1,G(Q)),0);l<r;l++)H.j.push(G(Q));for(H.Z=Q.b(v);r--;)H.j[r]=Q.b(H.j[r]);return H.F=Q.b(h),H}),d=function(Q,l,v,h,H,r){if(l.U==l)for(r=l.b(Q),109==Q?(Q=function(J,U,z,t,g){if(r.fc!=(g=(z=r.length,(z|0)-4)>>3,g)){t=[0,0,H[1],(U=(g<<(r.fc=g,3))-4,H[2])];try{r.HQ=dg(pK(r,(U|0)+4),t,pK(r,U))}catch(K){throw K;}}r.push(r.HQ[z&7]^J)},H=l.b(89)):Q=function(J){r.push(J)},h&&Q(h&255),l=v.length,h=0;h<l;h++)Q(v[h])},u=(X.prototype.M0=function(Q,l,v){if(3==Q.length){for(v=0;3>v;v++)l[v]+=Q[v];for(Q=[13,8,13,12,16,(v=0,5),3,10,15];9>v;v++)l[3](l,v%3,Q[v])}},Y.VA=35,function(Q,l,v,h){for(h=(v=[],l|0)-1;0<=h;h--)v[(l|0)-1-(h|0)]=Q>>8*h&255;return v}),zu=function(Q,l){for(l=[];Q--;)l.push(255*Math.random()|0);return l},jK=function(Q,l,v,h,H){if(h=Q[l.v=false,0],h==Ct)l.SW=25,l.H(Q);else if(h==iB){v=Q[1];try{H=l.H(Q)}catch(r){x(l,r),H=l.T}v(H)}else if(h==vr)l.H(Q);else if(h==mC)l.H(Q);else if(h==tr){try{for(H=0;H<l.s.length;H++)try{v=l.s[H],v[0][v[1]](v[2])}catch(r){}}catch(r){}(0,Q[1])((l.s=[],function(r,J){l.bF(r,true,J)}))}else if(h==q4)return H=Q[2],v=Q[6],D(19,l,Q[4]?[v[0].h]:v),D(200,l,H),l.H(Q)},gf=function(Q,l,v,h,H,r){Q.c++;try{for(l=(h=(r=5001,H=Q.W,0),void 0);(Q.yA||--r)&&(Q.C||(h=Q.b(2))<H);)try{Q.C?l=Q.Y(Q.C):(D(104,Q,h),v=G(Q),l=Q.b(v)),l&&l.call?l(Q):O(21,Q,0,v),Q.v=true,k(false,Q,false)}catch(J){J!=Q.l&&(Q.b(106)?O(22,Q,J):D(106,Q,J))}r||O(33,Q)}catch(J){try{O(22,Q,J)}catch(U){x(Q,U)}}Q.c--},p=(X.prototype.H=(((((Y=X.prototype,Y).od=function(){return Math.floor(this.B+(this.N()-this.K))},Y).xo=function(Q,l,v,h,H){for(H=h=0;H<Q.length;H++)h+=Q.charCodeAt(H),h+=h<<10,h^=h>>6;return(h=new Number((Q=(h+=h<<3,h^=h>>11,h)+(h<<15)>>>0,Q)&(1<<l)-1),h)[0]=(Q>>>l)%v,h},Y.QA=function(Q,l,v,h,H,r){for(v=H=0,h=[];v<Q.length;v++)for(H+=l,r=r<<l|Q[v];7<H;)H-=8,h.push(r>>H&255);return h},Y).gn=function(Q,l,v,h){for(;v--;)2!=v&&104!=v&&l.S[v]&&(l.S[v]=l[h](l[Q](v),this));l[Q]=this},Y.nc=function(){return Math.floor(this.N())},Y).Tn=function(Q,l,v){return(l=(l^=l<<13,l^=l>>17,(l^l<<5)&v))||(l=1),Q^l},Y.N=(window.performance||{}).now?function(){return this.PQ+window.performance.now()}:function(){return+new Date},function(Q,l){return l={},Q={},function(v,h,H,r,J,U,z,t,g,K,C,T,a,S,E,P,q,b,W,y,V,M){l=(J=l,Q);try{if(E=v[0],E==ot)return J==Q?24:72;if(E==mC){z=v[1];try{for(K=(h=[],0);K<z.length;){if((T=(g=(M=(S=B[z.charAt(K++)],K<z.length?B[z.charAt(K)]:0),++K,K<z.length)?B[z.charAt(K)]:64,++K,K)<z.length?B[z.charAt(K)]:64,++K,null==S)||null==M||null==g||null==T)throw Error();64!=(h.push(S<<2|M>>4),g)&&(h.push(M<<4&240|g>>2),64!=T&&h.push(g<<6&192|T))}(this.W=(this.o=h,this).o.length<<3,D)(237,this,[0,0,0])}catch(QR){QR!=this.l&&O(17,this,QR);return}gf(this)}else if(E==Ct)h=v[1],h.push(this.b(163).length,this.b(87).length,this.b(150),this.b(109).length),D(200,this,v[2]),this.S[253]&&Kt(this,this.b(253));else{if(E==iB){this.U=(W=(U=(h=v[2],u)((this.b(87).length|0)+2,2),this).U,this);try{P=this.b(231),0<P.length&&d(87,this,u(P.length,2).concat(P),15),d(87,this,[1],104),d(87,this,[7]),z=0,z+=this.b(153)&2047,y=this.b(109),z-=(this.b(87).length|0)+5,4<y.length&&(z-=(y.length|0)+3),0<z&&d(87,this,u(z,2).concat(zu(z)),10),4<y.length&&d(87,this,u(y.length,2).concat(y),153)}finally{this.U=W}for(S=((C=zu(2).concat(this.b(87)),C[1]=C[0]^3,C[3]=C[1]^U[0],C)[4]=C[1]^U[1],z=0,[]);z<C.length;z+=3)a=(q=z+1<C.length)?C[z+1]:0,H=z+2<C.length,V=C[z],M=V>>2,g=(V&3)<<4|a>>4,b=H?C[z+2]:0,T=b&63,U=(a&15)<<2|b>>6,H||(T=64,q||(U=64)),S.push(Z[M],Z[g],Z[U],Z[T]);if(t=S.join(""))t="!"+t;else for(t="",q=0;q<C.length;q++)r=C[q][this.f](16),1==r.length&&(r="0"+r),t+=r;return((K=t,this).b(163).length=h.shift(),this.b(87)).length=h.shift(),D(150,this,h.shift()),this.b(109).length=h.shift(),K}if(E==vr)Kt(this,v[1]);else if(E==q4)return Kt(this,v[1])}}finally{l=J}}}()),function(Q,l,v,h,H,r){if(Q.V.length){Q.g&&0(),Q.wn=v,Q.g=true;try{H=Q.N(),Q.dn=H,Q.K=H,h=ZU(Q,v),r=Q.N()-Q.K,Q.B+=r,r<(l?0:10)||0>=Q.SW--||(r=Math.floor(r),Q.WQ.push(254>=r?r:254))}finally{Q.g=false}return h}}),Br=function(Q,l,v){return l.bF(function(h){v=h},false,Q),v},ZU=((X.prototype.jW=function(Q,l,v){for(v=(l=G(this),0);0<Q;Q--)v=v<<8|G(this);D(l,this,v)},X.prototype).R=function(Q,l,v,h){((v=(h=(l=Q&4,Q&=3,v=G(this),G)(this),this).b(v),l)&&(v=z6((""+v).replace(/\\r\\n/g,"\\n"))),Q&&d(h,this,u(v.length,2)),d)(h,this,v)},function(Q,l,v,h){for(;Q.V.length;)if(Q.I=false,h=Q.V.pop(),h=jK(h,Q),l&&Q.I){(v=Q,N)(function(){p(v,true,true)});break}return h}),hr=function(Q,l,v,h){v=G(Q),h=G(Q),d(h,Q,u(Q.b(v),l))},k=function(Q,l,v,h){if(!(h=0<l.E5&&l.g&&l.wn&&1>=l.c&&!l.C&&!l.I&&(l.v||!v)&&0==document.hidden,h)||(h?l.N():l.dn)-l.K<l.E5-(Q?255:v?5:2))return false;return Q=l.b(v?104:2),D(2,l,l.W),l.V.push([vr,Q]),l.I=true},Hr=function(Q){return(Q=J5())&&1===eval(Q.createScript("1"))?function(l){return Q.createScript(l)}:function(l){return""+l}}(),yR=["botguard"],L=R;yR[0]in L||"undefined"==typeof L.execScript||L.execScript("var "+yR[0]);for(var I;yR.length&&(I=yR.shift());)L=L[I]&&L[I]!==Object.prototype[I]?L[I]:L[I]={};(25<(n=R.botguard,n.m)||(n.m=26,n.bg=LK,n.a=uo),n).RPi_=function(Q,l,v,h){return[(h=new X({AH:l,hH:v},Q),function(H){return Br(H,h)})]};try{n.u||(PB(R,function(){},"unload"),n.u=1)}catch(Q){};}).call(this);'));}).call(this);
// 	</script>
// 	<script type="text/javascript" nonce="1x7OGKidLzK904sNdOh7Aw">
// 		document.bg = new botguard.bg('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');
// 	</script>
// 	<script nonce="1x7OGKidLzK904sNdOh7Aw">
// 		gaia = window.gaia || {};
//   gaia.ps = gaia.ps || {};
//   gaia.ps.hasPrefilledIdentifier = false;
//   function gaia_parseFragment() {
//   var hash = location.hash;
//   var params = {};
//   if (!hash) {
//   return params;
//   }
//   var paramStrs = decodeURIComponent(hash.substring(1)).split('&');
//   for (var i = 0; i < paramStrs.length; i++) {
//       var param = paramStrs[i].split('=');
//       params[param[0]] = param[1];
//     }
//     return params;
//   }

//   function gaia_prefillEmail() {
//     var email = null;
//     var form = null;
//     if (document.getElementById) {
//       email = document.getElementById('Email');
//       form = document.getElementById('gaia_loginform');
//     }
//     if (form && email && (email.value == null || email.value == '')
//         && (email.type != 'hidden')) {
//       hashParams = gaia_parseFragment();
//       if (hashParams['Email'] && hashParams['Email'] != '') {
//         email.value = hashParams['Email'];
//       }
//     }
//   }

  
//   try {
//     gaia_prefillEmail();
//   } catch (e) {
//   }
  
// 	</script>
// 	<script nonce="1x7OGKidLzK904sNdOh7Aw">
// 		var gaia_scrollToElement = function(element) {
//   var calculateOffsetHeight = function(element) {
//   var curtop = 0;
//   if (element.offsetParent) {
//   while (element) {
//   curtop += element.offsetTop;
//   element = element.offsetParent;
//   }
//   }
//   return curtop;
//   }
//   var siginOffsetHeight = calculateOffsetHeight(element);
//   var scrollHeight = siginOffsetHeight - window.innerHeight +
//   element.clientHeight + 0.02 * window.innerHeight;
//   window.scroll(0, scrollHeight);
//   }
// 	</script>
// 	<script nonce="1x7OGKidLzK904sNdOh7Aw">
// 		if (gaia.ps.hasPrefilledIdentifier) {
//   var form = document.getElementById('gaia_loginform');
//   if (form) {
//   form.submit();
//   }
//   }
// 	</script>
// 	<script nonce="1x7OGKidLzK904sNdOh7Aw">
// 		(function(){
//   gaia_onLoginSubmit = function() {
//   try {
//   document.bg.invoke(function(response) {
//   document.getElementById('bgresponse').value = response;
//   });
//   } catch (err) {
//   document.getElementById('bgresponse').value = '';
//   }
//   return true;
//   }
//   document.getElementById('gaia_loginform').onsubmit = gaia_onLoginSubmit;
//   var signinButton;
//   signinButton = document.getElementById('next');
//   gaia_attachEvent(window, 'load', function(){
//   gaia_scrollToElement(signinButton);
//   });
//   })();
// 	</script>
// </body>

// </html>
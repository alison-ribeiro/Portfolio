import { createGlobalStyle } from "styled-components";
import { devices } from '../Responsive/';

export const GlobalStyle = createGlobalStyle`


html, body {
	width: 100vw;
	height: 100vh;
	font-size: 32px;
	overflow: hidden;
	background-color: ${props => props.theme.colors.bgColorSecundary};

}
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	color: ${props => props.theme.colors.primary};
	transition: all .1s linear;
	::-webkit-scrollbar {
    background-color: #383838;
    width: 8px;
    
  }
  ::-webkit-scrollbar-thumb {
      background-color: #6b6b6b;
      border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
      background-color: #383838;
      border-radius: 10px;
  }
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}


@media ${devices.mobileL} {
  html, body{
		font-size: 20px;
	}
}


`;


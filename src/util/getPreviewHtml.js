
export default function getPreviewHtml(html, subString, index) {
   return html.split(subString, parseInt(index)).join(subString);
}
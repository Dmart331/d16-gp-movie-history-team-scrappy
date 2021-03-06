'use strict';

// Loading a base64 favicon from a javascript file so:
//  1. It doesn't take an extra server request, and
//  2. Browsers can still cache it for speedy loading

let movieActionIcon="AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEcFyshHBcrIRwXKyEcFyshHBcrIRwXKyEcFyshHBcrIRwXKyEcFyshHBcrIRwXKyEcFyshHBcrAAAAAAAAAAAhHBeFIRwXUCEcF4UhHBeFIRwXhSEcF4UhHBeFIRwXhSEcF4UhHBeFIRwXhSEcF4UhHBeFIRwXUAAAAAAAAAAAIRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF1AAAAAAAAAAACEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBdQAAAAAAAAAAAhHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwXUAAAAAAAAAAAIRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF1AAAAAAAAAAACEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBdQAAAAAAAAAAAhHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwXUAAAAAAAAAAAIRwX/wAAAAAAAAAAIRwX/wAAAAAAAAAAIRwX/wAAAAAAAAAAIRwX/wAAAAAAAAAAIRwX/yEcF1AAAAAAAAAAACEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBf/IRwX/yEcF/8hHBdQAAAAAAAAAAAhHBf/IRwX/yEcF4UhHBeFIRwXUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEcF/8hHBf/IRwX/yEcF/8hHBeFIRwXhSEcF1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhHBf/IRwX/yEcF/8hHBf/IRwXhSEcF4UhHBdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIRwX/yEcF/8hHBf/IRwX/yEcF4UhHBdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEcF/8hHBf/IRwX/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AANABAADAAQAAwAEAAMABAADAAQAAwAEAAMABAADbbQAAwAEAAMP/AADgfwAA/A8AAP+DAAD/8QAA//8AAA==";

let docHead = document.getElementsByTagName("head")[0],
    newLink = document.createElement("link");

newLink.rel = "shortcut icon";
newLink.href = `data:image/png;base64,${movieActionIcon}`;
docHead.appendChild(newLink);
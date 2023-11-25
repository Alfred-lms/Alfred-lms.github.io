import { createRoot } from "react-dom/client";

//clear HTML

document.body.innerHTML = '<div id="app"></div>'

//render react component
const root = createRoot(document.getElementById('app'));
root.render(<h2>And this is the first body of this same website.</h2>);
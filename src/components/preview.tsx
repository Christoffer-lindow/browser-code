import React, { useEffect, useRef } from "react";
import "./preview.css";
interface PreviewProps {
  code: string;
  bundlingError: string;
}

const html = `
<html>
  <head></head>
  <body>
  <div id="root"></div>   
  <script>
  const handleError = (err) => {
    const root = document.querySelector("#root");
    root.innerHTML = '<div style="color: red;"<h2><strong>Could not run code</h2></strong><br>' + err + '</div>'
    console.log("There was an error with your code, error stack bellow")
    console.error(err)
  }
  window.addEventListener('error', (event) => {
    event.preventDefault()
    handleError(event.error)
  })
  window.addEventListener('message', (event) => {
    try {
    eval(event.data);
    } catch (err) {
      handleError(err)
    }
  }, false);
</script>
  </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, bundlingError }) => {
  const iframe = useRef<any>();
  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);
  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
        title="code preview"
      />
      {bundlingError && <div className="preview-error">
        <h2><strong>Bundling Error</strong></h2>
        <p> {bundlingError}</p></div>}
    </div>
  );
};

export default Preview;

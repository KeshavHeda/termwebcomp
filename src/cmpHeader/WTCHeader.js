import r2wc from "@r2wc/react-to-web-component";
import TCHeader from "./TCHeader";

const WTCHeader = r2wc(TCHeader);

customElements.define("term-header", WTCHeader);
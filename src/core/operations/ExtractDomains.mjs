/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import { search, DOMAIN_REGEX } from "../lib/Extract.mjs";

/**
 * Extract domains operation
 */
class ExtractDomains extends Operation {

    /**
     * ExtractDomains constructor
     */
    constructor() {
        super();

        this.name = "Extract domains";
        this.module = "Regex";
        this.description = "提取完全合规的域名。<br>注意这将不包含路径。使用 <strong>Extract URLs</strong> 来得到整个 URL。";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                "name": "Display total",
                "type": "boolean",
                "value": true
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const displayTotal = args[0];
        return search(input, DOMAIN_REGEX, null, displayTotal);
    }

}

export default ExtractDomains;

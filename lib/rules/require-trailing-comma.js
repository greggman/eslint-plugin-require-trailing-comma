/**
 * @fileoverview A rule to require trailing commas
 * @author Gregg Tavares
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var all = (context.options[0] === "all");

     //-------------------------------------------------------------------------
     // Helpers
     //-------------------------------------------------------------------------
    function tokensOnSameLine(node) {
        var openToken  = context.getFirstToken(node);
        var closeToken = context.getLastToken(node);
        return openToken.loc.start.line === closeToken.loc.start.line;
    }

    function checkForTrailingComma(node) {
        var items = node.properties || node.elements,
            length = items.length,
            lastItem, penultimateToken;

        if (length) {
            lastItem = items[length - 1];
            if (lastItem) {
                penultimateToken = context.getLastToken(node, 1);
                if (penultimateToken.value !== ",") {
                    if (all || !tokensOnSameLine(node)) {
                        context.report(lastItem, penultimateToken.loc.start, "Missing trailing comma.");
                    }
                }
            }
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "ObjectExpression": checkForTrailingComma,
        "ArrayExpression": checkForTrailingComma
    };

};


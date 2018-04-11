/* global builder locator classifier */

const scanner = {
    //limit the number of child node to parse
    limit: 1000,
    /**
     * This function use to parse all nodes in the loaded page
     * use only with scan function
     * @param {*Array} array : array contain element selector when return
     * @param {*Element} root : the root tab, should be the body
     * @param {*Array} attributesArray : the stratergy array
     */
    parseNodes(array, root, attributesArray) {
        this.limit = this.limit - 1;
        if ((this.limit <= 0) || (root === undefined)) return [];
        //get root element type and value
        const hash = classifier(root);

        if (hash !== null) {
            //get element's attributes value
            const tree = builder.build(root, attributesArray, []);
            //Assign the xpath to hash
            Object.assign(hash, {
                path: locator.build(tree, root, hash.type, attributesArray)
            });
            array.push(hash);
        }
        //Parse all the child nodes
        const children = root.childNodes;
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeType === 1) { // element node
                this.parseNodes(array, children[i], attributesArray);
            }
        }
        return array;
    },
    /**
     * This function use to parse the information of the given element
     * @param {*DateTime} time : current time
     * @param {*Element} node : element to parse
     * @param {*Array} attributesArray : the stratergy array
     */
    parseNode(time, node, attributesArray) {
        if (node !== undefined) {
            const hash = classifier(node) || { type: 'default' };

            const tree = builder.build(node, attributesArray, []);

            Object.assign(hash, {
                time,
                path: locator.build(tree, node, hash.type)
            });
            return hash;
        }
        return {};
    }
};

if (typeof exports !== 'undefined') module.exports.scanner = scanner;
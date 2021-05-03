const fs = require("fs");
const path = require("path");
const main = fs.readFileSync(path.join(__dirname, "./index.html"), "utf8");

module.exports = {
    placeholder() {
        return `
        <div class="container text-center">
            <p>Loading data...</p>
        </div>
        `;
    },
    data(req) {
        return { data: {} }
    },
    content(req, data) {
        return {
            main
        };
    }
};
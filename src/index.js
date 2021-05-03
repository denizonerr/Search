process.env.DEFAULT_CONTENT_TIMEOUT = "70000";
process.env.GLOBAL_REQUEST_TIMEOUT = "75000";
const PuzzleJs = require('@puzzle-js/core');
const path = require('path');

const gateway = new PuzzleJs.Gateway({
    name: "search",
    fragments: [
        {
            name: "search",
            testCookie: "my-header-ab",
            version: "1.0.0",
            versions: {
                "1.0.0": {
                    assets: [],
                    dependencies: []
                }
            },
            render: {
                url: "*"
            }
        },
        {
          name: "result",
          testCookie: "my-header-ab",
          version: "1.0.0",
          versions: {
              "1.0.0": {
                  assets: [],
                  dependencies: []
              }
          },
          render: {
              url: "*"
          }
      },
    ],
    api: [

    ],
    serverOptions: {
        port: 4449
    },
    url: 'https://localhost:4449',
    fragmentsFolder: path.join(__dirname, "./src/fragments")
});


gateway.init(() => {
    console.log('Search form is ready to respond');
});

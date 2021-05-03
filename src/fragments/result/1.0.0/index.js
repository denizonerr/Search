const fs = require("fs");
const path = require("path");
const main = fs.readFileSync(path.join(__dirname, "./index.html"), "utf8");
const getAlbums = require("./getAlbums");

module.exports = {
    placeholder() {
        return `
        <div class="container text-center">
            <p>Loading data...</p>
        </div>
        `;
    },
    async data(req) {

        try{
        const albums = await getAlbums();

        console.log("**"+ albums.data);

        await new Promise(res => setTimeout(res, 4000));

        return {
            data: albums.data.slice(0, 1)
        }
    }catch(err){

        }
    },
    content(req, data) {
        if(data!==null){
        console.log(this.data.data);   
        const d=[{"key":"test.key1","value":"value1","description":"aciklama"},{"key":"test.key2","value":"value2","description":"aciklama"},{"key":"test.key3","value":"value3","description":"aciklama"},{"key":"test.key4","value":"value4","description":"aciklama"}];  
        const albumCards = d.map(item => `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">      
            <div class="card-body">
                <p class="card-text" id=${item.key}>${item.key}</p>
            </div>
        </div>
    </div>
    `).join("");

        return {
            main: main.replace("{data}", albumCards)
        };}

    }
};
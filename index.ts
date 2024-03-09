const path = "./uploads/data.csv";
const file = Bun.file(path);
const text = await file.text();
const lines = text.split("\n");
const csvArray: string[][] = [];

for (const line of lines) {
    csvArray.push([line]);
}

const csvJson = JSON.stringify(csvArray);

console.log(csvJson);

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response(csvJson);
    },
});


console.log(`Listening on http://localhost:${server.port}/`);



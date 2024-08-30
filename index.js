const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World!\n");
// });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // default route
    if (req.url === "/") {
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write("<p>I wonder what else we can send...</p>");
        res.write("<ul>Default route</ul>");
    }
    // custom route
    else if (req.url === "/welcome") {
        res.write("<p>Welcome to this page</p>");
    } else {
        res.write(
            '<h1 style= "text-align: center">The page you are looking for does not exist. </h1>'
        );
        res.write(
            '<h2 style= "text-align: center">The internet does not exist. </h2>'
        );
        res.write(
            '<h3 style= "text-align: center; color: red">You do not exist.</h3>'
        );
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

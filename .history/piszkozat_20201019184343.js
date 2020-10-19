/**
 * HANDLE STATIC CONTENT
 */
// Allowed Mime types for static content
const mimeTypes = {
    '.html': 'text/html',
    '.jgp': 'image/jpeg',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
};
/**
 * Get the content type for a given path
 * @param {string} url - url extracted from request.url
 */
server.getContentType = url => {
    // Set the default content type to application/octet-stream
    let contentType = 'application/octet-stream';
    // Get the file extension
    const extname = path.extname(url);
    // Set the contentType based on the mime type
    for (let key in mimeTypes) {
        if (mimeTypes.hasOwnProperty(key)) {
            if (extname === key) {
                contentType = mimeTypes[key];
            }
        }
    }
    return contentType;
};
/**
 * Serve the static content
 * @param {string} pathname - request.url eg: /public/index.html
 * @param {Object} response - response object 
 */
server.serveStaticContent = (pathname, response) => {
    // Get content type based on the file extension
    const contentType = server.getContentType(pathname);
    // Set the Content-Type response header
    response.setHeader('Content-Type', contentType);
    // Read the file and send the response
    fs.readFile(`${baseDir}${pathname}`, (error, data) => {
        if (!error) {
            response.writeHead(200);
            response.end(data);
        } else {
            response.writeHead(404);
            response.end('404 - File Not Found');
        }
    });
};
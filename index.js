var parseurl = require('parseurl');

function customRedirects (path_redirects) {
  return function redirectMiddleware(req, res, next) {

    var path = parseurl(req).pathname;

    if (path_redirects[path]) {
      return res.redirect(301, path_redirects[path] );
    };
    return next();
  };
};

module.exports = customRedirects;

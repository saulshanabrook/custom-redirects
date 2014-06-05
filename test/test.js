var customRedirects = require('..'),
    request = require('supertest')
    express = require('express');


function createApp(redirects) {
  var app = express();
  app.use(customRedirects(redirects));
  return app;
}

describe('custom-redirects()', function(){
  it('should redirect', function(done){
    request(createApp({'/original/': '/destination/'}))
    .get('/original/')
    .expect(301)
    .expect('Location', '/destination/', done);
  });
  it('shouldnt redirect when not specified', function(done){
    request(createApp({}))
    .get('/something/')
    .expect(404, done);
  });
});

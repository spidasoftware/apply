// init the test client
var client = restify.createJsonClient({
    version: '*',
    url: 'http://0.0.0.0:8080'
});
 
describe('service: applications', function() {
     describe('get response check', function() {
        it('should not get a 200 response', function(done) {
            client.get('/applications', function(err, req, res, obj) {
                if (res.statusCode == 200) {
                    throw new Error('invalid response from /applications');
                }
                done();
            });
        });
    });
});

describe('post response check', function() {
  it('should get a 400 response because missing description', function(done) {
    client.post('/applications', { application: { invalid: 'object' } }, function(err, req, res, obj) {
      if (res.statusCode != 400) {
        throw new Error('invalid response from /applications');
      }
      done();
    });
  });
});
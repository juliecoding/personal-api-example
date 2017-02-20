module.exports = {

  addHeaders: function(req, res, next) {
    console.log('hellooooo');
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },
  verify(req,res,next) {
    const r = req.params
    if (r.username === 'j' && r.pin === '4545') {
      next();
    } else {
      res.status(401).json('Not allowed!')
    }
  }
}

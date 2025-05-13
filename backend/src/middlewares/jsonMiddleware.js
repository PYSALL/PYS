export function enforceJson(req, res, next) {
    // if (req.method !== 'GET' && !req.is('application/json')) {
    //   return res
    //     .status(415)
    //     .json({ error: 'Unsupported Media Type – only application/json is allowed' });
    // }
  
    // const accept = req.get('Accept');
    // if (accept && !accept.includes('application/json')) {
    //   return res
    //     .status(406)
    //     .json({ error: 'Not Acceptable – API only supports application/json responses' });
    // }
  
    // res.type('application/json');
    next();
  }
  
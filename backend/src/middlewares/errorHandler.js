export default (err, req, res, next) => {
    console.error(err);
    const status = err.message === 'Product not found' ? 404
                 : err.name === 'ValidationError'      ? 400
                 : 500;
    res.status(status).json({ error: err.message });
};
  
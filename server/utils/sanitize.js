const sanitizeInput = (req, res, next) => {
    const sanitize = (value) => {
        if (value === 'string') {
            return value.replace(/<[^>]*>/gm, '');
        }
        return value;
    }

    if (req.body) {
        for (const key in req.body) {
            req.body[key] = sanitize(req.body[key]);
        }
    }

    next();
};

export default sanitizeInput;
import jwt from "jsonwebtoken"

const authMiddleWare = (...allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "No token provided"
            });
        }

        const token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if ( !allowedRoles.includes(decoded.role)) {
                return res.status(403).json({
                    message: "Access Denied"
                })
            }
            req.bu = decoded;
            next();
        } catch (err) {
            return res.status(403).json({
                message: "Invalid or expired token"
            });
        }
    }
}

export default authMiddleWare;
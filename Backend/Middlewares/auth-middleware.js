import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.headers['authorization'];

  if (!token) {
    return res.json({
      message: "Token is not coming",
      success: false,
      error: true
    });
  }

  try {
    // Verify the token and extract the user information
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId = decoded.id;

    // Continue to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(201).json({
      message: "Token is not valid",
      success: false,
      error: true
    });
  }
}

export default authMiddleware;

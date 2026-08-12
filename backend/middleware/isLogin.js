export const isLogin = (req, res, next) => {
  const token = req.cookies?.token;
  console.log(token);
  if (!token) {
    return res.status(400).json({ message: "Unautorized.Please Login in." });
  }

  next();
};

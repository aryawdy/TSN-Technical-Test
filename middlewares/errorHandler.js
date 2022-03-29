const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal server error";

  if (err.message === "INVALID_USER") {
    code = 400;
    msg = `Invalid email/password`;
  } else if (
    err.message === "INVALID_TOKEN" ||
    err.name === "JsonWebTokenError"
  ) {
    code = 401;
    msg = "Invalid token";
  } else if (err.name === "ValidationError") {
    code = 400;
    msg = err.message;
  }

  res.status(code).json({ message: msg });
};

module.exports = errorHandler;

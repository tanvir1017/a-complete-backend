/*

CODE-BASE type 1

const asyncHandler = (func) => async (req, res, next) => {
    try {
        await func(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message:err.message
        })
    }
}; */

// CODE-BASE TYPE 2

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

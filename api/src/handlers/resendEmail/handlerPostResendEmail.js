const postResendEmailController = require("../../controllers/resendEmail/postResendEmailController");

const handlerPostResendEmail = async (req, res) => {
  try {
    const product = await postResendEmailController(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostResendEmail;

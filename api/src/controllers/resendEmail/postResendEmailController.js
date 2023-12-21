const { Resend } = require("resend");
const { EmailTemplate } = require("../../template/templateResendEmail");

const resend = new Resend(process.env.RESEND_API_KEY);

const postResendEmailController = async ({ name, email, phone, message }) => {
  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["infotezashoes@gmail.com"],
    subject: "Hello ;D",
    html: await EmailTemplate({ name, email, phone, message }),
  });

  return data;
};

module.exports = postResendEmailController;

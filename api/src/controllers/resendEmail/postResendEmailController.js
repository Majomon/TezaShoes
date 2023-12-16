const { Resend } = require("resend");
const { EmailTemplate } = require("../../template/templateResendEmail");

const resend = new Resend(process.env.RESEND_API_KEY);

const postResendEmailController = async ({ name, email, phone, message }) => {
  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["mauri.monzon91@gmail.com"],
    subject: "Hello Perro",
    html: await EmailTemplate({ name, email, phone, message }),
  });

  return data;
};

module.exports = postResendEmailController;

const EmailTemplate = ({ name, email, phone, message }) => {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
          }
          h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            font-size: 16px;
            margin-top: 10px;
            margin-bottom: 20px;
          }
          h2 {
            font-size: 20px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Nuevo mail por parte de ${name}!</h1>
        <p>Su correo electrónico: ${email}</p>
        <p>Su teléfono: ${phone}</p>
        <h2>El mensaje</h2>
        <p>${message}</p>
      </body>
    </html>
  `;
};

module.exports = { EmailTemplate };

import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
/**
* This class contains all methods (functions) required to handle
* sendVerifyAccountEmail function.
* sendSuccessEmail function.
*/
class EmailHelper {
  /**
   * Handle send verify a user account email.
   * @param {string} url .
   * @param {string} name .
   * @param {string} to .
   * @param {string} action .
   * @returns {null} .
   */
  static async sendVerificationEmail(url, name, to, action) {
    const transporter = await nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDER_EMAIL_SECRET,
        },
        logger: false,
        debug: false,
      },
      {
        from: `ASSIGMENT <${process.env.SENDER_EMAIL}>`,
      },
    );

    const messageObj = {
      to: `${name} <${to}>`,
      subject: `Assignment ${action}`,
      text: `Hello ${name}`,
      html: `<!DOCTYPE html>
      <html>
          <head>
              <style type="text/css">
                  body{ height: 100%; width: 50%; margin: auto; text-align: center; color: rgb(87, 87, 87)}
                  h2 { color: #173b3f}
                  a { color: #173b3f; }
                  a.button{ background-color:#173b3f; color: #ffff; border: 0; padding: 10px 40px; text-decoration: none; display: inline-block; font-size: 16px;  margin: 20px 00px 20px 00px; }
                  a.button:hover{ background-color: #173b3f; color: #fff; }
              </style>
              <title>ASSIGNMENT VERIFICATION EMAIL</title>
          </head>
          
          <body>
              
              <div>
                  <h2> Welcome To Assignment Platform</h2>
                        
                  <p> ${name}, We're delighted to have you onboard !!</p>
                  <p>To activate your  account, please click the button below.</p>
                  <a class="button" href=${url}> ${action} </a>
                  <p>If the button is not working, click on the link below or copy the link below and paste the link in the browser to open it.</p>
                  <a href=${url}> ${url} </a>
            
              </div>
          </body>
      </html>`,
    };

    await transporter.sendMail(messageObj);
  }

  /**
   * Handle send verify a user account email.
   * @param {string} url .
   * @param {string} name .
   * @param {string} to .
   * @returns {null} .
   */
  static async sendSuccessfullyEmail(url, name, to) {
    const transporter = await nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDER_EMAIL_SECRET,
        },
        logger: false,
        debug: false,
      },
      {
        from: `ASSIGNMENT <${process.env.SENDER_EMAIL}>`,
      },
    );

    const messageObj = {
      to: `${name} <${to}>`,
      subject: 'Assignment Successfully Verified Account',
      text: `Hello ${name}`,
      html: `<!DOCTYPE html>
      <html>
          <head>
              <style type="text/css">
                  body{ height: 100%; width: 50%; margin: auto; text-align: center; color: rgb(87, 87, 87)}
                  h2 { color: #173b3f}
                  a { color: #173b3f; }
                  a.button{ background-color:#173b3f; color: #ffff; border: 0; padding: 10px 40px; text-decoration: none; display: inline-block; font-size: 16px;  margin: 20px 00px 20px 00px; }
                  a.button:hover{ background-color: #173b3f; color: #fff; }
              </style>
              <title>ASSIGNMENT SUCCESSFULLY EMAIL</title>
          </head>
          
          <body>
              
              <div>
                  <h2> Welcome To Assignment Platform</span></h2>
                  <p> Hello ${name}, we are happyly to let you know that you are successfully verified your account, from now you can login with your email and password.</p>
                  <p>Please get login into your verifeid account and start accessing our platform</p>
      
                  <a class="button" href=${url}> Login Now</a>
      
                  <p> Any query ? feel free to reachout to us we are happyly to respond your query.</p>
              </div>
          </body>
      </html>`,
    };

    await transporter.sendMail(messageObj);
  }
}

export default EmailHelper;

const nodeMailer = require("nodemailer");
 
const defaultEmailData = { from: "noreply@medicalhealthproject.com" };
 
exports.sendEmail = async (emailData) => {
    
    
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "medicalhealthproject",
            pass: "ldwtdkzgexxyfdvj"
        }
    });

    
    //console.log("fromm ::: ",emailData.to)
    // console.log("fromm ::: ",emailData.Subject)
    // console.log("fromm ::: ",emailData.TextPart)
    // console.log("fromm ::: ",emailData.HTMLPart)

     const mailData = {
         from : emailData.from,
         to: emailData.to,
         subject: "Password Reset Instructions",
         text: emailData.TextPart,
         html: emailData.HTMLPart
     }

    return (
        transporter.sendMail(mailData, (err,info) => {
           if(err) {
            console.log(`Problem sending email: ${err}`)
            } else {
                console.log(`Message sent: ${info.response}`)
            }
        })
    );
};

// const mailjet = require ('node-mailjet').connect('d41ea64d53b143f28da7d6a6bb0ba080', '70677fec99c9524d62bfd1bee3818e0b')

// exports.sendEmail = (emailData) =>{

//         console.log("Sending mail to: ",emailData.to)
//         mailjet.post("send", {'version': 'v3.1'})
//         .request({
//         "Messages":[
//             {
//             "From": {
//                 "Email": "medicalhealthproject.com"
//             },
//             "To": [
//                 {
//                 "Email": `${emailData.to}`
//                 }
//             ],
//             "Subject": "Password Reset Instructions",
//             "TextPart": `Please use the following link to reset your password: ${
//                 process.env.CLIENT_URL
//             }/reset-password/${emailData.token}`,
//             "HTMLPart": `<p>Please use the following link to reset your password:</p> <p>${process.env.CLIENT_URL}/reset-password/${emailData.token}</p>`,
//              "CustomID": "AppGettingStartedTest"      
//             }
//         ]
//         }).then((result) => {
//             console.log(result.body)
//           })
//           .catch((err) => {
//             console.log(err.statusCode)
//           })
// } 


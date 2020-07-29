import {IMailProvider, IMessage} from '../IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor(
   
  ) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '4064136a8e72d7',
        pass: '284c42274b3ef2'
      }
      
    })
  }
  public async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.address

      },
      from: {
        address: message.from.address,
        name: message.from.name
      },

      subject: message.subject,
      html: message.body
    
    })
  }
} 
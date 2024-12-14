// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Votre adresse e-mail définie dans .env
        pass: process.env.EMAIL_PASSWORD, // Mot de passe d'application généré
      },
    });

    // Vérifier la connexion SMTP
    this.transporter.verify((error, success) => {
      if (error) {
        console.log('Erreur de connexion au serveur SMTP:', error);
      } else {
        console.log('Connexion au serveur SMTP réussie');
      }
    });
  }

  async sendMail(name: string, email: string, message: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Votre adresse e-mail comme expéditeur
      to: process.env.EMAIL_USER, // L'adresse à laquelle vous voulez envoyer l'email (par exemple, votre propre e-mail)
      subject: `Message de ${name}`, // Le sujet de l'e-mail
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`, // Le corps du message
      replyTo: email, // Utiliser l'email de l'utilisateur pour la réponse
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('E-mail envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error.message);
      throw new Error('Erreur lors de l\'envoi de l\'e-mail');
    }
  }
}








package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(

            String name,

            String email,

            String message

    ) {

        try {

            SimpleMailMessage mail
                    = new SimpleMailMessage();

            // Sender Gmail

            mail.setFrom(
                    "bsukhendu48@gmail.com"
            );

            // Your Gmail where messages will arrive

            mail.setTo(
                    "bsukhendu48@gmail.com"
            );

            // So you can directly reply to visitor

            mail.setReplyTo(
                    email
            );

            mail.setSubject(
                    "📩 New Contact Form Message"
            );

            mail.setText(

                    "Name : "

                    + name

                    + "\n\nEmail : "

                    + email

                    + "\n\nMessage : "

                    + message

            );

            mailSender.send(mail);

            System.out.println(
                    "================================"
            );

            System.out.println(
                    "EMAIL SENT SUCCESSFULLY"
            );

            System.out.println(
                    "================================"
            );

        }

        catch (Exception e) {

            System.out.println(
                    "================================"
            );

            System.out.println(
                    "EMAIL ERROR"
            );

            System.out.println(
                    e.getMessage()
            );

            System.out.println(
                    "================================"
            );

            e.printStackTrace();

        }

    }

}
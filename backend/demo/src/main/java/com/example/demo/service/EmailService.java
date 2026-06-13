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

    ){

        try{

            SimpleMailMessage mail
                    = new SimpleMailMessage();

            mail.setTo(

                    "bsukhendu48@gmail.com"

            );

            mail.setSubject(

                    "New Contact Form Message"

            );

            mail.setText(

                    "Name : "

                    + name

                    + "\nEmail : "

                    + email

                    + "\n\nMessage : "

                    + message

            );

            mailSender.send(mail);

            System.out.println(

                    "EMAIL SENT SUCCESSFULLY"

            );

        }

        catch(Exception e){

            System.out.println(

                    "EMAIL ERROR"

            );

            e.printStackTrace();

        }

    }

}
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.scheduling.annotation.Async;

import org.springframework.stereotype.Service;

@Service

public class EmailService {

    @Autowired

    private JavaMailSender mailSender;

    @Async

    public void sendEmail(

            String name,

            String email,

            String message

    ){

        try{

            SimpleMailMessage mail

                    = new SimpleMailMessage();

            mail.setFrom(

                    "bsukhendu48@gmail.com"

            );

            mail.setTo(

                    "bsukhendu48@gmail.com"

            );

            mail.setReplyTo(

                    email

            );

            mail.setSubject(

                    "📩 New Portfolio Contact Message"

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
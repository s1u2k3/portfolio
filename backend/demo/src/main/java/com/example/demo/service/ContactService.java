package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Contact;
import com.example.demo.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repository;

    @Autowired
    private EmailService emailService;


    // Save Message

    public Contact saveContact(Contact contact){

contact.setCreatedAt(

LocalDateTime.now()

);
contact.setRead(false);

Contact saved=

repository.save(contact);

emailService.sendEmail(

contact.getName(),

contact.getEmail(),

contact.getMessage()

);

return saved;

}


    // Get All Messages

    public List<Contact> getAllContacts() {

        return repository.findAll();

    }



    // Delete Message

    public void deleteContact(String id) {

        repository.deleteById(id);

    }

    public Contact markAsRead(

String id

){

Contact contact=

repository

.findById(id)

.orElseThrow();

contact.setRead(true);

return repository.save(contact);

}

}
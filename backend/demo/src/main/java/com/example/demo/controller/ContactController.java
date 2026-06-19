package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Contact;
import com.example.demo.service.ContactService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService service;


    @PostMapping
    public Contact saveContact(
            @RequestBody Contact contact) {

        System.out.println("================================");

        System.out.println(
                "Name: " + contact.getName()
        );

        System.out.println(
                "Email: " + contact.getEmail()
        );

        System.out.println(
                "Message: " + contact.getMessage()
        );

        System.out.println("================================");

        return service.saveContact(contact);

    }


    @GetMapping
    public List<Contact> getAllContacts() {

        return service.getAllContacts();

    }


    @DeleteMapping("/{id}")
    public void deleteContact(

            @PathVariable String id

    ) {

        service.deleteContact(id);

    }


    @PutMapping("/{id}/read")
    public Contact markAsRead(

            @PathVariable String id

    ) {

        return service.markAsRead(id);

    }

}
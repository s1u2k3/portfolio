package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Admin;
import com.example.demo.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/login")
    public Map<String, String> login(
            @RequestBody Admin admin
    ) {

        Map<String, String> response
                = new HashMap<>();

        boolean success =
                service.login(admin);

        if (success) {

            response.put(
                    "message",
                    "Login Successful"
            );

        }

        else {

            response.put(
                    "message",
                    "Invalid Credentials"
            );

        }

        return response;

    }

}
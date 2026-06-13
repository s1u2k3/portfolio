package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AuthService {

    @Autowired
    private AdminRepository repository;

    public boolean login(Admin admin) {

        Admin existing =
                repository
                .findByUsername(
                        admin.getUsername()
                )
                .orElse(null);

        if (existing == null) {

            return false;

        }

        return existing
                .getPassword()
                .equals(
                        admin.getPassword()
                );

    }

}
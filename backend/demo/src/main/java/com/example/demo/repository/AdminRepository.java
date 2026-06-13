package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Admin;

public interface AdminRepository

extends MongoRepository<Admin,String>{

Optional<Admin>

findByUsername(

String username

);

}
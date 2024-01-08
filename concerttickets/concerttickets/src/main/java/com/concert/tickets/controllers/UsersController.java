package com.concert.tickets.controllers;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.concert.tickets.entities.Users;
import com.concert.tickets.repos.UsersRepository;
import com.concert.tickets.services.UsersService;

import ch.qos.logback.classic.Logger;
import lombok.extern.java.Log;

@RestController
public class UsersController {
	
	Logger logger  =(Logger) org.slf4j.LoggerFactory.getLogger(UsersController.class);
	
	@Autowired
	private UsersService userservice;
	
	@GetMapping("/users/{id}")
	@CrossOrigin
	public Users getUserById(@PathVariable int id) {
		return userservice.getUserById(id);
	}
	
	@GetMapping("/users")
	@CrossOrigin
	public List<Users> getUsers() {
		return userservice.getUsers();
	}
	
	@PostMapping("/users")
	@CrossOrigin
	public Users createUser(@RequestBody Users user) {
		Users u1 = userservice.createUser(user);
		logger.info("New User created successfully!!");
		return u1;
	}
	
	@PutMapping("/users")
	@CrossOrigin
	public Users updateUser(@RequestBody Users user) {
		return userservice.updateUser(user);
	}
	
	
	@DeleteMapping("/users/{id}")
	@CrossOrigin
	public void deleteUser(@PathVariable int id) {
		userservice.deleteUser(id);
	}
	
	@GetMapping("/matchuser/{username}/{password}")
	@CrossOrigin
	public Users findByUserNameAndPassword(@PathVariable String username, @PathVariable String password) {
		return userservice.findByUserNameAndPassword(username, password);
	}
	
	
}

package com.concert.tickets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.concert.tickets.entities.Users;
import com.concert.tickets.repos.UsersRepository;

@Service
public class UsersService {

	
	private UsersRepository usersrepo;
	
	public UsersService(UsersRepository usersrepo) {
		this.usersrepo = usersrepo;
	}
	
	public Users getUserById(int id) {
		return usersrepo.findById(id).get();
	}
	
	
	public List<Users> getUsers() {
		return usersrepo.findAll();
	}
	
	
	public Users createUser(Users user) {
		return usersrepo.save(user);
	}
	
	public Users updateUser(Users user) {
		return usersrepo.save(user);
	}
	
	
	public void deleteUser(int id) {
		usersrepo.deleteById(id);
	}
	
	public Users findByUserNameAndPassword(String username, String password) {
		return usersrepo.findByUserNameAndPassword(username, password);
	}
}

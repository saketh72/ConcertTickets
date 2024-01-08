package com.concert.tickets.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.concert.tickets.entities.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
	public Users findByUserNameAndPassword(String username, String password);
}

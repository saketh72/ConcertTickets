package com.concert.tickets.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.concert.tickets.entities.Stadium;

public interface StadiumRepository extends JpaRepository<Stadium, Integer> {

}

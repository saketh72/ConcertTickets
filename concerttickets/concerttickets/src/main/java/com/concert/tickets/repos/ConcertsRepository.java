package com.concert.tickets.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.concert.tickets.entities.Concerts;

public interface ConcertsRepository extends JpaRepository<Concerts, Integer> {

}

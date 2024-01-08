package com.concert.tickets.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.concert.tickets.entities.Show;

public interface ShowRepository extends JpaRepository<Show, Integer> {
	public Show findByMusicianName(String name);
}

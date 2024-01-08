package com.concert.tickets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concert.tickets.entities.Concerts;
import com.concert.tickets.repos.ConcertsRepository;

@Service
public class ConcertService {
	
	@Autowired
	ConcertsRepository concertrepo;
	
	public Concerts getConcertById(int id) {
		return concertrepo.findById(id).get();
	}
	
	
	public List<Concerts> getConcerts() {
		return concertrepo.findAll();
	}
	
	
	public Concerts createConcert(Concerts concert) {
		return concertrepo.save(concert);
	}
	
	public Concerts updateConcert(Concerts concert) {
		return concertrepo.save(concert);
	}
	
	
	public void deleteConcert(int id) {
		concertrepo.deleteById(id);
	}

}

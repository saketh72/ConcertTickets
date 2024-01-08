package com.concert.tickets.controllers;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.validator.internal.util.logging.LoggerFactory;
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

import com.concert.tickets.entities.Concerts;
import com.concert.tickets.repos.ConcertsRepository;
import com.concert.tickets.services.ConcertService;

import ch.qos.logback.classic.Logger;
import lombok.extern.java.Log;

@RestController
public class ConcertsController {
	
	Logger logger  =(Logger) org.slf4j.LoggerFactory.getLogger(ConcertsController.class);
	@Autowired
	private ConcertService concertsserv;
	
	@GetMapping("/concerts/{id}")
	@CrossOrigin
	public Concerts getConcertById(@PathVariable int id) {
		return concertsserv.getConcertById(id);
	}
	
	@GetMapping("/concerts")
	@CrossOrigin
	public List<Concerts> getConcerts() {
		return concertsserv.getConcerts();
	}
	
	@PostMapping("/concerts")
	@CrossOrigin
	public Concerts createConcert(@RequestBody Concerts concert) {
		Concerts c1 = concertsserv.createConcert(concert);
		logger.info("New Concert created successfully!!");
		return c1;
	}
	
	@PutMapping("/concerts")
	@CrossOrigin
	public Concerts updateConcert(@RequestBody Concerts concert) {
		return concertsserv.updateConcert(concert);
	}
	
	@DeleteMapping("/concerts/{id}")
	@CrossOrigin
	public void deleteConcert(@PathVariable int id) {
		concertsserv.deleteConcert(id);
	}
	
	
}

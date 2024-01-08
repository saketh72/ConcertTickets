package com.concert.tickets.controllers;

import java.util.List;


import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.concert.tickets.entities.Stadium;
import com.concert.tickets.repos.StadiumRepository;
import com.concert.tickets.services.StadiumService;

import ch.qos.logback.classic.Logger;
import lombok.extern.java.Log;

@RestController
public class StadiumController {
	
	Logger logger  =(Logger) org.slf4j.LoggerFactory.getLogger(StadiumController.class);
	
	
	@Autowired
	private StadiumService stadiumserv;
	
	@RequestMapping(path="/stadiums/{id}",method=RequestMethod.GET)
	@CrossOrigin
	public Stadium getStadiumById(@PathVariable int id) {
		return stadiumserv.getStadiumById(id);
	}
	
	@RequestMapping(path="/stadiums",method=RequestMethod.GET)
	@CrossOrigin
	public List<Stadium> getStadiums() {
		return stadiumserv.getStadiums();
	}
	
	@RequestMapping(path="/stadiums",method=RequestMethod.POST)
	@CrossOrigin
	public Stadium createStadium(@RequestBody Stadium stadium) {
		Stadium s1 = stadiumserv.createStadium(stadium);
		logger.info("New Stadium created successfully!");
		return s1;
	}
	
	@RequestMapping(path="/stadiums",method=RequestMethod.PUT)
	@CrossOrigin
	public Stadium updateStadium(@RequestBody Stadium stadium) {
		return stadiumserv.updateStadium(stadium);
	}
	
	@RequestMapping(path="/stadiums/{id}",method=RequestMethod.DELETE)
	@CrossOrigin
	public void deleteStadium(@PathVariable int id) {
		stadiumserv.deleteStadium(id);
	}
	
	
}

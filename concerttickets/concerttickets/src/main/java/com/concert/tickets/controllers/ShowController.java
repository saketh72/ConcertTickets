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
import org.springframework.web.bind.annotation.RestController;

import com.concert.tickets.entities.Show;
import com.concert.tickets.services.ShowService;

import ch.qos.logback.classic.Logger;
import lombok.extern.java.Log;

@RestController
public class ShowController {
	
	Logger logger  =(Logger) org.slf4j.LoggerFactory.getLogger(ShowController.class);
	
	@Autowired
	private ShowService showserv;
	
	@GetMapping("/shows")
	@CrossOrigin
	public List<Show> GetShows() {
		return showserv.getShows();
	}
	
	@GetMapping("/shows/{id}")
	@CrossOrigin
	public Show getShowById(@PathVariable int id) {
		return showserv.getShowById(id);
	}
	
	@PostMapping("/shows")
	@CrossOrigin
	public Show createShow(@RequestBody Show show) {
		Show s1 = showserv.createShow(show);
		logger.info("New Show created successfully!!");
		return s1;
	}
	
	@PutMapping("/shows")
	@CrossOrigin
	public Show updateShow(@RequestBody Show show) {
		return showserv.updateShow(show);
	}
	
	@DeleteMapping("/shows/{id}")
	@CrossOrigin
	public void deleteShow(@PathVariable int id) {
		showserv.deleteShow(id);
	}
	
	@GetMapping("/searchshows/{name}")
	@CrossOrigin
	public Show findByMusicianName(@PathVariable String name) {
		return showserv.findByMusicianName(name);
	}

}

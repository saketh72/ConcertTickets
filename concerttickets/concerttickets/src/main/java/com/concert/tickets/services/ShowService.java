package com.concert.tickets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concert.tickets.entities.Show;
import com.concert.tickets.repos.ShowRepository;

@Service
public class ShowService {
	
	@Autowired
	private ShowRepository showrepo;
	
	public Show getShowById(int id) {
		return showrepo.findById(id).get();
	}
	
	
	public List<Show> getShows() {
		return showrepo.findAll();
	}
	
	
	public Show createShow(Show show) {
		return showrepo.save(show);
	}
	
	public Show updateShow(Show show) {
		return showrepo.save(show);
	}
	
	
	public void deleteShow(int id) {
		showrepo.deleteById(id);
	}
	
	public Show findByMusicianName(String name) {
		return showrepo.findByMusicianName(name);
	}
}

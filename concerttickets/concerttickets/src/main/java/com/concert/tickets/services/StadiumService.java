package com.concert.tickets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concert.tickets.entities.Stadium;
import com.concert.tickets.repos.StadiumRepository;

@Service
public class StadiumService {
	
	@Autowired
	StadiumRepository stadiumrepo;
	
	public Stadium getStadiumById(int id) {
		return stadiumrepo.findById(id).get();
	}
	
	
	public List<Stadium> getStadiums() {
		return stadiumrepo.findAll();
	}
	
	
	public Stadium createStadium(Stadium stadium) {
		return stadiumrepo.save(stadium);
	}
	
	public Stadium updateStadium(Stadium stadium) {
		return stadiumrepo.save(stadium);
	}
	
	
	public void deleteStadium(int id) {
		stadiumrepo.deleteById(id);
	}
}

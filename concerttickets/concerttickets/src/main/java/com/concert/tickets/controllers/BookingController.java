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

import com.concert.tickets.entities.Booking;
import com.concert.tickets.entities.Show;
import com.concert.tickets.entities.Users;
import com.concert.tickets.exceptions.NoSeatsException;
import com.concert.tickets.services.BookingService;

import ch.qos.logback.classic.Logger;
import lombok.extern.java.Log;

@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingserv;
	
	Logger logger  =(Logger) org.slf4j.LoggerFactory.getLogger(BookingController.class);
	
	@GetMapping("/bookings")
	@CrossOrigin
	private List<Booking> getBookings() {
		return bookingserv.getBookings();
	}
	
	@GetMapping("/bookings/{id}")
	@CrossOrigin
	private Booking getBookingById(@PathVariable int id) {
		return bookingserv.getBookingById(id);
	}
	
	@PostMapping("/bookings")
	@CrossOrigin
	private Booking createBooking(@RequestBody Booking booking) {
		Booking b1 = bookingserv.createBooking(booking);
		logger.info("New Booking created successfully!!");
		return b1;
	}
	
	@PutMapping("/bookings")
	@CrossOrigin
	private Booking updateBooking(@RequestBody Booking booking) {
		return bookingserv.updateBooking(booking);
	}
	
	@DeleteMapping("/bookings/{id}")
	@CrossOrigin
	private void deleteBooking(@PathVariable int id) {
		bookingserv.deleteBooking(id);
	}
	
	@GetMapping("/book/{showId}/{seats}/{userid}")
	@CrossOrigin
	private Booking book(@PathVariable int showId,@PathVariable int seats,@PathVariable int userid) throws NoSeatsException {
		return bookingserv.totalAmount(showId, seats, userid);
	}

	@GetMapping("/bookinguser/{userId}")
	@CrossOrigin
	private List<Booking> findByUser(@PathVariable int userId) {
		return bookingserv.findByUser(userId);
	}
	
}

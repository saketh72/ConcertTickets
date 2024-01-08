package com.concert.tickets.services;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concert.tickets.entities.Booking;
import com.concert.tickets.entities.Show;
import com.concert.tickets.entities.Stadium;
import com.concert.tickets.entities.Users;
import com.concert.tickets.exceptions.NoSeatsException;
import com.concert.tickets.repos.BookingRepository;
import com.concert.tickets.repos.ShowRepository;
import com.concert.tickets.repos.StadiumRepository;
import com.concert.tickets.repos.UsersRepository;

@Service
public class BookingService {
	
	@Autowired
	private BookingRepository bookingrepo;
	
	@Autowired
	private ShowRepository showrepo;
	
	@Autowired
	private UsersRepository userrepo;
	
	public List<Booking> getBookings() {
		return bookingrepo.findAll();
	}
	
	public Booking getBookingById(int id) {
		return bookingrepo.findById(id).get();
	}
	
	public Booking createBooking(Booking booking) {
		return bookingrepo.save(booking);
	}
	
	public Booking updateBooking(Booking booking) {
		return bookingrepo.save(booking);
	}
	
	public void deleteBooking(int id) {
		bookingrepo.deleteById(id);
	}
	
	public Booking totalAmount(int showId, int seats, int userid) throws NoSeatsException{
		Users u1 = userrepo.findById(userid).get();
		Show s1 = showrepo.findById(showId).get();
		int seatFare = s1.getStadium().getSeatFare();
		int at = s1.getAvailableTickets();
		if(at >= seats) {
			s1.setAvailableTickets(at - seats);
			Booking b1 = new Booking();
			Date date = Date.valueOf(LocalDate.now());
			b1.setBookedDate(date);
			b1.setShow(s1);
			b1.setUser(u1);
			b1.setTotalAmount(seatFare * seats);
			b1.setNoOfSeats(seats);
			bookingrepo.save(b1);
			return b1;
		}
		else {
			throw new NoSeatsException();
		}
	}
	
	public List<Booking> findByUser(int userId) {
		Users u1 = userrepo.findById(userId).get();
		return bookingrepo.findBookingsByUser(u1);
	}
}

package com.concert.tickets.repos;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.concert.tickets.entities.Booking;
import com.concert.tickets.entities.Show;
import com.concert.tickets.entities.Users;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

	@Query("SELECT b FROM Booking b WHERE b.user = ?1")
	public List<Booking> findBookingsByUser(Users userId);
}

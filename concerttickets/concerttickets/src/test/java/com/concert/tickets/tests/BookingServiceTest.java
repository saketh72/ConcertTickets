package com.concert.tickets.tests;

import static org.assertj.core.api.Assertions.assertThat;


import java.sql.Date;
import java.util.Optional;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.concert.tickets.entities.Booking;
import com.concert.tickets.entities.Concerts;
import com.concert.tickets.entities.Show;
import com.concert.tickets.entities.Stadium;
import com.concert.tickets.entities.Users;
import com.concert.tickets.exceptions.NoSeatsException;
import com.concert.tickets.repos.BookingRepository;
import com.concert.tickets.repos.ShowRepository;
import com.concert.tickets.repos.UsersRepository;
import com.concert.tickets.services.BookingService;

@RunWith(MockitoJUnitRunner.class)
public class BookingServiceTest {
	
	@Mock
	private UsersRepository userrepo;
	
	@Mock
	private ShowRepository showrepo;
	
	@Mock
	private BookingRepository bookingrepo;
	
	@InjectMocks
	private BookingService bookingserv;
	
	@Test
	public void whenTotalAmount_thenReturncost() throws NoSeatsException {
		
		Stadium stadium1 = Stadium.builder()
				.stadiumId(1)
				.stadiumDesc("xyz stadium")
				.seatFare(1000)
				.totalCapacity(10000)
				.build();
		Concerts concert1 = Concerts.builder()
				.concertId(1)
				.concertName("Anirudh Live")
				.build();
		Optional<Show> show1 = Optional.of(Show.builder()
				.showId(1)
				.musicianName("Anirudh")
				.stadium(stadium1)
				.concert(concert1)
				.availableTickets(1000)
				.build());
		Optional<Users> user1 = Optional.of(Users.builder()
				.userId(1)
				.userName("saketh")
				.password("sakthe")
				.build());
		
		Booking b2 = Booking.builder()
				.show(show1.get())
				.user(user1.get())
				.noOfSeats(1)
				.bookedDate(Date.valueOf("2023-06-18"))
				.totalAmount(1000)
				.build();
		
		when(userrepo.findById(1)).thenReturn(user1);
		when(showrepo.findById(1)).thenReturn(show1);
		when(bookingrepo.save(b2)).thenReturn(b2);
		
		Booking b1 = bookingserv.totalAmount(1,1,1);
		assertThat(b1).isEqualTo(b2);
		
	}

	
}

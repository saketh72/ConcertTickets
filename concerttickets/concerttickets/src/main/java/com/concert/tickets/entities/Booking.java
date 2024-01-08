package com.concert.tickets.entities;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="booking")
@Builder
@Data
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "bookingId")
	private int bookingId;
	
	@OneToOne(cascade=CascadeType.MERGE)
	private Show show;
	
	@OneToOne(cascade=CascadeType.MERGE)
	private Users user;
	
	private java.sql.Date bookedDate;
	
	private int noOfSeats;
	
	private int totalAmount;

	public Booking(int bookingId, Show show, Users user, Date bookedDate, int noOfSeats, int totalAmount) {
		super();
		this.bookingId = bookingId;
		this.show = show;
		this.user = user;
		this.bookedDate = bookedDate;
		this.noOfSeats = noOfSeats;
		this.totalAmount = totalAmount;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}

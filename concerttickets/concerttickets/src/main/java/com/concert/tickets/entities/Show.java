package com.concert.tickets.entities;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;
import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="shows")
@Builder
@Data
public class Show {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "showId")
	private int showId;
	private String musicianName;
	
	@OneToOne(cascade=CascadeType.MERGE)
	private Concerts concert;
	
	private java.sql.Date showDate;
	
	private Time showTime;
	
	@OneToOne(cascade=CascadeType.MERGE)
	private Stadium stadium;
	
	private int availableTickets;

	public Show() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Show(int showId, String musicianName, Concerts concert, Date showDate, Time showTime, Stadium stadium,
			int availableTickets) {
		super();
		this.showId = showId;
		this.musicianName = musicianName;
		this.concert = concert;
		this.showDate = showDate;
		this.showTime = showTime;
		this.stadium = stadium;
		this.availableTickets = availableTickets;
	}

}

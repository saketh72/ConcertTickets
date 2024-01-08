package com.concert.tickets.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.UniqueConstraint;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="stadium")
@Builder
@Data
public class Stadium {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "stadiumId")
	private int stadiumId;
	@Column(unique=true)
	private String stadiumDesc;
	private int totalCapacity;
	private int seatFare;
	
	public Stadium() {
		
	}

	public Stadium(int stadiumId, String stadiumDesc, int totalCapacity, int seatFare) {
		super();
		this.stadiumId = stadiumId;
		this.stadiumDesc = stadiumDesc;
		this.totalCapacity = totalCapacity;
		this.seatFare = seatFare;
	}
	
	
	
}

package com.concert.tickets.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="concerts")
@Builder
@Data
public class Concerts {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "concertid")
	private int concertId;
	@Column(unique=true)
	private String concertName;
	
	private String imgSrc;

	public Concerts(int concertId, String concertName, String imgSrc) {
		super();
		this.concertId = concertId;
		this.concertName = concertName;
		this.imgSrc = imgSrc;
	}

	public Concerts() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}

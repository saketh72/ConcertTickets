package com.concert.tickets.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="users")
@Builder
@Data
public class Users {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "userId")
	private int userId;
	private String userName;
	private String password;
	private long mobileNo;
	private String emailId;
	
	public Users() {
	}

	public Users(int userId, String userName, String password, long mobileNo, String emailId) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
	}
	
	
	
	
}

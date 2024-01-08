package com.concert.tickets.tests;

import static org.assertj.core.api.Assertions.assertThat;



//import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.concert.tickets.entities.Users;
import com.concert.tickets.repos.UsersRepository;
import com.concert.tickets.services.UsersService;

@RunWith(MockitoJUnitRunner.class)
public class UsersServiceTest {
	
	@Mock
	private UsersRepository userrepo;

	@InjectMocks
	private UsersService userserv;
	
	
	@Test
	public void whenFindByUsernameAndPassword_thenReturnUsers() {
		
		Users user1 = Users.builder()
				.userId(4)
				.userName("dasd")
				.password("dasda")
				.mobileNo(636353637)
				.emailId("sakethsaketh")
				.build();
		when(userrepo.findByUserNameAndPassword("dasd","dasda")).thenReturn(user1);
		
		Users actualUsers = userserv.findByUserNameAndPassword("dasd","dasda");
		assertThat(actualUsers).isEqualTo(user1);
		
	}

}

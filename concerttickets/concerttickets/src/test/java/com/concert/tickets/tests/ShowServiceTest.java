package com.concert.tickets.tests;

import static org.assertj.core.api.Assertions.assertThat;


import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.concert.tickets.entities.Show;
import com.concert.tickets.repos.ShowRepository;
import com.concert.tickets.services.ShowService;

@RunWith(MockitoJUnitRunner.class)
public class ShowServiceTest {

	@Mock
	private ShowRepository showrepo;
	
	@InjectMocks
	private ShowService showserv;
	
	
	@Test
	public void whenFindByMusicianname_thenReturnShows() {
		
		Show show1 = Show.builder()
				.showId(1)
				.musicianName("anirudh")
				.build();
		when(showrepo.findByMusicianName("anirudh")).thenReturn(show1);
		
		Show actualshow = showserv.findByMusicianName("anirudh");
		assertThat(actualshow).isEqualTo(show1);
	}
}

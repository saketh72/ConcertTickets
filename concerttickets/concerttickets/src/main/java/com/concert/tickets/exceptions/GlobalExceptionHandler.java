package com.concert.tickets.exceptions;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@Value(value="${message1}")
	private String message1;

	@Value(value="${message2}")
	private String message2;

	@Value(value="${message3}")
	private String message3;
	
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(org.springframework.dao.DataIntegrityViolationException.class)
	public ResponseEntity handleError(org.springframework.dao.DataIntegrityViolationException ex) {
		if(ex.getMessage().contains("null")) return new ResponseEntity(message3, HttpStatus.NOT_FOUND);
		if(ex.getMessage().contains("stadium")) return new ResponseEntity(message2, HttpStatus.NOT_FOUND);
		else return new ResponseEntity(message1, HttpStatus.NOT_FOUND);
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(NoSeatsException.class)
	public ResponseEntity handleError(){
		return new ResponseEntity("No seats in the stadium", HttpStatus.NOT_FOUND);
	}

}

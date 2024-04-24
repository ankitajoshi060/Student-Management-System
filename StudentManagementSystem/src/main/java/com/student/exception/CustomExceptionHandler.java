package com.student.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

	@ExceptionHandler(StudentNotFoundException.class)
	public ResponseEntity<Object> userNotFound(StudentNotFoundException st){
		Map<String,String> error = new HashMap<>();
		error.put("error", st.getMessage());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
		
	}
	@ExceptionHandler(StudentAlreadyExitsException.class)
	public Map<String,String> userAlreadyExits(StudentAlreadyExitsException sa){
		Map<String, String> error = new HashMap<>();
		error.put("error",sa.getMessage());
		return error;
		
	}
}

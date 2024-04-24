package com.student.exception;

public class StudentAlreadyExitsException extends RuntimeException {

	public StudentAlreadyExitsException(String message) {
		super(message);
	}

}

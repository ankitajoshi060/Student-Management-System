package com.student.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.student.model.Student;
import com.student.service.StudentService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("http://localhost:3000")
@RestController
public class StudentController {

	@Autowired
	StudentService service;
	
	@PostMapping("/student")
	public Student saveStudent(@RequestBody Student student) {
		return service.saveStudent(student);
	}
	@GetMapping("/student/{id}")
	public Student getStudent(@PathVariable long id) {
		return service.getStudent(id);
	}
	
	@GetMapping("/student")
	public List<Student> getAllStudent(){
		return service.getAllStudent();
	}
	
	@DeleteMapping("/student/{id}")
	public void deleteStudent(@PathVariable long id) {
		service.deleteStudent(id);
	}
	@PutMapping("/student/{id}")
	public Student updateStudent(@RequestBody Student student, @PathVariable long id) {
		return service.updateStudent(student, id);
	}
	
}

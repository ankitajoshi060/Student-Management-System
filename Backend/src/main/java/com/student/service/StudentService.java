package com.student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.Repository.StudentRepository;
import com.student.exception.StudentAlreadyExitsException;
import com.student.exception.StudentNotFoundException;
import com.student.model.Student;

@Service
public class StudentService {
	@Autowired
	StudentRepository repo;

	public Student saveStudent(Student student) {
		if (studentAlreadyExits(student.getEmail())) {
			throw new StudentAlreadyExitsException(student.getEmail() + " already exits");
		}
		return repo.save(student);
	}

	public Student getStudent(long id) {
		return repo.findById(id).orElseThrow(() -> new StudentNotFoundException("No student found with id: " + id));
	}

	public List<Student> getAllStudent() {
		return repo.findAll();
	}

	public void deleteStudent(long id) {
		if (!repo.existsById(id)) {
			throw new StudentNotFoundException("Sorry, Student not found");
		}
		repo.deleteById(id);
	}
	
	public Student updateStudent(Student student , long id) {
		return repo.findById(id).map(st -> {
			st.setFirstName(student.getFirstName());
			st.setLastName(student.getLastName());
			st.setEmail(student.getEmail());
			st.setDepartment(student.getDepartment());
			return repo.save(st);
		}).orElseThrow(()-> new StudentNotFoundException("Sorry, student could not be found"));
	}
	
	private boolean studentAlreadyExits(String email) {

		return repo.findByEmail(email).isPresent();
	}

}

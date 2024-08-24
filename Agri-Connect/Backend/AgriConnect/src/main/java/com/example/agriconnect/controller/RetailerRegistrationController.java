package com.example.agriconnect.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.agriconnect.entity.RetailerRegistration;
import com.example.agriconnect.service.RetailerRegistrationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/retailer")
@CrossOrigin("*")
public class RetailerRegistrationController {

	@Autowired
	private RetailerRegistrationService registrationservice;

	@PostMapping("/new/create")
	public ResponseEntity<?> registerRetailer(@RequestBody RetailerRegistration newregistration) {
		RetailerRegistration registerUser = registrationservice.Create(newregistration);
		return new ResponseEntity<>(registerUser, HttpStatus.OK);
	}

	@GetMapping("/getallfarmers")
	public ResponseEntity<?> getAllRetailers() {
		List<RetailerRegistration> found = registrationservice.getAll();
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getRetailersById(@PathVariable("id") int id) {
		RetailerRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> Update(@PathVariable int id, @RequestBody RetailerRegistration updated) {
		RetailerRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.Update(updated, found), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> DeleteRetailer(@PathVariable int id) {
		RetailerRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.delete(found), HttpStatus.OK);
	}

	@PostMapping("/login")
	public RetailerRegistration login(@RequestBody RetailerRegistration loginRequest) {
		return (registrationservice.login(loginRequest.getEmail(), loginRequest.getPassword()));
	}
}

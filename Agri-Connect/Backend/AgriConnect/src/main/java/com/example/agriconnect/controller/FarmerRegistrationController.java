package com.example.agriconnect.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.agriconnect.entity.FarmerRegistration;
import com.example.agriconnect.service.FarmerRegistrationService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/farmer")
@CrossOrigin("*")
public class FarmerRegistrationController {

	@Autowired
	private FarmerRegistrationService registrationservice;

	@PostMapping("/new/create")
	public ResponseEntity<?> registerFarmer(@RequestBody FarmerRegistration newregistration) {
		FarmerRegistration registerUser = registrationservice.Create(newregistration);
		return new ResponseEntity<>(registerUser, HttpStatus.OK);
	}

	@GetMapping("/getallfarmers")
	public ResponseEntity<?> getAllFarmers() {
		List<FarmerRegistration> found = registrationservice.getAll();
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getFamerById(@PathVariable("id") int id) {
		FarmerRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> Update(@PathVariable int id, @RequestBody FarmerRegistration updated) {
		FarmerRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.Update(updated, found), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> DeleteFarmer(@PathVariable int id) {
		FarmerRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.delete(found), HttpStatus.OK);
	}

	@PostMapping("/login")
	public FarmerRegistration login(@RequestBody FarmerRegistration loginRequest) {
		return (registrationservice.login(loginRequest.getEmail(), loginRequest.getPassword()));
	}
}

package com.example.agriconnect.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.agriconnect.entity.MerchantRegistration;
import com.example.agriconnect.service.MerchantRegistrationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/merchant")
@CrossOrigin("*")
public class MerchantRegistrationController {

	@Autowired
	private MerchantRegistrationService registrationservice;

	@PostMapping("/new/create")
	public ResponseEntity<?> registerMerchant(@RequestBody MerchantRegistration newregistration) {
		MerchantRegistration registerUser = registrationservice.Create(newregistration);
		return new ResponseEntity<>(registerUser, HttpStatus.OK);
	}

	@GetMapping("/getallfarmers")
	public ResponseEntity<?> getAllMerchants() {
		List<MerchantRegistration> found = registrationservice.getAll();
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getMerchantById(@PathVariable("id") int id) {
		MerchantRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> Update(@PathVariable int id, @RequestBody MerchantRegistration updated) {
		MerchantRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.Update(updated, found), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> DeleteMerchant(@PathVariable int id) {
		MerchantRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.delete(found), HttpStatus.OK);
	}

	@PostMapping("/login")
	public MerchantRegistration login(@RequestBody MerchantRegistration loginRequest) {
		return (registrationservice.login(loginRequest.getEmail(), loginRequest.getPassword()));
	}
}

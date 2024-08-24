package com.example.agriconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.agriconnect.dao.RetailerRegistrationRepository;
import com.example.agriconnect.entity.RetailerRegistration;

@Service
public class RetailerRegistrationService implements CRUDRegistrationService<RetailerRegistration, Integer> {

	@Autowired
	private RetailerRegistrationRepository registrationRepository;

	@Override
	public RetailerRegistration Create(RetailerRegistration t) {
		RetailerRegistration register = registrationRepository.save(t);
		return register;
	}

	@Override
	public List<RetailerRegistration> getAll() {
		return registrationRepository.findAll();
	}

	@Override
	public RetailerRegistration fetchById(Integer k) {
		RetailerRegistration registration = registrationRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public RetailerRegistration Update(RetailerRegistration updated, RetailerRegistration existing) {
		existing.setEmail(updated.getEmail());
		existing.setPassword(updated.getPassword());
		existing.setUserName(updated.getUserName());
		return registrationRepository.save(existing);
	}

	@Override
	public String delete(RetailerRegistration t) {
		registrationRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

	public RetailerRegistration login(String email, String password) {
		RetailerRegistration found = registrationRepository.findByEmail(email);
		if (found != null && found.getPassword().equals(password)) {
			return found;
		}
		return null;
	}
}

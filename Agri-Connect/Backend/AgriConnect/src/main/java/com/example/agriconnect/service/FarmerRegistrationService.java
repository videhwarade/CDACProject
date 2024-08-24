package com.example.agriconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agriconnect.dao.FarmerRegistrationRepository;
import com.example.agriconnect.entity.FarmerRegistration;

@Service
public class FarmerRegistrationService implements CRUDRegistrationService<FarmerRegistration, Integer> {

	@Autowired
	private FarmerRegistrationRepository registrationRepository;

	@Override
	public FarmerRegistration Create(FarmerRegistration t) {
		FarmerRegistration register = registrationRepository.save(t);
		return register;
	}

	@Override
	public List<FarmerRegistration> getAll() {
		return registrationRepository.findAll();
	}

	@Override
	public FarmerRegistration fetchById(Integer k) {
		FarmerRegistration registration = registrationRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public FarmerRegistration Update(FarmerRegistration updated, FarmerRegistration existing) {
		existing.setEmail(updated.getEmail());
		existing.setPassword(updated.getPassword());
		existing.setUserName(updated.getUserName());
		return registrationRepository.save(existing);
	}

	@Override
	public String delete(FarmerRegistration t) {
		registrationRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

	public FarmerRegistration login(String email, String password) {
		FarmerRegistration found = registrationRepository.findByEmail(email);
		if (found != null && found.getPassword().equals(password)) {
			return found;
		}
		return null;
	}

}

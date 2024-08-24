package com.example.agriconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.agriconnect.dao.MerchantRegistrationRepository;
import com.example.agriconnect.entity.MerchantRegistration;

@Service
public class MerchantRegistrationService implements CRUDRegistrationService<MerchantRegistration, Integer> {

	@Autowired
	private MerchantRegistrationRepository registrationRepository;

	@Override
	public MerchantRegistration Create(MerchantRegistration t) {
		MerchantRegistration register = registrationRepository.save(t);
		return register;
	}

	@Override
	public List<MerchantRegistration> getAll() {
		return registrationRepository.findAll();
	}

	@Override
	public MerchantRegistration fetchById(Integer k) {
		MerchantRegistration registration = registrationRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public MerchantRegistration Update(MerchantRegistration updated, MerchantRegistration existing) {
		existing.setEmail(updated.getEmail());
		existing.setPassword(updated.getPassword());
		existing.setUserName(updated.getUserName());
		return registrationRepository.save(existing);
	}

	@Override
	public String delete(MerchantRegistration t) {
		registrationRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

	public MerchantRegistration login(String email, String password) {
		MerchantRegistration found = registrationRepository.findByEmail(email);
		if (found != null && found.getPassword().equals(password)) {
			return found;
		}
		return null;
	}
}

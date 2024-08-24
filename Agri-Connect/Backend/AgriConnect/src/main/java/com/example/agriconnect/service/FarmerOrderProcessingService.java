package com.example.agriconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agriconnect.dao.FarmerOrderProcessingRepository;
import com.example.agriconnect.entity.OrderProcessing;

@Service
public class FarmerOrderProcessingService implements CRUDRegistrationService<OrderProcessing, Integer> {

	@Autowired
	private FarmerOrderProcessingRepository registrationRepository;

	@Override
	public OrderProcessing Create(OrderProcessing t) {
		OrderProcessing register = registrationRepository.save(t);
		return register;
	}

	@Override
	public List<OrderProcessing> getAll() {
		return registrationRepository.findAll();
	}

	@Override
	public OrderProcessing fetchById(Integer k) {
		OrderProcessing registration = registrationRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public OrderProcessing Update(OrderProcessing updated, OrderProcessing existing) {
		existing.setProductName(updated.getProductName());
		existing.setQuantity(updated.getQuantity());
		existing.setStatus(updated.getStatus());
		existing.setDeliveryDate(updated.getDeliveryDate());
		return registrationRepository.save(existing);
	}

	@Override
	public String delete(OrderProcessing t) {
		registrationRepository.delete(t);
		return t.getOrderId() + t.getProductName() + " Deleted";
	}

}

package com.example.agriconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agriconnect.dao.InventoryManagementRepository;
import com.example.agriconnect.entity.InventoryManagement;

@Service
public class InventoryManagementService implements CRUDRegistrationService<InventoryManagement, Integer> {

	@Autowired
	private InventoryManagementRepository inventoryRepository;

	@Override
	public InventoryManagement Create(InventoryManagement t) {
		InventoryManagement add = inventoryRepository.save(t);
		return add;
	}

	@Override
	public List<InventoryManagement> getAll() {
		return inventoryRepository.findAll();
	}

	@Override
	public InventoryManagement fetchById(Integer k) {
		InventoryManagement found = inventoryRepository.findById(k).orElseThrow();
		return found;
	}

	@Override
	public InventoryManagement Update(InventoryManagement updated, InventoryManagement existing) {
		existing.setName(updated.getName());
		existing.setQuantity(updated.getQuantity());
		existing.setQuality(updated.getQuality());
		existing.setCost(updated.getCost());
		existing.setHarvestDate(updated.getHarvestDate());
		return inventoryRepository.save(existing);
	}

	@Override
	public String delete(InventoryManagement t) {
		inventoryRepository.delete(t);
		return t.getName() + " Deleted";
	}

}

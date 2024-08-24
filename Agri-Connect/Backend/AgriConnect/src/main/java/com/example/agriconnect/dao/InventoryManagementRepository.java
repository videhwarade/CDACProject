package com.example.agriconnect.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.agriconnect.entity.InventoryManagement;

@EnableJpaRepositories
public interface InventoryManagementRepository extends JpaRepository<InventoryManagement, Integer> {
	InventoryManagement findByName(String name);
}

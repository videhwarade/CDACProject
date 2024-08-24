package com.example.agriconnect.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.agriconnect.entity.FarmerRegistration;

@EnableJpaRepositories
public interface FarmerRegistrationRepository extends JpaRepository<FarmerRegistration, Integer> {
	FarmerRegistration findByEmail(String email);
}

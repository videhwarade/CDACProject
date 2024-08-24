package com.example.agriconnect.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.example.agriconnect.entity.RetailerRegistration;

@EnableJpaRepositories
public interface RetailerRegistrationRepository extends JpaRepository<RetailerRegistration, Integer> {
	RetailerRegistration findByEmail(String email);
}

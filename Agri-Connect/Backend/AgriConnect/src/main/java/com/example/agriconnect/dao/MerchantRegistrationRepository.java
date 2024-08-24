package com.example.agriconnect.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.example.agriconnect.entity.MerchantRegistration;

@EnableJpaRepositories
public interface MerchantRegistrationRepository extends JpaRepository<MerchantRegistration, Integer> {
	MerchantRegistration findByEmail(String email);
}

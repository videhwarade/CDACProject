package com.example.agriconnect.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.example.agriconnect.entity.OrderProcessing;

@EnableJpaRepositories
public interface FarmerOrderProcessingRepository extends JpaRepository<OrderProcessing, Integer> {
//	OrderProcessing findById(int id);
}

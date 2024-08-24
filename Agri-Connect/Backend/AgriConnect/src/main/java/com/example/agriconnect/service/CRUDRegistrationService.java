package com.example.agriconnect.service;

import java.util.List;

public interface CRUDRegistrationService<T, K> {

//	Creating or adding
	T Create(T t);

	List<T> getAll();

//	T fetchById(K k);
	T fetchById(K k);

//	Update
	T Update(T t1, T t2);

//	Delete
	String delete(T t);
}

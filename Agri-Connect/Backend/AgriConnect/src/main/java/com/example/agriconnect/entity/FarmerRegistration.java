package com.example.agriconnect.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Farmer_registration_details")
public class FarmerRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int registerId;
	private String role;
	@Column(unique = true)
	private String userName;
	@Column(unique = true)
	private String email;
	private String password;

	public FarmerRegistration() {

	}

	public FarmerRegistration(int registerId, String role, String userName, String email, String password) {
		super();
		this.registerId = registerId;
		this.role = role;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	public int getRegisterId() {
		return registerId;
	}

	public void setRegisterId(int registerId) {
		this.registerId = registerId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "FarmerRegistration [registerId=" + registerId + ", role=" + role + ", userName=" + userName + ", email="
				+ email + ", password=" + password + "]";
	}

}

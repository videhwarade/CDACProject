package com.example.agriconnect.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name = "Inventory_Management")
public class InventoryManagement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int quantity;
	private String quality;
	private double cost;
//	@Temporal(TemporalType.DATE)
	private String harvestDate;

//	@ManyToOne
//	@JoinColumn(name = "farmer_Interaction_Id")
//	private FarmerInteraction farmerInteraction;

	public InventoryManagement() {
		// TODO Auto-generated constructor stub
	}

	public InventoryManagement(int id, String name, int quantity, String quality, double cost, String harvestDate) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.quality = quality;
		this.cost = cost;
		this.harvestDate = harvestDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getQuality() {
		return quality;
	}

	public void setQuality(String quality) {
		this.quality = quality;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public String getHarvestDate() {
		return harvestDate;
	}

	public void setHarvestDate(String harvestDate) {
		this.harvestDate = harvestDate;
	}

//	public FarmerInteraction getFarmerInteraction() {
//		return farmerInteraction;
//	}
//
//	public void setFarmerInteraction(FarmerInteraction farmerInteraction) {
//		this.farmerInteraction = farmerInteraction;
//	}

	@Override
	public String toString() {
		return "InventoryManagement [id=" + id + ", name=" + name + ", quantity=" + quantity + ", quality=" + quality
				+ ", cost=" + cost + ", harvestDate=" + harvestDate +
//				", farmerInteraction=" + farmerInteraction + 
				"]";
	}

}

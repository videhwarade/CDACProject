package com.example.agriconnect.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Farmer_OrderProcessing")
public class OrderProcessing {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	private String productName;
	private int quantity;
	private String status;
	private String deliveryDate;

	public OrderProcessing() {
		// TODO Auto-generated constructor stub
	}

	public OrderProcessing(int orderId, String productName, int quantity, String status, String deliveryDate) {
		super();
		this.orderId = orderId;
		this.productName = productName;
		this.quantity = quantity;
		this.status = status;
		this.deliveryDate = deliveryDate;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	@Override
	public String toString() {
		return "OrderProcessing [orderId=" + orderId + ", productName=" + productName + ", quantity=" + quantity
				+ ", status=" + status + ", deliveryDate=" + deliveryDate + "]";
	}

}

package com.example.agriconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.agriconnect.entity.InventoryManagement;
import com.example.agriconnect.service.InventoryManagementService;

@RestController
@RequestMapping("/inventory")
@CrossOrigin("*")
public class InventoryManagementController {

	@Autowired
	private InventoryManagementService inventoryservice;

	@PostMapping("/new/create")
	public ResponseEntity<?> create(@RequestBody InventoryManagement add) {
		InventoryManagement additem = inventoryservice.Create(add);
		return new ResponseEntity<>(additem, HttpStatus.OK);
	}

	@GetMapping("/getall")
	public ResponseEntity<?> getAllInventory() {
		List<InventoryManagement> found = inventoryservice.getAll();
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getitemById(@PathVariable("id") int id) {
		InventoryManagement found = inventoryservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> Update(@PathVariable int id, @RequestBody InventoryManagement updated) {
		InventoryManagement found = inventoryservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(inventoryservice.Update(updated, found), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> Deleteitem(@PathVariable int id) {
		InventoryManagement found = inventoryservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(inventoryservice.delete(found), HttpStatus.OK);
	}

}

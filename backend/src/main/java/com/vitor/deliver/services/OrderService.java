package com.vitor.deliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vitor.deliver.DTO.OrderDTO;
import com.vitor.deliver.DTO.ProductDTO;
import com.vitor.deliver.entities.Order;
import com.vitor.deliver.entities.Product;
import com.vitor.deliver.entities.enums.OrderStatus;
import com.vitor.deliver.repositories.OrderRepository;
import com.vitor.deliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x))
				.collect(Collectors.toList());
	}
	

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), 
				dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		for(ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		
		order = repository.save(order);
		
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		
		return new OrderDTO(order);
	}
	
}

package com.vitor.deliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vitor.deliver.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

	//Consulta em JPQL
	@Query("SELECT DISTINCT obj FROM Order obj "
			+ " JOIN FETCH obj.products "
			+ " WHERE obj.status = 0 ORDER BY obj.moment DESC")
	List<Order> findOrdersWithProducts();
}

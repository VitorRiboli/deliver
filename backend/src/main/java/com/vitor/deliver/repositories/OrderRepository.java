package com.vitor.deliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vitor.deliver.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}

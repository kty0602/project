package com.example.carpj.repository;

import com.example.carpj.entity.CarView;
import com.example.carpj.entity.CarViewId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarViewRepository extends JpaRepository<CarView, CarViewId> {
}

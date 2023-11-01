package com.example.carpj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class CarPjApplication {

    public static void main(String[] args) {
        SpringApplication.run(CarPjApplication.class, args);
    }

}

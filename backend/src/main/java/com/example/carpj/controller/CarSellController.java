package com.example.carpj.controller;

import com.example.carpj.dto.CarSellDTO;
import com.example.carpj.service.CarSellService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/sell")
public class CarSellController {
    private final CarSellService carSellService;

    @PostMapping("/rank") //판매 순위
    public List<CarSellDTO> rank() {
        log.info("rank...");
        List<CarSellDTO> rank = carSellService.rank();
        System.out.println("rankResult----------- "+rank);
        return rank;
    }
}

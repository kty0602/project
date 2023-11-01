package com.example.carpj.service;

import com.example.carpj.dto.CarSellDTO;
import com.example.carpj.entity.CarDic;
import com.example.carpj.entity.CarSell;

import java.util.List;

public interface CarSellService {
    List<CarSellDTO> rank(); //판매순위

    default CarSell dtoToEntity(CarSellDTO dto) {
        CarDic carDic = CarDic.builder().cDNo(dto.getModelNum()).build();
        CarSell carSell = CarSell.builder()
                .cSNo(dto.getCSNo())
                .modelNum(carDic)
                .amount(dto.getAmount())
                .year(dto.getYear())
                .build();
        return carSell;
    }

    default CarSellDTO entityToDTO(CarSell carSell) {
        CarDic carDic = carSell.getModelNum();
        CarSellDTO dto = CarSellDTO.builder()
                .cSNo(carSell.getCSNo())
                .modelNum(carDic.getCDNo())
                .amount(carSell.getAmount())
                .year(carSell.getYear())
                .build();
        return dto;
    }
}

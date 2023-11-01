package com.example.carpj.service;

import com.example.carpj.dto.CarDicDTO;
import com.example.carpj.entity.CarDic;

import java.util.List;
import java.util.Map;

public interface CarDicService {
    List<CarDicDTO> getSimilarCars(List<Map<String, Object>> predictedDataList); //cdno에 맞는 정보들 가져오기

    default CarDic dtoToEntity(CarDicDTO dto) {
        CarDic carDic = CarDic.builder()
                .cDNo(dto.getCDNo())
                .tag(dto.getTag())
                .type(dto.getType())
                .brand(dto.getBrand())
                .model(dto.getModel())
                .build();
        return carDic;
    }

    default CarDicDTO entityToDTO(CarDic carDic) {
        CarDicDTO dto = CarDicDTO.builder()
                .cDNo(carDic.getCDNo())
                .tag(carDic.getTag())
                .type(carDic.getType())
                .brand(carDic.getBrand())
                .model(carDic.getModel())
                .build();
        return dto;
    }
}

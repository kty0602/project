package com.example.carpj.service;

import com.example.carpj.dto.RecallDTO;
import com.example.carpj.entity.Recall;

import java.util.List;
import java.util.Map;

public interface RecallService {

    List<RecallDTO> basic(); //recall 기본 데이터

    List<Map<String, Object>> wordCloud(String carType); //워드 클라우드

    //서비스 계층에서는 파라미터를 DTO 타입으로 받기 때문에 이를 JPA로 처리하기 위해서 엔티티 타입의 객체로 변환
    default Recall dtoToEntity(RecallDTO dto) {
        Recall recall = Recall.builder()
                .rNo(dto.getRNo())
                .brand(dto.getBrand())
                .model(dto.getModel())
                .reasons(dto.getReasons())
                .build();
        return recall;
    }

    //엔티티 객체를 DTO 객체로 변환하는 entityToDto()
    default RecallDTO entityToDTO(Recall recall) {
        RecallDTO dto = RecallDTO.builder()
                .rNo(recall.getRNo())
                .brand(recall.getBrand())
                .model(recall.getModel())
                .reasons(recall.getReasons())
                .build();
        return dto;
    }

}

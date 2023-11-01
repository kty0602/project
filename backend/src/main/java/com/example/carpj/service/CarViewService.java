package com.example.carpj.service;

import com.example.carpj.dto.CarDicDTO;
import com.example.carpj.dto.CarViewDTO;
import com.example.carpj.entity.CarDic;
import com.example.carpj.entity.CarView;
import com.example.carpj.entity.Member;

import java.util.List;
import java.util.Map;

public interface CarViewService {
    boolean register(CarViewDTO dto); //특정 항목 조회 값 DB에 저장
    List<CarDicDTO> rank(); //전체 조회수 순위
    List<CarViewDTO> list(); //전체 데이터 목록(협업 필터링을 위한 데이터)
    Map<String, List<CarDicDTO>> sexRank(); //성별 조회수 순위
    Map<String, List<CarDicDTO>> ageRank(); //연령별 조회수 순위

    //국산/수입별 조회수 순위
    //차종별 조회수 순위

    default CarView dtoToEntity(CarViewDTO dto) {
        CarDic carDic = CarDic.builder().cDNo(dto.getCDNo()).build();
        Member member = Member.builder().id(dto.getId()).build();
        CarView carView = CarView.builder()
                .cDNo(carDic)
                .id(member)
                .count(dto.getCount())
                .build();
        return carView;
    }

    default CarViewDTO entityToDTO(CarView carView) {
        CarDic carDic = carView.getCDNo();
        Member member = carView.getId();
        CarViewDTO dto = CarViewDTO.builder()
                .cDNo(carDic.getCDNo())
                .id(member.getId())
                .count(carView.getCount())
                .build();
        return dto;
    }
}

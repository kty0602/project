package com.example.carpj.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CarViewDTO {
    private Integer cDNo; //carDic에서 어떤 모델인지 받아오기
    private Long id;//member 누구인지 받아오기
    private Integer count; //검색한 수
}

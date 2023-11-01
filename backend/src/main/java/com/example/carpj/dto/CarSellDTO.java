package com.example.carpj.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CarSellDTO {
    private Integer cSNo;
    private Integer modelNum; //carDic에서 어떤 모델인지 받아오기
    private Integer amount; //판매량
    private Integer year; //판매된 연도
}

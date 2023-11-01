package com.example.carpj.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CarDicDTO {
    private Integer cDNo;
    private String tag; //국산 or 수입
    private String type; //차종(경차, 소형차, SUV...)
    private String brand; //브랜드(기아, 현대, 아우디...)
    private String model; //모델 이름(현대 캐스퍼, 기아 K5...)
}

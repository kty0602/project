package com.example.carpj.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Builder
@Data
@AllArgsConstructor //필드 값을 다 넣은 생성자
@NoArgsConstructor //기본 생성자
public class CarDic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cDNo;

    private String tag; //국산 or 수입
    private String type; //차종(경차, 소형차, SUV...)
    private String brand; //브랜드(기아, 현대, 아우디...)
    private String model; //모델 이름(현대 캐스퍼, 기아 K5...)
}

package com.example.carpj.dto;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CarDTO {
    private Long cno;        // 번호 1,2,3~~~9999
    private String platform;   // 중고차 플랫폼 Ex. kb차차차, kcar
    private String tag;         // 국산 / 수입 태그
    private String type;        // 차종
    private String brand;       // 브랜드 Ex. 기아, 현대, 벤츠, BMW
    private String model;       // 풀 네임
    private String price;       // 가격
    private Integer pricer;     // 가격 값 비교를 위함 Ex. 960만원 ~ 1200만원
    private Short year;        // 연식
    private String km;          // 주행거리
    private Integer kmr;        // km값 비교를 위함  Ex. 1120km ~ 2000km
    private String oil;         // 연료 타입
    private String region;      // 중고차 보관 센터 지역
    private String link;        // 해당 중고차 사이트 이동 링크
    private String img;         // 해당 중고차 이미지 링크

    private Integer cDNo; //자동차 딕셔너리 번호
}

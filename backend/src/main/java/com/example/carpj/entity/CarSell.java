package com.example.carpj.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Builder
@Data
@AllArgsConstructor //필드 값을 다 넣은 생성자
@NoArgsConstructor //기본 생성자
public class CarSell {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cSNo;

    @ManyToOne(fetch = FetchType.LAZY) //명시적으로 Lazy 로딩 지정
    @JoinColumn(name = "cDNo")
    @JsonIgnore //저장 성공한 객체를 확인시키기 위한 JSON response에서 figure를 제외하고 보낸다.
    private CarDic modelNum; //carDic에서 어떤 모델인지 받아오기

    private Integer amount; //판매량
    private Integer year; //판매된 연도
}

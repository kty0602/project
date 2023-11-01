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
@ToString(exclude = "id")
@IdClass(CarViewId.class) //복합키
public class CarView {
    @Id
    @ManyToOne(fetch = FetchType.LAZY) //명시적으로 Lazy 로딩 지정
    @OnDelete(action = OnDeleteAction.CASCADE) //carDic 삭제되면 해당 포인트들도 삭제
    @JoinColumn(name = "cDNo")
    @JsonIgnore //저장 성공한 객체를 확인시키기 위한 JSON response에서 figure를 제외하고 보낸다.
    private CarDic cDNo; //carDic에서 어떤 모델인지 받아오기

    @Id
    @ManyToOne(fetch = FetchType.LAZY) //명시적으로 Lazy 로딩 지정
    @OnDelete(action = OnDeleteAction.CASCADE) //회원 삭제되면 해당 포인트들도 삭제
    @JoinColumn(name = "id")
    @JsonIgnore //저장 성공한 객체를 확인시키기 위한 JSON response에서 figure를 제외하고 보낸다.
    private Member id; //member 누구인지 받아오기
    
    private Integer count; //검색한 수

    public CarView updateViewCount(Integer count) { //조회수 증가
        this.count = count + 1;
        return this;
    }
}

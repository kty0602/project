package com.example.carpj.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Builder
@Data
@AllArgsConstructor //필드 값을 다 넣은 생성자
@NoArgsConstructor //기본 생성자
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name; //이름

    @Email
    @Column(nullable = false)
    private String email; //이메일

    private String imageUrl; //프로필

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId; //외부 인증 제공자의 사용자 식별자 저장

    private String sex; //성별

    private Integer year; //생일(나이대)

    public void changeSex(String sex) {
        this.sex = sex;
    }

    public void changeYear(Integer year) {
        this.year = year;
    }
}

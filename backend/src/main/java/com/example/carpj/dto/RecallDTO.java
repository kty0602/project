package com.example.carpj.dto;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class RecallDTO {
    private Integer rNo; //리콜 번호
    private String brand; //리콜된 브랜드
    private String model; //리콜된 차명
    private String reasons; //리콜 사유
}

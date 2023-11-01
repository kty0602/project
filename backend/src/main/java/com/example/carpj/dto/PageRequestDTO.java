package com.example.carpj.dto;

import lombok.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.util.StringUtils;

@Builder
@AllArgsConstructor
@Data
public class PageRequestDTO {

    // 페이지
    private int page;
    private int size;

    // 게시글 사이즈
    private int bsize;

    // 검색 조건, 키워드 추가
    private String[] type;      // 플랫폼, 차종, 국/수입, 브랜드 등 검색
    private String search;      // 일반 검색
    private String[] mtype;     // 가격 범위
    private String[] ktype;     // km 범위
    private String[] ytype;     // 연식 범위

    // 리스 게시판 검색에서 쓰일 것
    private String btype;

    // 검색 기능 쪽
    public PageRequestDTO() {
        this.page =1;
        this.size=40;
        this.bsize=20;
    }


    public Pageable getPageable(Sort sort) {
        return PageRequest.of(page-1, size, sort);
    }
    public Pageable getBPageable(Sort sort) {
        return PageRequest.of(page - 1, bsize, sort);
    }
}

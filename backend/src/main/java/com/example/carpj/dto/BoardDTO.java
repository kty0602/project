package com.example.carpj.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class BoardDTO {
    private Integer bno; // 게시글 번호
    private String title; // 게시글 제목
    private String content; // 게시글 내용
    private Long id; // 작성자 id
    private String writerNickname; // 작성자 nickname
    private String options1; // 외장 옵션
    private String options2; // 내장 옵션
    private String options3; // 안전 옵션
    private String options4; // 편의 옵션
    private String options5; // 멀티 옵션
    private LocalDateTime createtime; // 생성날짜
    private int replyCount; // 해당 게시글의 댓글 수
}
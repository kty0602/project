package com.example.carpj.dto;

import lombok.*;

import java.time.LocalDateTime;
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReplyDTO {
    private Integer rno;  // 댓글 번호
    private String content; // 댓글 내용
    private Long id; // 댓글 단 사람 id
    private String replyerNickname; // 댓글 단 사람 닉네임
    private Integer bno; // 댓글이 달려있는 게시글 번호
    private LocalDateTime createtime;  // 작성 시간
}
package com.example.carpj.service;

import com.example.carpj.dto.ReplyDTO;
import com.example.carpj.entity.Board;
import com.example.carpj.entity.Member;
import com.example.carpj.entity.Reply;
import java.util.List;

public interface ReplyService {
    // 댓글 등록
    Integer register(ReplyDTO replyDTO);
    // 게시물 댓글 목록
    List<ReplyDTO> getList(Integer bno);
    // 댓글 수정
    void modify(ReplyDTO replyDTO);
    // 댓글 삭제
    void remove(Integer rno);

    default Reply dtoToEntity(ReplyDTO replyDTO) {
        Board board = Board.builder().bno(replyDTO.getBno()).build();
        Member member = Member.builder().id(replyDTO.getId()).build();

        Reply reply = Reply.builder()
                .rno(replyDTO.getRno())
                .content(replyDTO.getContent())
                .id(member)
                .board(board)
                .build();

        return reply;
    }

    default ReplyDTO entityToDTO(Reply reply) {
        ReplyDTO dto = ReplyDTO.builder()
                .rno(reply.getRno())
                .content(reply.getContent())
                .id(reply.getId().getId())
                .replyerNickname(reply.getId().getName())
                .bno(reply.getBoard().getBno())
                .createtime(reply.getCreatetime())
                .build();

        return dto;
    }
}
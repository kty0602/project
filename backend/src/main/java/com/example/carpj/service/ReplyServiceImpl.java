package com.example.carpj.service;

import com.example.carpj.entity.Member;
import com.example.carpj.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.carpj.dto.ReplyDTO;
import com.example.carpj.entity.Board;
import com.example.carpj.entity.Reply;
import com.example.carpj.repository.ReplyRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReplyServiceImpl implements ReplyService {

    private final ReplyRepository replyRepository;
    private final BoardRepository boardRepository;

    @Override
    public Integer register(ReplyDTO replyDTO) {
        Reply reply = dtoToEntity(replyDTO);
        Board board = boardRepository.findById(replyDTO.getBno())
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. bno=" + replyDTO.getBno()));
        reply.setBoard(boardRepository.save(board));
        replyRepository.save(reply);
        return reply.getRno();
    }

    @Override
    public List<ReplyDTO> getList(Integer bno) {
        List<Reply> result = replyRepository.getRepliesByBoardOrderByRno(Board.builder().bno(bno).build());

        return result.stream().map(reply -> {
            Member member = reply.getId(); // 댓글 작성자 정보 조회
            return entityToDTO(reply);
        }).collect(Collectors.toList());
        //return  result.stream().map(reply -> entityToDTO(reply, Member.builder().build())).collect(Collectors.toList());
    }

    @Override
    public void modify(ReplyDTO replyDTO) {
        Integer rno = replyDTO.getRno();
        Reply reply = replyRepository.findById(rno).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다. rno=" + rno));

        reply.setContent(replyDTO.getContent());

        Integer bno = replyDTO.getBno();
        Board board = boardRepository.findById(bno).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. bno=" + bno));
        reply.setBoard(board);

        replyRepository.save(reply);
    }

    @Override
    public void remove(Integer rno) {
        Reply reply = replyRepository.findById(rno).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다. rno=" + rno));

        replyRepository.delete(reply);
    }

}
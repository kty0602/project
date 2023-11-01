package com.example.carpj.service;

import com.example.carpj.dto.BoardDTO;
import com.example.carpj.dto.PageRequestDTO;
import com.example.carpj.dto.PageResultDTO;
import com.example.carpj.entity.Board;
import com.example.carpj.entity.Member;
public interface BoardService {
    // 게시글 작성 처리
    Integer register(BoardDTO dto);
    // 목록 처리
    PageResultDTO<BoardDTO, Object[]> getList(PageRequestDTO pageRequestDTO);
    // 조회 처리
    BoardDTO get(Integer bno);
    // 삭제 처리
    void removeWithReplies(Integer bno);
    // 수정 처리
    void modify(BoardDTO boardDTO);

    default Board dtoToEntity(BoardDTO dto){
        Member member = Member.builder().id(dto.getId()).build();

        Board board = Board.builder()
                .bno(dto.getBno())
                .title(dto.getTitle())
                .content(dto.getContent())
                .id(member)
                .options1(dto.getOptions1())
                .options2(dto.getOptions2())
                .options3(dto.getOptions3())
                .options4(dto.getOptions4())
                .options5(dto.getOptions5())
                .build();
        return board;
    }

    default BoardDTO entityToDTO(Board board, Member member, Long replyCount) {
        BoardDTO boardDTO = BoardDTO.builder()
                .bno(board.getBno())
                .title(board.getTitle())
                .content(board.getContent())
                .createtime(board.getCreatetime())
                .id(member.getId())
                .writerNickname(member.getName())
                .replyCount(replyCount.intValue())
                .options1(board.getOptions1())
                .options2(board.getOptions2())
                .options3(board.getOptions3())
                .options4(board.getOptions4())
                .options5(board.getOptions5())
                .build();
        return boardDTO;
    }
}

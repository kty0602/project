package com.example.carpj.repository;

import com.example.carpj.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import com.example.carpj.entity.Reply;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Integer> {

    // Board 게시물 삭제시 댓글들 삭제
    @Modifying
    @Query("delete from Reply r where r.board.bno =:bno ")
    void deleteByBno(Integer bno);
    
    // 게시물로 댓글 목록 가져오기
    List<Reply> getRepliesByBoardOrderByRno(Board board);
}

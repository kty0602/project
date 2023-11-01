package com.example.carpj.repository;

import com.example.carpj.repository.search.SearchBoardRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.carpj.entity.Board;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer>, SearchBoardRepository {
    // test 폴더에서 테스트 진행 (성공)
    @Query("select b, w from Board b  left join b.id w where b.bno =:bno")
    Object getBoardWithWriter(@Param("bno") Integer bno);

    @Query("SELECT b, r FROM Board b LEFT JOIN Reply r On r.board = b WHERE b.bno = :bno")
    List<Object[]> getBoardWithReply(@Param("bno") Integer bno);

    @Query(value = "SELECT b, w, count(r) " +
            " FROM Board b " +
            " LEFT JOIN  b.id w" +
            " LEFT JOIN  Reply r ON r.board = b " +
            " GROUP BY b",
            countQuery = "SELECT count(b) FROM Board b")
    Page<Object[]> getBoardWithReplyCount(Pageable pageable);

    @Query("SELECT b, w, count(r) " +
            " FROM Board b LEFT JOIN b.id w "+
            " LEFT OUTER JOIN Reply r ON r.board = b" +
            " WHERE b.bno = :bno")
    Object getBoardByBno(@Param("bno") Integer bno);

}

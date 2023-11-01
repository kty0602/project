package com.example.carpj.service;

import com.example.carpj.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import com.example.carpj.dto.BoardDTO;
import com.example.carpj.dto.PageRequestDTO;
import com.example.carpj.dto.PageResultDTO;
import com.example.carpj.entity.Member;
import com.example.carpj.entity.Board;
import com.example.carpj.repository.BoardRepository;

import javax.transaction.Transactional;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
@Log4j2
public class BoardServiceImpl implements BoardService {
    private final BoardRepository repository;
    private final ReplyRepository replyRepository;

    @Override
    public Integer register(BoardDTO dto) {
        log.info(dto);
        Board board = dtoToEntity(dto);
        repository.save(board);
        return board.getBno();
    }

    @Override
    public PageResultDTO<BoardDTO, Object[]> getList(PageRequestDTO pageRequestDTO) {
        log.info(pageRequestDTO);
        Function<Object[], BoardDTO> fn = (en -> entityToDTO((Board)en[0], (Member)en[1], (Long)en[2]));

        Page<Object[]> result = repository.searchPage(
                pageRequestDTO.getBtype(),
                pageRequestDTO.getBPageable(Sort.by("bno").descending())
        );

        return new PageResultDTO<>(result, fn);
    }

    @Override
    public BoardDTO get(Integer bno) {
        Object result = repository.getBoardByBno(bno);
        Object[] arr = (Object[])result;
        return entityToDTO((Board)arr[0], (Member)arr[1], (Long)arr[2]);
    }

    @Transactional
    @Override
    public void removeWithReplies(Integer bno) {
        replyRepository.deleteByBno(bno);
        repository.deleteById(bno);
    }

    @Transactional
    @Override
    public void modify(BoardDTO boardDTO) {
        Board board = repository.getReferenceById(boardDTO.getBno());

        if (boardDTO.getTitle() != null) {
            board.changeTitle(boardDTO.getTitle());
        }
        if (boardDTO.getContent() != null) {
            board.changeContent(boardDTO.getContent());
        }
        if (boardDTO.getOptions1() != null) {
            board.changeOptions1(boardDTO.getOptions1());
        }
        if (boardDTO.getOptions2() != null) {
            board.changeOptions2(boardDTO.getOptions2());
        }
        if (boardDTO.getOptions3() != null) {
            board.changeOptions3(boardDTO.getOptions3());
        }
        if (boardDTO.getOptions4() != null) {
            board.changeOptions4(boardDTO.getOptions4());
        }
        if (boardDTO.getOptions5() != null) {
            board.changeOptions5(boardDTO.getOptions5());
        }

        repository.save(board);
    }

}

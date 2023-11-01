package com.example.carpj.controller;

import com.example.carpj.dto.BoardDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.carpj.dto.ReplyDTO;
import com.example.carpj.service.ReplyService;

import java.util.List;

@RestController
@RequestMapping("/replies")
@Log4j2
@RequiredArgsConstructor
public class ReplyController {
    private final ReplyService replyService;

    private BoardDTO boardDTO;

    @GetMapping(value = "/board/{bno}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ReplyDTO>> getListByBoard(@PathVariable("bno") Integer bno) {
        log.info("bno: "+ bno);

        List<ReplyDTO> replyDTOList = replyService.getList(bno);
        replyDTOList.forEach(replyDTO -> System.out.println(replyDTO));

        return new ResponseEntity<>( replyService.getList(bno), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<Integer> register(@RequestBody ReplyDTO replyDTO) {
        log.info(replyDTO);

        Integer rno = replyService.register(replyDTO);

        return new ResponseEntity<>(rno, HttpStatus.OK);
    }

    @PostMapping("/delete/{rno}")
    public ResponseEntity<String> remove(@PathVariable("rno") Integer rno) {
        log.info("RNO: "+ rno);
        replyService.remove(rno);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @PostMapping("/modify/{bno}")
    public ResponseEntity<String> modify(@PathVariable Integer bno, @RequestBody ReplyDTO replyDTO) {
        log.info(replyDTO);
        replyDTO.setBno(bno);
        replyService.modify(replyDTO);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

}
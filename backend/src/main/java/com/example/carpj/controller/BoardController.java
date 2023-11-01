package com.example.carpj.controller;

import com.example.carpj.dto.BoardDTO;
import com.example.carpj.dto.PageRequestDTO;
import com.example.carpj.dto.PageResultDTO;
import com.example.carpj.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequestMapping("/board")
@Log4j2

@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/list")
    public ResponseEntity<PageResultDTO<BoardDTO, Object[]>> list(PageRequestDTO pageRequestDTO, Model model) {
        log.info("list................"+ pageRequestDTO);
        model.addAttribute("result", boardService.getList(pageRequestDTO));

        // 출력 테스트용
        return new ResponseEntity<>(boardService.getList(pageRequestDTO), HttpStatus.OK);
    }

    @GetMapping("/register")
    public void register() {
        log.info("register get...");
    }

    @PostMapping("/register")
    public ResponseEntity<Integer> register(@RequestBody BoardDTO dto) {
        Integer bno = boardService.register(dto);
        return ResponseEntity.ok().body(bno);
    }

    @GetMapping({"/read", "/modify"})
    public ResponseEntity<BoardDTO> read(@ModelAttribute("requestDTO") PageRequestDTO pageRequestDTO, Integer bno, Model model) {
        log.info("bno: "+ bno);
        model.addAttribute("dto", boardService.get(bno));

        return new ResponseEntity<>(boardService.get(bno), HttpStatus.OK);
    }

    @PostMapping("/remove")
    public String remove(@RequestParam Integer bno, RedirectAttributes redirectAttributes) {
        log.info("bno: "+ bno);
        boardService.removeWithReplies(bno);
        redirectAttributes.addFlashAttribute("msg", bno);
        return "redirect:/board/list";
    }

    @PostMapping("/modify")
    public ResponseEntity<Integer> modify(@RequestBody BoardDTO dto, @ModelAttribute("requestDTO") PageRequestDTO pageRequestDTO,
                                          RedirectAttributes redirectAttributes) {
        log.info("post modify........................");
        log.info("dto: "+ dto);

        boardService.modify(dto);

        redirectAttributes.addAttribute("page", pageRequestDTO.getPage());
        redirectAttributes.addAttribute("type", pageRequestDTO.getBtype());


        redirectAttributes.addAttribute("bno", dto.getBno());
        return ResponseEntity.ok(dto.getBno());
    }
}
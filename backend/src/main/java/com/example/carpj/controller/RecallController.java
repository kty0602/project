package com.example.carpj.controller;

import com.example.carpj.dto.RecallDTO;
import com.example.carpj.service.RecallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/recall")
public class RecallController {
    private final RecallService recallService;

    @GetMapping("/data")
    public List<RecallDTO> basic() { //recall 데이터
        log.info("data.....");
        List<RecallDTO> rList = recallService.basic();
        return rList;
    }

    @GetMapping("/wordCloud")
    public List<Map<String, Object>> wordCloud(String carType) {
        log.info("wordCloud....");
        List<Map<String, Object>> wList = recallService.wordCloud(carType);
        return wList;
    }
}

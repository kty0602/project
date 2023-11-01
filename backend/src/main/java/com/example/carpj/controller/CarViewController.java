package com.example.carpj.controller;

import com.example.carpj.dto.CarDicDTO;
import com.example.carpj.dto.CarViewDTO;
import com.example.carpj.service.CarViewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/view")
public class CarViewController {
    private final CarViewService carViewService;

    @PostMapping("register") //특정 항목 조회 값 DB에 저장
    public boolean register(@RequestBody CarViewDTO dto) {
        log.info("register...");
        System.out.println(dto.getId()+"----"+dto.getCDNo());
        boolean result = carViewService.register(dto);
        System.out.println("result----------- "+result);
        return result;
    }

    @GetMapping("/rank") //전체 조회수 순위
    public List<CarDicDTO> rank() {
        log.info("rank...");
        List<CarDicDTO> rank = carViewService.rank();
        System.out.println("rankResult----------- "+rank);
        return rank;
    }

    @GetMapping("/sexRank") //성별 조회수 순위
    public Map<String, List<CarDicDTO>> sexRank() {
        log.info("sexRank...");
        Map<String, List<CarDicDTO>> rank = carViewService.sexRank();
        System.out.println("rankResult----------- "+rank);
        return rank;
    }

    @GetMapping("/ageRank") //성별 조회수 순위
    public Map<String, List<CarDicDTO>> ageRank() {
        log.info("ageRank...");
        Map<String, List<CarDicDTO>> rank = carViewService.ageRank();
        System.out.println("rankResult----------- "+rank);
        return rank;
    }
}

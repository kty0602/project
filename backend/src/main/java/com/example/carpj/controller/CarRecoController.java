package com.example.carpj.controller;

import com.example.carpj.dto.CarDicDTO;
import com.example.carpj.dto.CarViewDTO;
import com.example.carpj.service.CarDicService;
import com.example.carpj.service.CarViewService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/reco")
public class CarRecoController {
    private final CarViewService carViewService;
    private final CarDicService carDicService;

    @PostMapping("/getSimilarCars") //사용자 맞춤 차량 추천 - 협업 필터링
    public List<CarDicDTO> personalReco(@RequestParam("id")Integer id) {
        try {
            log.info("recommend...");
            System.out.println("======================================"+id);
            String url = "http://localhost:3030/personalReco";
            //flask에 전달하기

            List<CarViewDTO> viewData = carViewService.list();

            Map<String, Object> payload = new HashMap<>();
            payload.put("id", id);
            payload.put("data", viewData);

            //payload를 JSON 문자열로 변환
            ObjectMapper objectMapper = new ObjectMapper();
            String payloadJson = objectMapper.writeValueAsString(payload);

            //HTTP POST 요청을 사용하여 데이터 전송
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            //header와 payload로 HTTP entity 생성
            HttpEntity<String> entity = new HttpEntity<>(payloadJson, headers);

            //Flask 서버로 POST 요청 전송
            ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, entity, String.class);
            String response = responseEntity.getBody();

            List<Map<String, Object>> predictedDataList = objectMapper.readValue(response, new TypeReference<List<Map<String, Object>>>() {});
            System.out.println("predictedDataList---"+predictedDataList);

            //cdno에 맞는 정보들 가져오기
            List<CarDicDTO> finalResultList = carDicService.getSimilarCars(predictedDataList);
            System.out.println("finalResultList---"+finalResultList);

            return finalResultList;
        } catch(Exception e) {
            return null;
        }

    }
}

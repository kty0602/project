package com.example.carpj.service;

import com.example.carpj.dto.CarSellDTO;
import com.example.carpj.entity.CarSell;
import com.example.carpj.repository.CarSellRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
@RequiredArgsConstructor //JPA 처리를 위한 의존성 주입
@Log4j2
public class CarSellServiceImpl implements CarSellService{
    private final CarSellRepository carSellRepository; //자동 주입 final

    @Override
    @Transactional
    public List<CarSellDTO> rank() { //판매 순위
        try {
            log.info("판매순위-------------------");
            List<CarSell> entity = carSellRepository.findAll(Sort.by(Sort.Direction.DESC, "amount"));
            List<CarSellDTO> sellList = new ArrayList<>();

            for(CarSell carSell : entity) {
                CarSellDTO dto = entityToDTO(carSell);
                sellList.add(dto);
            }
            return sellList;
        } catch(Exception e) {
            log.info(e.getMessage());
            return null;
        }
    }

    //연도별 판매 순위(2021, 2022, 2023)
    //tag별 판매 순위(국산, 수입)
    //type별 판매 순위(경차, 소형차)


}

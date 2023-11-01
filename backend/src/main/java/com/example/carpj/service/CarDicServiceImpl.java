package com.example.carpj.service;

import com.example.carpj.dto.CarDicDTO;
import com.example.carpj.entity.CarDic;
import com.example.carpj.repository.CarDicRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor //JPA 처리를 위한 의존성 주입
@Log4j2
public class CarDicServiceImpl implements CarDicService{
    private final CarDicRepository carDicRepository;

    @Override
    public List<CarDicDTO> getSimilarCars(List<Map<String, Object>> predictedDataList) { //cdno에 맞는 정보들 가져오기
        List<CarDicDTO> finalResultList = new ArrayList<>();

        for (Map<String, Object> predictedData : predictedDataList) {
            Integer cdno = (Integer) predictedData.get("cdno");

            //cdno에 해당하는 CarDic 정보 찾기
            Optional<CarDic> carDicOptional = carDicRepository.findById(cdno);
            if (carDicOptional.isPresent()) {
                CarDic carDic = carDicOptional.get();

                CarDicDTO carDicDTO = entityToDTO(carDic);

                //carDicDTO를 finalResultList에 추가
                finalResultList.add(carDicDTO);
            }
        }

        return finalResultList;
    }
}

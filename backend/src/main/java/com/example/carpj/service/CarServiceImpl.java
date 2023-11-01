package com.example.carpj.service;

import com.example.carpj.dto.CarDTO;
import com.example.carpj.dto.PageRequestDTO;
import com.example.carpj.dto.PageResultDTO;
import com.example.carpj.entity.Car;
import com.example.carpj.entity.QCar;
import com.example.carpj.repository.CarRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import lombok.extern.log4j.Log4j2;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;

import java.util.function.Function;


@Service
@Log4j2
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {

    private final CarRepository repository;

    // Querydsl 처리
    private BooleanBuilder getSearch(PageRequestDTO requestDTO) {
        BooleanBuilder booleanBuilder = new BooleanBuilder();
        QCar qCar = QCar.car;

        String[] type = requestDTO.getType();
        String[] mtype = requestDTO.getMtype();
        String[] ktype = requestDTO.getKtype();
        String[] ytype = requestDTO.getYtype();
        String search = requestDTO.getSearch();

        BooleanExpression expression1 = qCar.cno.gt(0);

        booleanBuilder.and(expression1);

        if((type == null || type[0].trim().length() == 0) && (search == null || search.trim().length() == 0) &&
            (mtype == null || mtype[0].trim().length() == 0) && (ktype == null || ktype[0].trim().length() == 0)
                && (ytype == null || ytype[0].trim().length() == 0)) {// 검색 조건이 없는 경우
            return booleanBuilder;
        }

        // 검색 조건 타입
        BooleanBuilder conditionBuilder = new BooleanBuilder();
        if(type != null) {
            for(int i =0; i< type.length; i++) {
                if (type[i].contains("KB차차차")) {     // 플랫폼  (테스트: 성공)
                    conditionBuilder.and(qCar.platform.contains("KB차차차"));
                }
                if (type[i].contains("K-Car")) {     // 플랫폼  (테스트: 성공)
                    conditionBuilder.and(qCar.platform.contains("K-Car"));
                }
                
                if (type[i].contains("국산")) {     // 태그(국산/수입)  (테스트: 성공)
                    conditionBuilder.and(qCar.tag.contains("국산"));
                }
                if (type[i].contains("수입")) {     // 태그(국산/수입)  (테스트: 성공)
                    conditionBuilder.and(qCar.tag.contains("수입"));
                }
                
                if (type[i].contains("경차")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("경차"));
                }
                if (type[i].contains("소형차")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("소형차"));
                }
                if (type[i].contains("준중형차")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("준중형차"));
                }
                if (type[i].contains("중형차")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("중형차"));
                }
                if (type[i].contains("대형차")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("대형차"));
                }
                if (type[i].contains("RV")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("RV"));
                }
                if (type[i].contains("승합차")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("승합차"));
                }
                if (type[i].contains("스포츠카")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("스포츠카"));
                }
                if (type[i].contains("SUV")) {     // 차종 (테스트: 성공)
                    conditionBuilder.and(qCar.type.contains("SUV"));
                }
                
                if (type[i].contains("기아")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("기아"));
                }
                if (type[i].contains("현대")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("현대"));
                }
                if (type[i].contains("한국GM")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("한국GM"));
                }
                if (type[i].contains("르노코리아")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("르노코리아"));
                }
                if (type[i].contains("제네시스")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("제네시스"));
                }
                if (type[i].contains("쌍용")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("쌍용"));
                }
                if (type[i].contains("벤츠")) {     // 브랜드 (테스트: 성공) 여기서부터 수입 브랜드
                    conditionBuilder.and(qCar.brand.contains("벤츠"));
                }
                if (type[i].contains("BMW")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("BMW"));
                }
                if (type[i].contains("아우디")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("아우디"));
                }
                if (type[i].contains("미니")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("미니"));
                }
                if (type[i].contains("폭스바겐")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("폭스바겐"));
                }
                if (type[i].contains("랜드로버")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("랜드로버"));
                }
                if (type[i].contains("볼보")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("볼보"));
                }
                if (type[i].contains("포르쉐")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("포르쉐"));
                }
                if (type[i].contains("렉서스")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("렉서스"));
                }
                if (type[i].contains("지프")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("지프"));
                }
                if (type[i].contains("재규어")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("재규어"));
                }
                if (type[i].contains("포드")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("포드"));
                }
                if (type[i].contains("푸조")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("푸조"));
                }
                if (type[i].contains("도요타")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("도요타"));
                }
                if (type[i].contains("인피니티")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("인피니티"));
                }
                if (type[i].contains("마세라티")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("마세라티"));
                }
                if (type[i].contains("닛산")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("닛산"));
                }
                if (type[i].contains("혼다")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("혼다"));
                }
                if (type[i].contains("링컨")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("링컨"));
                }
                if (type[i].contains("캐딜락")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("캐딜락"));
                }
                if (type[i].contains("테슬라")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("테슬라"));
                }
                if (type[i].contains("크라이슬러")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("크라이슬러"));
                }
                if (type[i].contains("시트로엥")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("시트로엥"));
                }
                if (type[i].contains("벤틀리")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("벤틀리"));
                }
                if (type[i].contains("피아트")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("피아트"));
                }
                if (type[i].contains("쉐보레")) {     // 브랜드 (테스트: 성공) 국산, 해외 모델 둘 다 있음 이거 유의
                    conditionBuilder.and(qCar.brand.contains("쉐보레"));
                }
                if (type[i].contains("닷지")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("닷지"));
                }
                if (type[i].contains("페라리")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("페라리"));
                }
                if (type[i].contains("스마트")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("스마트"));
                }
                if (type[i].contains("람보르기니")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("람보르기니"));
                }
                if (type[i].contains("허머")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("허머"));
                }
                if (type[i].contains("롤스로이스")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("롤스로이스"));
                }
                if (type[i].contains("미쯔비시")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("미쯔비시"));
                }
                if (type[i].contains("중한자동차")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("중한자동차"));
                }
                if (type[i].contains("스즈키")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("스즈키"));
                }
                if (type[i].contains("사브")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("사브"));
                }
                if (type[i].contains("애스턴마틴")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("애스턴마틴"));
                }
                if (type[i].contains("스바루")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("스바루"));
                }
                if (type[i].contains("동풍자동차")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("동풍자동차"));
                }
                if (type[i].contains("로버")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("로버"));
                }
                if (type[i].contains("GMC")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("GMC"));
                }
                if (type[i].contains("다이하쓰")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("다이하쓰"));
                }
                if (type[i].contains("맥라렌")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("맥라렌"));
                }
                if (type[i].contains("폴스타")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("폴스타"));
                }
                if (type[i].contains("마쯔다")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("마쯔다"));
                }
                if (type[i].contains("마이바흐")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("마이바흐"));
                }
                if (type[i].contains("폰티악")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("폰티악"));
                }
                if (type[i].contains("LEVC")) {     // 브랜드 (테스트: 성공)
                    conditionBuilder.and(qCar.brand.contains("LEVC"));
                }
                
                if (type[i].contains("가솔린")) {     // 연료 타입 (테스트: 성공)
                    conditionBuilder.and(qCar.oil.contains("가솔린"));
                }
                if (type[i].contains("LPG")) {     // 연료 타입 (테스트: 성공)
                    conditionBuilder.and(qCar.oil.contains("LPG"));
                }
                if (type[i].contains("디젤")) {     // 연료 타입 (테스트: 성공)
                    conditionBuilder.and(qCar.oil.contains("디젤"));
                }
                if (type[i].contains("전기")) {     // 연료 타입 (테스트: 성공)
                    conditionBuilder.and(qCar.oil.contains("전기"));
                }
            }
        }
        if (search != null) {     // 모델 이름 (테스트: 성공)
            conditionBuilder.and(qCar.model.contains(search));
        }
        if (mtype != null) {
            if ("최소".equals(mtype[0])) {
                int keyword1_1=0;
                int keyword2_1 = Integer.parseInt(mtype[1].replace("만원", "0000"));

                conditionBuilder.and(qCar.pricer.between(keyword1_1, keyword2_1));
            }
            else if ("최대".equals(mtype[1])) {
                int keyword1_1 = Integer.parseInt(mtype[0].replace("만원", "0000"));
                int keyword2_1 = 100000000;

                conditionBuilder.and(qCar.pricer.between(keyword1_1, keyword2_1));
            }
            else {
                int keyword1_1 = Integer.parseInt(mtype[0].replace("만원", "0000"));
                int keyword2_1 = Integer.parseInt(mtype[1].replace("만원", "0000"));

                conditionBuilder.and(qCar.pricer.between(keyword1_1, keyword2_1));
            }
        }
        if (ktype != null) {
            if ("최소".equals(ktype[0])) {
                int keyword1_1=0;
                int keyword2_1 = Integer.parseInt(ktype[1].replace("km", ""));

                conditionBuilder.and(qCar.kmr.between(keyword1_1, keyword2_1));
            }
            else if ("최대".equals(ktype[1])) {
                int keyword1_1 = Integer.parseInt(ktype[0].replace("km", ""));
                int keyword2_1 = 2000000;

                conditionBuilder.and(qCar.kmr.between(keyword1_1, keyword2_1));
            }
            else {
                int keyword1_1 = Integer.parseInt(ktype[0].replace("km", ""));
                int keyword2_1 = Integer.parseInt(ktype[1].replace("km", ""));

                conditionBuilder.and(qCar.kmr.between(keyword1_1, keyword2_1));
            }
        }
        if (ytype != null) {
            if ("최소".equals(ytype[0])) {
                int keyword1_1 = 1989;
                int keyword2_1 = Integer.parseInt(ytype[1].replace("년", ""));

                conditionBuilder.and(qCar.year.between(keyword1_1, keyword2_1));
            }
            else if ("최대".equals(ytype[1])) {
                int keyword1_1 = Integer.parseInt(ytype[0].replace("년", ""));
                int keyword2_1 = 2024;

                conditionBuilder.and(qCar.year.between(keyword1_1, keyword2_1));
            }
            else {
                int keyword1_1 = Integer.parseInt(ytype[0].replace("년", ""));
                int keyword2_1 = Integer.parseInt(ytype[1].replace("년", ""));

                conditionBuilder.and(qCar.year.between(keyword1_1, keyword2_1));
            }
        }

        // 검색 조건 통합
        booleanBuilder.and(conditionBuilder);

        return booleanBuilder;
    }

    @Override
    public PageResultDTO<CarDTO, Car> getList(PageRequestDTO requestDTO) {
        Pageable pageable = requestDTO.getPageable(Sort.by("cno").descending());

        BooleanBuilder booleanBuilder = getSearch(requestDTO);  // 검색 조건 처리

        Page<Car> result = repository.findAll(booleanBuilder, pageable);  // Querydsl 사용

        Function<Car, CarDTO> fn = (entity -> entityToDto(entity));

        return new PageResultDTO<>(result, fn);
    }

    @Override
    public String searchSentence(PageRequestDTO requestDTO) { //검색어 만들기(유사한 차량 추천받기 위해)
        String sentence = ""; //검색어 만들 문장

        String[] type = requestDTO.getType();
        String[] mtype = requestDTO.getMtype();
        String[] ktype = requestDTO.getKtype();
        String[] ytype = requestDTO.getYtype();
        String search = requestDTO.getSearch();

        if((type == null || type[0].trim().length() == 0) && (search == null || search.trim().length() == 0) &&
                (mtype == null || mtype[0].trim().length() == 0) && (ktype == null || ktype[0].trim().length() == 0)
                && (ytype == null || ytype[0].trim().length() == 0)) {// 검색 조건이 없는 경우
            return null;
        }

        if(type != null) {
            for(int i =0; i< type.length; i++) {
                sentence += type[i];
                if(i < type.length-1)
                    sentence += " ";
            }
        }

        if (search != null) {
            sentence = search;
        }

        if (mtype != null) {
            int keyword1_1;
            int keyword2_1;

            if ("최소".equals(mtype[0])) {
                keyword1_1=0;
                keyword2_1 = Integer.parseInt(mtype[1]);
            }
            else if ("최대".equals(mtype[1])) {
                keyword1_1 = Integer.parseInt(mtype[0]);
                keyword2_1 = 100000000;
            }
            else {
                keyword1_1 = Integer.parseInt(mtype[0]);
                keyword2_1 = Integer.parseInt(mtype[1]);
            }
            int average = (keyword1_1+keyword2_1)/2;
            if(sentenceCheck(sentence))
                sentence += average;
            else
                sentence += " "+average;
        }

        if (ytype != null) {
            int keyword1_1;
            int keyword2_1;

            if ("최소".equals(ytype[0])) {
                keyword1_1 = 1989;
                keyword2_1 = Integer.parseInt(ytype[1]);
            }
            else if ("최대".equals(ytype[1])) {
                keyword1_1 = Integer.parseInt(ytype[0]);
                keyword2_1 = 2024;
            }
            else {
                keyword1_1 = Integer.parseInt(ytype[0]);
                keyword2_1 = Integer.parseInt(ytype[1]);
            }
            int average = (keyword1_1+keyword2_1)/2;
            if(sentenceCheck(sentence))
                sentence += average;
            else
                sentence += " "+average;
        }


        if (ktype != null) {
            int keyword1_1;
            int keyword2_1;

            if ("최소".equals(ktype[0])) {
                keyword1_1=0;
                keyword2_1 = Integer.parseInt(ktype[1]);
            }
            else if ("최대".equals(ktype[1])) {
                keyword1_1 = Integer.parseInt(ktype[0]);
                keyword2_1 = 2000000;
            }
            else {
                keyword1_1 = Integer.parseInt(ktype[0]);
                keyword2_1 = Integer.parseInt(ktype[1]);
            }
            int average = (keyword1_1+keyword2_1)/2;
            if(sentenceCheck(sentence))
                sentence += average;
            else
                sentence += " "+average;
        }
        return sentence;
    }

    private boolean sentenceCheck(String sentence) {
        if(sentence.equals("")) {
            return true;
        }
        else {
            return false;
        }
    }
}

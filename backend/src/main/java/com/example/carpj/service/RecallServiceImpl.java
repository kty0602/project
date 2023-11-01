package com.example.carpj.service;

import com.example.carpj.dto.RecallDTO;
import com.example.carpj.entity.Recall;
import com.example.carpj.repository.RecallRepository;
import kr.co.shineware.nlp.komoran.constant.DEFAULT_MODEL;
import kr.co.shineware.nlp.komoran.core.Komoran;
import kr.co.shineware.nlp.komoran.model.KomoranResult;
import kr.co.shineware.nlp.komoran.model.Token;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
@Log4j2
public class RecallServiceImpl implements RecallService{
    private final RecallRepository recallRepository;

    @Override
    public List<RecallDTO> basic() { //recall 기본 데이터
        try{
            log.info("------------------- Recall data -------------------");
            List<Recall> entity = recallRepository.findAll();
            List<RecallDTO> rList = new ArrayList<>();

            for(Recall recall : entity) {
                RecallDTO dto = entityToDTO(recall);
                rList.add(dto);
            }
            return rList.isEmpty() ? null : rList;
        } catch(Exception e) {
            log.info("오류");
            return null;
        }
    }

    @Override
    public List<Map<String, Object>> wordCloud(String carType) { //워드 클라우드
        List<Recall> entity = recallRepository.findAll();
        List<String> nList = new ArrayList<String>();

        // 형태소 분석 수행
        Komoran komoran = new Komoran(DEFAULT_MODEL.LIGHT);
        //LIGHT: 웹 서비스에 적합, FULL: 배치 서비스에 적합

        if(carType.equals("all")) {
            for (Recall recall : entity) {
                String content = recall.getReasons();

                // 형태소 분석 시작
                KomoranResult analyzeResultList = komoran.analyze(content);

                // 형태소 분석 결과 중 명사만 가져오기
                List<Token> tokenList = analyzeResultList.getTokenList();
                for (Token token : tokenList) {
                    if (token.getPos().startsWith("N")) {
                        nList.add(token.getMorph());
                    }
                }
            }
        } else {
            for (Recall recall : entity) {
                if(recall.getBrand().equals(carType)) {
                    String content = recall.getReasons();

                    // 형태소 분석 시작
                    KomoranResult analyzeResultList = komoran.analyze(content);

                    // 형태소 분석 결과 중 명사만 가져오기
                    List<Token> tokenList = analyzeResultList.getTokenList();
                    for (Token token : tokenList) {
                        if (token.getPos().startsWith("N")) {
                            nList.add(token.getMorph());
                        }
                    }
                }
            }
        }

        Map<String, Integer> wordMap = new HashMap<>();
        Set<String> wordSet = new HashSet<>(nList);

        // 중복이 제거된 단어 모음에 빈도수를 구하기 위해 반복문을 사용합니다.
        for (String word : wordSet) {
            // 단어가 중복 저장되어 있는 nList로부터 단어의 빈도수 가져오기
            int frequency = Collections.frequency(nList, word);

//            log.info("word: " + word);
//            log.info("frequency: " + frequency);

            wordMap.put(word, frequency);
        }

        List<Map<String, Object>> wordCloudList = new ArrayList<>();

        for (Map.Entry<String, Integer> entry : wordMap.entrySet()) {
            Map<String, Object> wordCloudEntry = new HashMap<>();
            wordCloudEntry.put("text", entry.getKey());
            wordCloudEntry.put("value", entry.getValue());

            wordCloudList.add(wordCloudEntry);
        }

        return wordCloudList;
    }

}

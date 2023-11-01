package com.example.carpj.service;

import com.example.carpj.dto.CarDicDTO;
import com.example.carpj.dto.CarViewDTO;
import com.example.carpj.dto.MemberDTO;
import com.example.carpj.entity.CarDic;
import com.example.carpj.entity.CarView;
import com.example.carpj.entity.CarViewId;
import com.example.carpj.entity.Member;
import com.example.carpj.repository.CarDicRepository;
import com.example.carpj.repository.CarViewRepository;
import com.example.carpj.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor //JPA 처리를 위한 의존성 주입
@Log4j2
public class CarViewServiceImpl implements CarViewService{
    private final CarViewRepository carViewRepository; //자동 주입 final
    private final CarDicRepository carDicRepository;
    private final MemberRepository memberRepository;
    private final CarDicService carDicService;

    @Override
    @Transactional
    public boolean register(CarViewDTO dto) { //특정 항목 조회 값 DB에 저장
        try {
            log.info("특정 항목 조회 값 DB에 저장-------------------");
            CarViewId vcId = new CarViewId(dto.getId(), dto.getCDNo()); //복합키
            Optional<CarView> result = carViewRepository.findById(vcId); //기존에 데이터가 있는지 확인하기 위해서, 해당 데이터가 있는지 확인
            CarView carView = dtoToEntity(dto);

            if(result.isPresent()) { //null이 아니면
                carView.updateViewCount(result.get().getCount()); //view count 1 증가
            } else { //null이면
                carView.setCount(1);
            }
            carViewRepository.save(carView);
            return true;

        } catch(Exception e) {
            log.info(e.getMessage());
            return false;
        }
    }

    @Override
    @Transactional
    public List<CarViewDTO> list() { //전체 데이터 목록(협업 필터링을 위한 데이터)
        try {
            log.info("전체 데이터 목록-------------------");
            List<CarView> entity = carViewRepository.findAll();
            List<CarViewDTO> viewList = new ArrayList<>();

            for(CarView carView : entity) {
                CarViewDTO dto = entityToDTO(carView);
                viewList.add(dto);
            }
            return viewList;
        } catch(Exception e) {
            log.info(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional
    public List<CarDicDTO>  rank() { //전체 조회수 순위
        try {
            log.info("전체 조회수 순위-------------------");
            List<CarView> entity = carViewRepository.findAll(Sort.by(Sort.Direction.DESC, "count"));
            List<CarDicDTO> viewList = new ArrayList<>();

            for (int i = 0; i < Math.min(entity.size(), 5); i++) { //TOP5만 담아서 보내기
                CarView carView = entity.get(i);
                CarViewDTO dto = entityToDTO(carView);

                // cdno에 해당하는 정보 검색
                Optional<CarDic> result = carDicRepository.findById(dto.getCDNo());
                CarDicDTO carDicDTO = carDicService.entityToDTO(result.get());

                viewList.add(carDicDTO);
            }

            return viewList;
        } catch(Exception e) {
            log.info(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional
    public Map<String, List<CarDicDTO>> sexRank() { //성별 조회수 순위
        try {
            log.info("성별에 따른 조회수 순위-------------------");
            List<CarView> entity = carViewRepository.findAll(Sort.by(Sort.Direction.DESC, "count"));
            Map<String, List<CarDicDTO>> genderRankMap = new HashMap<>();

            //여성 조회수 순위
            List<CarDicDTO> fRankList = new ArrayList<>();
            //남성 조회수 순위
            List<CarDicDTO> mRankList = new ArrayList<>();

            //성별에 따른 조회수 순위를 가져오기
            for (int i = 0; i < Math.min(entity.size(), 5); i++) { //TOP5만 담아서 보내기
                CarView carView = entity.get(i);
                CarViewDTO dto = entityToDTO(carView);

                //회원 정보 검색
                Optional<Member> memberResult = memberRepository.findById(dto.getId());

                //CDNo에 해당하는 정보 검색
                Optional<CarDic> result = carDicRepository.findById(dto.getCDNo());
                CarDicDTO carDicDTO = carDicService.entityToDTO(result.get());

                if(memberResult.get().getSex() != null) {
                    //성별에 따라 리스트에 추가
                    if (memberResult.get().getSex().equals("여")) {
                        fRankList.add(carDicDTO);
                    } else if (memberResult.get().getSex().equals("남")) {
                        mRankList.add(carDicDTO);
                    }
                }
            }

            //성별 조회수 순위를 맵에 저장
            genderRankMap.put("여", fRankList);
            genderRankMap.put("남", mRankList);

            return genderRankMap;
        } catch (Exception e) {
            log.info(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional
    public Map<String, List<CarDicDTO>> ageRank() { //연령별 조회수 순위
        try {
            log.info("연령별 조회수 순위-------------------");
            List<CarView> entity = carViewRepository.findAll(Sort.by(Sort.Direction.DESC, "count"));
            Map<String, List<CarDicDTO>> ageRankMap = new HashMap<>();

            //20대 조회수 순위
            List<CarDicDTO> rankList20 = new ArrayList<>();
            //30대 조회수 순위
            List<CarDicDTO> rankList30 = new ArrayList<>();
            //40대 조회수 순위
            List<CarDicDTO> rankList40 = new ArrayList<>();
            //50대 조회수 순위
            List<CarDicDTO> rankList50 = new ArrayList<>();
            //60대~ 조회수 순위
            List<CarDicDTO> rankList60 = new ArrayList<>();

            //연령별 조회수 순위를 가져오기
            for (int i = 0; i < Math.min(entity.size(), 5); i++) { //TOP 5만 담아서 보내기
                CarView carView = entity.get(i);
                CarViewDTO dto = entityToDTO(carView);

                //회원 정보 검색
                Optional<Member> memberResult = memberRepository.findById(dto.getId());

                //CDNo에 해당하는 정보 검색
                Optional<CarDic> result = carDicRepository.findById(dto.getCDNo());
                CarDicDTO carDicDTO = carDicService.entityToDTO(result.get());

                if (memberResult.get().getYear() != null) {
                    int age = getCurrentAge(memberResult.get().getYear()); //현재 나이대 구하기
                    System.out.println("Age------------"+age);
                    //연령대에 따라 리스트에 추가
                    if (age >= 20 && age < 30) {
                        rankList20.add(carDicDTO);
                    } else if (age >= 30 && age < 40) {
                        rankList30.add(carDicDTO);
                    } else if (age >= 40 && age < 50) {
                        rankList40.add(carDicDTO);
                    } else if (age >= 50 && age < 60) {
                        rankList50.add(carDicDTO);
                    } else if (age >= 60) {
                        rankList60.add(carDicDTO);
                    }
                }
            }

            //연령대별 조회수 순위를 맵에 저장
            ageRankMap.put("20", rankList20);
            ageRankMap.put("30", rankList30);
            ageRankMap.put("40", rankList40);
            ageRankMap.put("50", rankList50);
            ageRankMap.put("60", rankList60);

            return ageRankMap;
        } catch (Exception e) {
            log.info(e.getMessage());
            return null;
        }
    }

    //현재 나이 계산
    private int getCurrentAge(int birthYear) {
        Calendar calendar = Calendar.getInstance();
        int currentYear = calendar.get(Calendar.YEAR);
        return currentYear - birthYear + 1;
    }
}

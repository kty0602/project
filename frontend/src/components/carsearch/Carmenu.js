import { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useSelector } from "react-redux";

const CarmenuBlock = styled.div`
    width: 100%;
    padding: 1rem;
`

const CarmenuContent = styled.div`
  border-radius: 2px;
  width: 100%;
  border: 1px solid ${palette.gray[5]};

  .SearchTag {
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0;
    margin: 0;
    background: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    align-items: center;
    justify-content: space-between;

    .list {
      flex: 1;
      display: inline;
      font-size: 15px;
      font-weight: 800;
      text-align: center;
      margin-top: 10px;
      background: white;
      text-decoration: underline;
      border-radius: 10px;
    }
  }

  .searchMenu {
    background: white;
    padding: 1rem;
    border-top: 1px solid ${palette.gray[5]};
  }

  .SearchAcodian {
    background: white;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.2s ease-in-out;
    border-top: 1px solid ${palette.gray[5]};

    &.active {
      max-height: 150rem;
      transition: max-height 0.2s ease-in-out;
    }

    .LargeText {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
      background: #eaf7f6;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    select {
      width: 100%;
      margin-top: 0.5rem;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      border: 1px solid ${palette.gray[5]};
      border-radius: 4px;
    }

    .select2 {
      width: 100px;
      margin-top: 0.5rem;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      margin-left: 5px;
      margin-right: 5px;
      border: 1px solid ${palette.gray[5]};
      border-radius: 4px;
    }

    p {
      cursor: pointer;
      margin-bottom: 0.5rem;
    }

    input[type="radio"] {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.5rem;
    }
  }
`;


const Carmenu = ({handleChangeFilters}) => {

    //아코디언 메뉴
    const [activeIndexes, setActiveIndexes] = useState(Array(6).fill(null));


    // 브랜드 (국산,수입)
    const brand1 = ['기아','현대','한국GM','르노코리아','제네시스','쌍용','쉐보레'];
    const brand2 = ['벤츠','BMW','아우디','폭스바겐','랜드로버','볼보','포르쉐',
                    '랙서스','지프','재규어','포드','푸조','도요타','인피니티','마세라티','닛산',
                    '혼다','링컨','캐딜락','테슬라','크라이슬러','시트로엥','벤틀리','피아트','쉐보레',
                    '닷지','페라리','스마트','람보르기니','허머','롤스로이스','미쯔비시','중한자동차',
                    '스즈키','사브','애스턴마틴','스바루','동풍자동차','로버','GMC','다이하쓰','맥라렌',
                    '폴스타','마쯔다','마이바흐','폰티악','LEVC'];

    //차종
    const ctypeOptions = [
        { value: '', label: '전체' },
        { value: '경차', label: '경차' },
        { value: '소형차', label: '소형차' },
        { value: '준중형차', label: '준중형차' },
        { value: '중형차', label: '중형차' },
        { value: '대형차', label: '대형차' },
        { value: 'RV', label: 'RV' },
        { value: '승합차', label: '승합차' },
        { value: '스포츠카', label: '스포츠카' },
        { value: 'SUV', label: 'SUV' },
        ];
    //연료타입
    const oiltypeOptions = [
        { value: '', label: '전체' },
        { value: '가솔린', label: '가솔린' },
        { value: '디젤', label: '디젤' },
        { value: '전기', label: '전기' },
        { value: 'LPG', label: 'LPG' },
    ];
    //km
    const [selectedMin, setSelectedMin] = useState('최소');
    const [selectedMax, setSelectedMax] = useState('최대');

    const defaultOptions = Array.from({ length: 20 }, (_, index) => ({
        value: `${(index + 1) * 10000}km`,
        label: `${(index + 1) * 10000}km`,
    }));
    const [kmtypeOptions1,setkmtypeOption1] = useState(defaultOptions);
    const [kmtypeOptions2,setkmtypeOption2] = useState(defaultOptions);

    const handleMinChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedMin(selectedValue);
        updateKmtypeOptions2(selectedValue);
    };
    
    const handleMaxChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedMax(selectedValue);
        updateKmtypeOptions1(selectedValue);
    };
    
    const updateKmtypeOptions1 = (selectedValue) => {
        if (selectedValue === '최대')
        {
            setkmtypeOption1(defaultOptions);
            return;
        }
        setkmtypeOption1(defaultOptions.filter((option) => parseInt(option.value) < parseInt(selectedValue)));
    };

    const updateKmtypeOptions2 = (selectedValue) => {
        if (selectedValue === '최소')
        {
            setkmtypeOption2(defaultOptions);
            return;
        }
        setkmtypeOption2(defaultOptions.filter((option) => parseInt(option.value) > parseInt(selectedValue)));
    };
    //년도
    const [selectedMinYear, setSelectedMinYear] = useState('최소');
    const [selectedMaxYear, setSelectedMaxYear] = useState('최대');

    const currentYear = new Date().getFullYear();
    const startYear = 1986;
    const defaultYearOptions = Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
        const year = startYear + index;
        return {
            value: `${year}년`,
            label: `${year}년`,
        }
    })
    const [yearOption1,setYearOption1] = useState(defaultYearOptions);
    const [yearOption2,setYearOption2] = useState(defaultYearOptions);  

    const handleYearMinChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedMinYear(selectedValue);
        updateYearMaxOption(selectedValue);
    }

    const handleYearMaxChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedMaxYear(selectedValue);
        updateYearMinOption(selectedValue);
    }

    const updateYearMinOption = (selectedValue) => {
        if (selectedValue === '최대')
        {
            setYearOption1(defaultYearOptions);
            return;
        }
        setYearOption1(defaultYearOptions.filter((option) => parseInt(option.value) < parseInt(selectedValue)));
    }

    const updateYearMaxOption = (selectedValue) => {
        if (selectedValue === '최소')
        {
            setYearOption2(defaultYearOptions);
            return;
        }
        setYearOption2(defaultYearOptions.filter((option) => parseInt(option.value) > parseInt(selectedValue)));
    }
    //legion에 따라 국산 수입이 바뀌게 불러들임
    const {legion} = useSelector(({car}) => ({
        legion : car.filters.legion
    }));

    /** 아코디언 메뉴를 펼치기 위해 수행하는 함수*/
    const handleClick = (index) => {
        setActiveIndexes((prevState) => {
          const newIndexes = [...prevState];
          newIndexes[index] = newIndexes[index] === index ? null : index;
          return newIndexes;
        });
    };

    return(
        <CarmenuBlock>
            <CarmenuContent>
                <ul className="SearchTag">
                    <li className="list" onClick={() => handleChangeFilters({legion: '', brand:''})}>전체</li>
                    <li className="list" onClick={() => handleChangeFilters({legion: '국산', brand:''})}>국산</li>
                    <li className="list" onClick={() => handleChangeFilters({legion: '수입', brand:''})}>수입</li>
                </ul>
                <div className="searchMenu" onClick={() => handleClick(0)}>
                    플랫폼
                </div>
                    <div className={`SearchAcodian ${activeIndexes[0] === 0 ? "active" : ""}`}>
                        <div onChange={(event) => handleChangeFilters({platform: event.target.value})}>
                            <label>
                                전체
                                <input type="radio" value="전체" name="platform" defaultChecked/>
                            </label>
                            <label>
                                KB차차차
                                <input type="radio" value="KB차차차" name="platform"/>
                            </label>
                            <label>
                                K-Car
                                <input type="radio" value="K-Car" name="platform"/>
                            </label>
                        </div>
                    </div>
                <div className="searchMenu" onClick={() => handleClick(1)}>
                    브랜드
                </div>
                <div className={`SearchAcodian ${activeIndexes[1] === 1 ? "active" : ""}`}>
                    {
                        /* 레기온 값을 받아와서 국산 수입에 따라 브랜드 표기를 해준다.*/
                        legion === '' || legion === '국산'
                        ? 
                        <div>
                        <div className="LargeText">국산</div>
                        {brand1.map((brand, index) => (
                            <p key={index} onClick={() => handleChangeFilters({brand: brand})}>{brand}</p>
                        ))}
                        </div> 
                        : null
                    }
                    {
                        legion === '' || legion === '수입'
                        ? 
                        <div>
                        <div className="LargeText">수입</div>
                        {brand2.map((brand, index) => (
                            <p key={index} onClick={() => handleChangeFilters({brand: brand})}>{brand}</p>
                        ))}
                        </div> 
                        : null
                    }
                </div>
                <div className="searchMenu" onClick={() => handleClick(2)}>
                    차종
                </div>
                <div className={`SearchAcodian ${activeIndexes[2] === 2 ? "active" : ""}`}>
                    <select onChange={(e) => handleChangeFilters({ctype: e.target.value})}>
                        {
                            ctypeOptions.map((ctype,index) =>(
                                <option value={ctype.value} key={index}>{ctype.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="searchMenu" onClick={() => handleClick(3)}>
                    연료
                </div>
                <div className={`SearchAcodian ${activeIndexes[3] === 3 ? "active" : ""}`}>
                    <select onChange={(e) => handleChangeFilters({ otype: e.target.value })}>
                        {oiltypeOptions.map((option) => (
                            <option value={option.value} key={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="searchMenu" onClick={() => handleClick(4)}>
                    km
                </div>
                <div className={`SearchAcodian ${activeIndexes[4] === 4 ? "active" : ""}`}>
                    <select className="select2" value={selectedMin} 
                            onChange={(e) => {
                                handleMinChange(e);
                                handleChangeFilters({ minkm: e.target.value });
                            }}>
                        <option value='최소'>최소</option>
                        {kmtypeOptions1.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                    <text>~</text>
                    <select className="select2" value={selectedMax} 
                            onChange={(e) => {
                                handleMaxChange(e);
                                handleChangeFilters({ maxkm: e.target.value });
                            }}>
                        <option value='최대'>최대</option>
                        {kmtypeOptions2.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="searchMenu" onClick={() => handleClick(5)}>
                    연식
                </div>
                <div className={`SearchAcodian ${activeIndexes[5] === 5 ? "active" : ""}`}>
                    <select className="select2" value={selectedMinYear}
                        onChange={(e) => {
                            handleYearMinChange(e);
                            handleChangeFilters({ minyear: e.target.value});
                        }}>
                        <option value='최소'>최소</option>
                        {yearOption1.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}    
                    </select>
                    <text>~</text>
                    <select className="select2" value={selectedMaxYear}
                        onChange={(e) => {
                            handleYearMaxChange(e);
                            handleChangeFilters({ maxyear: e.target.value});
                        }}>
                        <option value='최대'>최대</option>
                        {yearOption2.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}    
                    </select>
                </div>
            </CarmenuContent>
        </CarmenuBlock>
    )
}

export default Carmenu;
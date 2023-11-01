import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useState } from "react";

const SearchBoxBlock = styled.div`
    width: 1280px;
    margin: 0 auto;
    border-top: 1px solid ${palette.gray[2]};
    display: flex;
    flex-direction: row-reverse;
    padding-top: 2rem;
    h4 {
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const SearchForm = styled.form`
    border-radius: 4px;
    margin-right: 2rem;
    overflow: hidden;
    width: 277px;
    border: 1px solid ${palette.gray[9]}; /* 스타일 초기화 */

    input,
    button {
        height: 100%;
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }

    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${palette.gray[6]};
        }
    }
`;

const SearchBox = ({handleChangeFilters}) => {
    const[searchKeyword,setSearchKeyword] = useState('');
    
    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value)
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleChangeFilters({
                legion: '',
                platform: '',
                brand: '',
                ctype: '',
                otype: '',
                minkm: '최소',
                maxkm: '최대',
                minyear: '최소',
                maxyear: '최대',
                search: searchKeyword
            })
            setSearchKeyword('');
        }
      };

    return (
        <SearchBoxBlock>
            <SearchForm>
                <input 
                    placeholder="검색어를 입력하세요"
                    value={searchKeyword}
                    onChange={handleInputChange}
                    onKeyPress={handleOnKeyPress}
                />
                <button 
                    type="button" 
                    onClick={() => handleChangeFilters({
                    legion: '',
                    platform: '',
                    brand: '',
                    ctype: '',
                    otype: '',
                    minkm: '최소',
                    maxkm: '최대',
                    minyear: '최소',
                    maxyear: '최대',
                    search: searchKeyword
                    })}
                >검색</button>
            </SearchForm>
        </SearchBoxBlock>
    )
}

export default SearchBox;
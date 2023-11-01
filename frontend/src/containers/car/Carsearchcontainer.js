import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeCarFilters, listCars } from "../../modules/car";
import Carsearch from "../../components/carsearch/Carsearch";
import SearchBox from "../../components/common/SearchBox";
import CarReco from "../../components/carsearch/CarReco";
import { sendUserTrend } from "../../lib/api/car";


const Carsearchcontainer = () => {
    const dispatch = useDispatch();
    const { cars, filters, user} = useSelector(({ car, user }) => ({
        cars: car.cars,
        filters : car.filters,
        user: user.currentUser,
    }));

    const handleChangeFilters = (filterObj) => {
        const updatedFilters = { ...filters, ...filterObj, page: '1'};
        dispatch(changeCarFilters(updatedFilters));
        dispatch(listCars());
    };

    const handleChangePage = (page) => {
        const updatedFilters = { ...filters, ...page };
        dispatch(changeCarFilters(updatedFilters));
        dispatch(listCars());
    }

    const sendTrend = async (cdno) => {
        try {
            await sendUserTrend({ id: user.id, cdno: cdno });
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        dispatch(listCars());
    },[dispatch])

    return (
        <div>
            <SearchBox
            handleChangeFilters={handleChangeFilters}
            />
            <Carsearch 
            cars={cars}
            handleChangeFilters={handleChangeFilters}
            handleChangePage={handleChangePage}
            sendTrend={sendTrend}
            />
            {cars.data && cars.data.response !== null && (
                <CarReco
                    carsReco={cars.data.response}
                />
            )}
        </div>
    )
}

export default Carsearchcontainer;

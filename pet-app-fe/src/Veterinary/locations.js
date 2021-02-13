import React, { useState, useEffect } from "react"
import il from "./il.json"
import Select from "react-select"



const Location = (props) => {

    const [province, setProvince] = useState(null);
    const [discrict, setDistrict] = useState(null);
    const [discrictList, setdiscrictList] = useState([]);

    const handleProvinceChange = (obj, e) => {
        setProvince(obj);
        setdiscrictList(obj.ilce);
        setDistrict(null);
    };
    const handleDistrictChange = (obj) => {
        setDistrict(obj.ilce);

    };

    useEffect(() => {
        props.LocationFunction(discrict);
    }, [discrict]);

    return (
        <div style={{ width: 400, marginBottom: 20 }}>

            <Select
                placeholder="Şehri Seçiniz"
                value={province}
                options={il}
                onChange={handleProvinceChange}
                getOptionLabel={x => x.il}
                getOptionValue={x => x.il}
            />
            <Select
                placeholder="İlçeyi Seçiniz"
                value={discrict}
                options={discrictList}
                onChange={handleDistrictChange}
                getOptionLabel={x => x.ilce}
                getOptionValue={x => x.il}

            />
        </div>
    )

}
export default Location;
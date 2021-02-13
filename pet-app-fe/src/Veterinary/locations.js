import React, { useState } from "react"
import il from "./il.json"
import Select from "react-select"


const Location = () => {
    const [province, setProvince] = useState(null);
    const [discrict, setDistrict] = useState(null);
    const [discrictList, setdiscrictList] = useState([]);

    const handleProvinceChange = (obj) => {
        setProvince(obj);
        setdiscrictList(obj.ilce);
        setDistrict(null);
    };
    const handleDistrictChange = (obj) => {
        setDistrict(obj);
    };

    return (
        <div style={{ width: 400, marginBottom: 20 }}>
            <Select
                placeholder="Şehri Seçiniz"
                value={province}
                options={il}
                onChange={handleProvinceChange}
                getOptionLabel={x => x.il}
                getOptionValue={x => x.plaka}
            />
            <Select
                placeholder="İlçeyi Seçiniz"
                value={discrict}
                options={discrictList}
                onChange={handleDistrictChange}
                getOptionLabel={x => x.ilce}
                getOptionValue={x => x.plaka}
            />
        </div>
    )

}
export default Location;
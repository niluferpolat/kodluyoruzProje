import { Checkbox, Collapse } from "antd"
import React, { useState } from "react"
const gender = [
    {
        "_id": 1,
        "name": "Dişi"
    },
    {
        "_id": 2,
        "name": "Erkek"
    }
];
const species = [
    {
        "_id": 3,
        "name": "Kedi"
    },
    {
        "_id": 4,
        "name": "Köpek"
    },
    {
        "_id": 5,
        "name": "Kuş"
    },
    {
        "_id": 6,
        "name": "Kemirgen"
    },
    {
        "_id": 7,
        "name": "Diğer"
    },

];
const age = [
    {
        "_id": 8,
        "name": "0-12 Aylık"
    },
    {
        "_id": 9,
        "name": "1-7 Yaşında"
    },
    {
        "_id": 10,
        "name": "8-12 Yaşında"
    },
    {
        "_id": 11,
        "name": "12 Yaş ve Üstü"
    },


];

const { Panel } = Collapse
const Filter = (props) => {
    const [Checked, setChecked] = useState([]);
    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked);
        props.handleFilters(newChecked)
    }
    return (
        <Collapse defaultActiveKey={['0']} style={{ width: 200 }}>
            <Panel header="Filtre" key="1">
                {gender.map((value, index) => (
                    <React.Fragment key={index}>
                        <Checkbox
                            onChange={() => handleToggle(value._id)}
                            type="checkbox"
                            checked={Checked.indexOf(value._id) === -1 ? false : true}
                        />
                        <span>{value.name}</span>
                    </React.Fragment>

                ))}
                <br />
                {species.map((value, index) => (
                    <React.Fragment key={index}>
                        <Checkbox
                            onChange={() => handleToggle(value._id)}
                            type="checkbox"
                            checked={Checked.indexOf(value._id) === -1 ? false : true}
                        />
                        <span>{value.name}</span>
                    </React.Fragment>
                ))}
                <br />
                {age.map((value, index) => (
                    <React.Fragment key={index}>
                        <Checkbox
                            onChange={() => handleToggle(value._id)}
                            type="checkbox"
                            checked={Checked.indexOf(value._id) === -1 ? false : true}
                        />
                        <span>{value.name}</span>
                    </React.Fragment>
                ))}
            </Panel>
        </Collapse>
    );
}
export default Filter
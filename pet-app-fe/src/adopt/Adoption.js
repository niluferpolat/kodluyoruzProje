import { PlusCircleOutlined } from '@ant-design/icons';
import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdopt } from "../actions/adopt"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../helpers/auth"
import { Layout, Divider, Button, Modal, List } from "antd"
import Adopt from "./Adopt"
const { Content } = Layout;

function warning() {
    Modal.warning({
        title: 'Uyarı!',
        content: 'Sahiplendirme İlanı Açmak İçin Üye Girişi Yapınız',
    });
}
const Adoption = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdopt());
    }, [dispatch]);
    const adopts = useSelector((state) => state.adopts.adopts);
    return (
        <Content className="site-layout" style={{ padding: '0 50px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
                {!isAuthenticated() && (
                    <Fragment>
                        <Button type="primary" onClick={warning} style={{ float: "right" }}>
                            Yeni Sahiplendirme İlanı<PlusCircleOutlined />
                        </Button>
                    </Fragment>
                )
                }
                {isAuthenticated() && (
                    <Fragment>
                        <Link to="/adoption/addAdopt">
                            <Button type="primary" style={{ float: "right" }}>
                                Yeni Sahiplendirme İlanı<PlusCircleOutlined />
                            </Button>
                        </Link>

                    </Fragment>
                )
                }


                <Divider />
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={adopts}
                    renderItem={(item) => (
                        <List.Item>
                            <Adopt {...item} />
                        </List.Item>
                    )}
                />
            </div>
        </Content>
    )
}
export default Adoption;
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { PicturesWrapper } from "./style";
import { Typography } from "antd";

const DetailPictures = memo((props) => {
    const {  url } = props;

    /** redux获取数据 */
    const { detailInfo } = useSelector(
        (state) => ({
            detailInfo: state.detail.detailInfo
        }),
        shallowEqual
    );

    const { Title } = Typography;

    if (url) {
        return (
            <PicturesWrapper>
                <Title level={2}>租房详情</Title>
                <div className="pictures">
                    <div className="left">
                        <div className="item">
                            <img src={url} alt="" />
                            <div className="cover"></div>
                        </div>
                    </div>
                    <div className="right1">
                        <div className="item">
                            <img src={url} alt="" />
                            <div className="cover"></div>
                        </div>
                    </div>
                </div>
            </PicturesWrapper>
        );
    }

    if (detailInfo?.picture_urls) {
        return (
            <PicturesWrapper>
                <Title level={2}>租房详情</Title>
                <div className="pictures">
                    <div className="left">
                        <div className="item">
                            <img src={detailInfo.picture_urls[0]} alt="" />
                            <div className="cover"></div>
                        </div>
                    </div>
                    <div className="right">
                        {detailInfo.picture_urls.slice(1, 5).map((item) => (
                            <div className="item" key={item}>
                                <img src={item} alt="" />
                                <div className="cover"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </PicturesWrapper>
        );
    }

    return null;
});

export default DetailPictures;

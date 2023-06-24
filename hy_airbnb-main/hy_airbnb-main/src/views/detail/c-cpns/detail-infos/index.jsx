import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { InfosWrapper } from "./style";

const DetailInfos = memo(() => {
  /** redux获取数据 */
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  return (
    <InfosWrapper>
      <div className="container">
        <div className="messages">
          简要信息：{detailInfo.verify_info.messages}
        </div>
        <br />
        <br />
        <br />
        <div className="name">位置：{detailInfo.name}</div>
        <br />
        <br />
        <br />
        <div className="price">价格：{detailInfo.price_format}/晚</div>
        <br />
        <br />
        <br />
        <div className="comment">点评：{detailInfo.reviews[0].comments}</div>
        <br />
        <br />
        <br />
      </div>
    </InfosWrapper>
  );
});

export default DetailInfos;

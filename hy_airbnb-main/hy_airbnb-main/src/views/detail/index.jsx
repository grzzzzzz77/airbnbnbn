import { changeHeaderConfigAction } from "@/store/modules/main";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import DetailPictures from "./c-cpns/detail-pictures";
import SelectDay from "./c-cpns/selectDay";
import Infos from "./c-cpns/demo";
import { DetailWrapper } from "./style";
import ShareComponent from "./c-cpns/shareComponent";
import { shallowEqual, useSelector } from "react-redux";
const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  const propertyUrl = "https://example.com/property/" + detailInfo.id;

  return (
    <DetailWrapper>
      <div>
        <DetailPictures />
        <br />
        <br />
        <br />
        <div className="intro">
          <div className="info">
            <Infos />
          </div>
          <div className="day">
            <SelectDay />
            <div className="share">
              <ShareComponent propertyUrl={propertyUrl} />
            </div>
          </div>
        </div>
      </div>
    </DetailWrapper>
  );
});

export default Detail;

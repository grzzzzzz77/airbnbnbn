import PropTypes from 'prop-types'
import React, {memo, useCallback} from 'react'

import RoomItem from '../room-item'
import { RoomsWrapper } from './style'
import {useNavigate} from "react-router-dom";
import {message} from "antd";
const SectionRooms = memo((props) => {

  const { roomList = [], itemWidth } = props

  const navigate = useNavigate()
  const itemClickHandle = useCallback((item) => {
    navigate(`/detail?id=${item.id}&url=${item.picture_url}&name=${item.name}&price=${item.price}&message=${item.verify_info.messages}&reviews=${item.reviews}`);
  }, [navigate])
  return (
    <RoomsWrapper>
      {
        roomList.slice(0, 8)?.map(item => {
          return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} itemClick={itemClickHandle} />
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
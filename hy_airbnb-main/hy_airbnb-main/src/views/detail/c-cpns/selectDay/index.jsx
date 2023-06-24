import { DatePicker } from "antd";
import { useState, useEffect } from "react";
import { PickerWrapper } from "./style";
const { RangePicker } = DatePicker;

const App = () => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // 新增 isOpen 状态

  useEffect(() => {
    setIsOpen(true); // 在页面加载时将 isOpen 设置为 true，即展开日期选择框
  }, []);

  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") >= 30;
    const tooEarly = dates[1] && dates[1].diff(current, "days") >= 30;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };

  return (
    <PickerWrapper>
      <div className="content">
        <div className="txt">选择入住时间：</div>
        <RangePicker
          className="pick"
          value={dates || value}
          disabledDate={disabledDate}
          onCalendarChange={(val) => {
            setDates(val);
          }}
          onChange={(val) => {
            setValue(val);
          }}
          onOpenChange={onOpenChange}
          open={isOpen} // 将 isOpen 作为 open 属性的值
          changeOnBlur
        />
      </div>
    </PickerWrapper>
  );
};

export default App;

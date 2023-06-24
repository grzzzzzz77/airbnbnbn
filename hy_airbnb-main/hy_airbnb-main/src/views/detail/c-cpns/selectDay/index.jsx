import { DatePicker } from "antd";
import { useState } from "react";
import { PickerWrapper } from "./style";
const { RangePicker } = DatePicker;
const App = () => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") >= 15;
    const tooEarly = dates[1] && dates[1].diff(current, "days") >= 15;
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
          changeOnBlur
        />
      </div>
    </PickerWrapper>
  );
};
export default App;

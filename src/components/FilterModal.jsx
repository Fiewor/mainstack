import { useContext, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { close } from "../assets";
import { FilterContext, ModalContext } from "../App";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const transactionList = [
  "Store transactions",
  "Get tipped",
  "Withdrawals",
  "Chargebacks",
  "Cashbacks",
  "Refer & Earn",
];
const statusList = ["Successful", "Pending", "Failed"];
const ranges = ["Today", "Last 7 days", "This month", "Last 3 months"];

const FilterModal = () => {
  const [startDate, setStartDate] = useState(dayjs("2023-07-17"));
  const [endDate, setEndDate] = useState(dayjs("2023-08-17"));
  const [currListItem, setCurrListItem] = useState([]);
  const [status, setStatus] = useState([]);

  const { showModal, setShowModal } = useContext(ModalContext);
  const { setFilters } = useContext(FilterContext);

  const handleListChange = (event) => {
    const {
      target: { value },
    } = event;
    setCurrListItem(typeof value === "string" ? value.split(",") : value);
  };

  const handleStatusChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatus(typeof value === "string" ? value.split(",") : value);
  };

  const handleClear = () => {
    setStartDate(dayjs("2023-07-17"));
    setEndDate(dayjs("2023-08-17"));
    setCurrListItem([]);
    setStatus([]);
    setFilters({});
  };

  const handleApply = () => {};

  return (
    <div className="modal">
      <div className="modal__top">
        <div className="modal__top__header">
          <p>Filter</p>
          <img
            src={close}
            alt="cancel icon"
            onClick={() => setShowModal(!showModal)}
          />
        </div>

        <div className="modal__top__range">
          {ranges.map((range, id) => (
            <p key={id} className="modal__top__range__item">
              {range}
            </p>
          ))}
        </div>

        <div className="modal__top__date">
          <p className="modal__top__date__header">Date Range</p>

          <div className="modal__top__date__group">
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
            />
          </div>
        </div>

        <div className="modal__top__group">
          <div className="modal__top__group__transaction">
            <p className="modal__top__group__transaction__header">
              Transaction Type
            </p>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={currListItem}
                onChange={handleListChange}
                input={<OutlinedInput label="Select" />}
                renderValue={(selected) => {
                  if (!selected.length) {
                    return <em>Select transaction type</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
              >
                {transactionList?.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Checkbox checked={currListItem.indexOf(item) > -1} />
                    <ListItemText primary={item} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="modal__top__group__status">
            <p className="modal__top__group__status__header">
              Transaction Status
            </p>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={status}
                onChange={handleStatusChange}
                input={<OutlinedInput label="Select" />}
                renderValue={(selected) => {
                  if (!selected.length) {
                    return <em>Select transaction status</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
              >
                {statusList?.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Checkbox checked={status.indexOf(item) > -1} />
                    <ListItemText primary={item} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="modal__bottom">
        <button className="modal__bottom__button primary" onClick={handleClear}>
          Clear
        </button>
        <button
          className="modal__bottom__button secondary"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterModal;

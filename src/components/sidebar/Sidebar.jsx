import "./sidebar.css";
import {
  StorageOutlined,
  EventAvailableOutlined,
  PodcastsOutlined,
  ChecklistOutlined,
  CalendarMonthOutlined,
  PaymentOutlined,
  ReceiptLongOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";
import React from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebarMenu">
          <SidebarItem
            title="Database"
            to="/"
            NavIcon={<StorageOutlined className="sidebarIcon" />}
          />
          <SidebarItem
            title="Event"
            to="/event"
            NavIcon={<EventAvailableOutlined className="sidebarIcon" />}
          />
          <SidebarItem
            title="Casting"
            to="/casting"
            NavIcon={<PodcastsOutlined className="sidebarIcon" />}
          />
          <SidebarItem
            title="Plan Job"
            to="/planjob"
            NavIcon={<ChecklistOutlined className="sidebarIcon" />}
          />
          <SidebarItem
            title="Calender"
            to="/calender"
            NavIcon={<CalendarMonthOutlined className="sidebarIcon" />}
          />
          <SidebarItem
            title="Payments"
            to="/payments"
            NavIcon={<PaymentOutlined className="sidebarIcon" />}
          />
          <SidebarItem
            title="Invoices"
            to="/invoices"
            NavIcon={<ReceiptLongOutlined className="sidebarIcon" />}
          />
          <SidebarItem
            title="Report"
            to="/report"
            NavIcon={<DescriptionOutlined className="sidebarIcon" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

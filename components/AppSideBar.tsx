'use client'

import { Home, User } from 'lucide-react'
import { ShieldHalf } from 'lucide-react';
import { BiSupport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"


const LinksMainGroup = [
  {
    title: "Home",
    url: "/dashboard",
    icon: <Home />
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: <User />
  },
  {
    title: "Clan",
    url: "/dashboard/clan",
    icon: <ShieldHalf />
  },
  {
    title: "Support",
    url: "/dashboard/support",
    icon: <BiSupport  />
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <IoSettings   />
  }
]

const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent> </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar
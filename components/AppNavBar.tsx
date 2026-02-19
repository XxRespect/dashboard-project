"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Moon, ShieldHalf, SquareMenu, Sun, User } from 'lucide-react'
import { LogOut } from 'lucide-react';
import Link from 'next/link'
import { useTheme } from 'next-themes'

/* -- Menu Dropdown -- */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BiSupport } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
/**Avatar */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AppNavBar = () => {

  const {setTheme } = useTheme();

  return (
    <>
      <nav className="flex justify-between items-center w-full h-15 py-4 mb-3 border-b px-4 mt-3">
        {/**Left */}
        Collpase button
        {/**RIGHT */}
        <div className='flex items-center gap-4 px-3'>
          <Link href="/dashboard" className="text-lg font-semibold">Dashboard </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className=' hover:cursor-pointer' asChild>

              <Button variant="default" className={cn("px-2 py-1 rounded-md border")}>
                <Moon />

              </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='hover:cursor-pointer' onClick={() => setTheme("light")}><Sun />Light</DropdownMenuItem>
                <DropdownMenuItem className='hover:cursor-pointer' onClick={() => setTheme("dark")}><Moon />Dark</DropdownMenuItem>
                <DropdownMenuItem className='hover:cursor-pointer' onClick={() => setTheme("system")}><MdOutlineComputer />System</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuSeparator />

              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu></DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className=' hover:cursor-pointer' asChild>

              <Avatar className="h-8 w-8  hover:pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel> My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='hover:cursor-pointer'><User /><Link href="dashboard/profile">Profile</Link></DropdownMenuItem>
                <DropdownMenuItem className='hover:cursor-pointer'> <ShieldHalf /><Link href="dashboard/clan">Clan</Link></DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                
                <DropdownMenuItem className='hover:cursor-pointer'>
                  <BiSupport /><Link href="dashboard/support">Suporte</Link></DropdownMenuItem>
                <DropdownMenuItem variant='destructive' className='hover:cursor-pointer'>
                  <LogOut className="mr-2 h-4 w-4" />
                  <Link href="dashboard/logout">Sair</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:cursor-pointer " asChild>
              <Button variant="outline" ><SquareMenu /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-bold">General</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Tickets</DropdownMenuItem>
                <DropdownMenuItem>Awards</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Zones</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav >
    </>
  )
}

export default AppNavBar
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MenuIcon } from 'lucide-react'
import Menu from './menu'

type Props = {}

const MobileSidebar = (props: Props) => {
  return (
    <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost"><MenuIcon /></Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <Menu />
          </SheetContent>
        </Sheet>
  )
}

export default MobileSidebar
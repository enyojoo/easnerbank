"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { CreditCard, Home, ArrowLeftRight, History, Search, Landmark } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

export function DashboardNav() {
  const { user } = useAuth()
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/accounts", label: "Accounts", icon: Landmark },
    { href: "/send", label: "Send", icon: ArrowLeftRight },
    { href: "/cards", label: "Cards", icon: CreditCard },
    { href: "/transactions", label: "Transactions", icon: History },
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-56 border-r bg-sidebar flex flex-col">
      <div className="flex items-center gap-2 px-6 py-5 border-b">
        <Image
          src="https://seeqjiebmrnolcyydewj.supabase.co/storage/v1/object/public/brand/Easner%20Logo.svg"
          alt="Easner Bank"
          width={100}
          height={28}
          className="h-7 w-auto"
        />
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-9 px-3 text-sm font-normal",
                  isActive && "bg-accent text-accent-foreground font-medium",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      <div className="border-t p-3">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              {user?.name?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardTopBar() {
  return (
    <div className="border-b bg-background h-14 flex items-center px-6 gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search or jump to..." className="pl-9 h-9 bg-muted/50 border-0" />
      </div>
      <Button size="sm" className="ml-auto">
        Move Money
      </Button>
    </div>
  )
}

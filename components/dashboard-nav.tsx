"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { CreditCard, Home, ArrowLeftRight, History, Search, Landmark, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { BusinessDropdown } from "@/components/business-dropdown"
import Image from "next/image"

export function DashboardNav() {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/accounts", label: "Accounts", icon: Landmark },
    { href: "/send", label: "Send", icon: ArrowLeftRight },
    { href: "/recipients", label: "Recipients", icon: Users },
    { href: "/cards", label: "Cards", icon: CreditCard },
    { href: "/transactions", label: "Transactions", icon: History },
  ]

  const businessName = "Easner Bank" // This could come from user context or props

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
        <BusinessDropdown
          businessName={businessName}
          adminName={user?.name || "Admin"}
          adminEmail={user?.email || ""}
          onSignOut={logout}
        />
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

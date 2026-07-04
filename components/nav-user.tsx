"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  SparklesIcon,
  CheckmarkBadgeIcon,
  CreditCardIcon,
  NotificationIcon,
  LogoutIcon,
} from "@hugeicons/core-free-icons"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-11 items-center gap-3 rounded-full border border-white/[0.05] bg-white/[0.04] p-1.5 text-left transition-all hover:bg-white/[0.08] data-[state=open]:bg-white/[0.08] sm:pr-4">
          <Avatar className="h-8 w-8 rounded-full border border-white/20">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-full bg-[#1c232e] text-xs font-bold text-white">
              {user.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden min-w-0 text-left sm:block">
            <p className="max-w-28 truncate text-xs font-bold leading-tight text-white">
              {user.name}
            </p>
            <span className="block max-w-28 truncate text-[10px] font-medium text-zinc-400">
              {user.email}
            </span>
          </div>
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            size={12}
            strokeWidth={2}
            className="hidden text-zinc-400 sm:block"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60 rounded-2xl border-white/10 bg-[#0f141c] text-zinc-200 shadow-2xl shadow-black/40"
        align="end"
        sideOffset={10}
      >
        <DropdownMenuLabel className="p-2 font-normal">
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-2 text-left">
            <Avatar className="h-9 w-9 rounded-full">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-full bg-[#1c232e] text-xs text-white">
                {user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 text-sm leading-tight">
              <span className="block truncate font-semibold text-white">
                {user.name}
              </span>
              <span className="block truncate text-xs text-zinc-400">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HugeiconsIcon icon={CheckmarkBadgeIcon} strokeWidth={2} />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={NotificationIcon} strokeWidth={2} />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem>
          <HugeiconsIcon icon={LogoutIcon} strokeWidth={2} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

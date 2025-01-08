"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { Badge } from "./ui/badge"
import Image from "next/image"
import { useId, useState } from "react"
import Link from "next/link"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"form">) {
	const id = useId()
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const toggleVisibility = () => setIsVisible((prevState) => !prevState)

	return (
		<form
			className={cn("flex flex-col justify-center gap-6 max-w-xs mx-auto h-full", className)}
			{...props}
		>
			<Badge
				variant="outline"
				className="border-2 border-[#F89318] bg-[#F89318]/30 w-fit rounded-full gap-1 p-1 pr-2 mx-auto"
			>
				<Image
					src="/neust-logo.png"
					width={24}
					height={24}
					alt="logo"
					priority
					quality={100}
				/>
				<p className="text-base text-primary font-semibold">NEUST</p>
			</Badge>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Welcome back NEUSTians!</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Log in to your account to continue.
				</p>
			</div>
			<Badge
				variant="outline"
				className="rounded-full gap-1.5 w-fit mx-auto"
			>
				<span
					className="size-1.5 rounded-full bg-emerald-500"
					aria-hidden="true"
				></span>
				Server 1: <span className="text-primary">GS, CAS, BSN, BSAgri, CPTE & CPE</span>
			</Badge>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Username</Label>
					<Input
						id="email"
						type="email"
						required
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex justify-between items-center">
						<Label htmlFor="password">Password</Label>
						<Link
							href="/account-recovery"
							className="text-sm text-primary hover:underline underline-offset-4"
						>
							Forgot password?
						</Link>
					</div>
					<div className="relative">
						<Input
							id={id}
							className="pe-9"
							type={isVisible ? "text" : "password"}
						/>
						<button
							className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
							type="button"
							onClick={toggleVisibility}
							aria-label={isVisible ? "Hide password" : "Show password"}
							aria-pressed={isVisible}
							aria-controls="password"
						>
							{isVisible ? (
								<EyeOff
									size={16}
									strokeWidth={2}
									aria-hidden="true"
								/>
							) : (
								<Eye
									size={16}
									strokeWidth={2}
									aria-hidden="true"
								/>
							)}
						</button>
					</div>
				</div>
				<Button
					type="submit"
					className="w-full"
				>
					Login
				</Button>
			</div>
			<div className="text-center text-sm">
				Not yet Registered?{" "}
				<Dialog>
					<DialogTrigger>Click Here</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Registration (For College or Masters Graduate)</DialogTitle>
						</DialogHeader>
						<RadioGroup
							className="gap-2"
							defaultValue="1"
						>
							<div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
								<RadioGroupItem
									value="1"
									id={`${id}-1`}
									aria-describedby={`${id}-1-description`}
									className="order-1 after:absolute after:inset-0"
								/>
								<div className="grid grow gap-2">
									<Label htmlFor={`${id}-1`}>New Graduate School Student</Label>
								</div>
							</div>
							<div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
								<RadioGroupItem
									value="2"
									id={`${id}-2`}
									aria-describedby={`${id}-2-description`}
									className="order-1 after:absolute after:inset-0"
								/>
								<div className="grid grow gap-2">
									<Label htmlFor={`${id}-2`}>
										New Certificate in Professional Teaching Education Student
									</Label>
								</div>
							</div>
							<div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
								<RadioGroupItem
									value="3"
									id={`${id}-3`}
									aria-describedby={`${id}-3-description`}
									className="order-1 after:absolute after:inset-0"
								/>
								<div className="grid grow gap-2">
									<Label htmlFor={`${id}-3`}>New Certificate in Physical Education Student</Label>
								</div>
							</div>
						</RadioGroup>
						<Button>Submit</Button>
					</DialogContent>
				</Dialog>
			</div>
		</form>
	)
}

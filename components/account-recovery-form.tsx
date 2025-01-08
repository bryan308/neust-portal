"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "./ui/badge"
import Image from "next/image"

import { DateField, DateInput, DateSegment } from "react-aria-components"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useId } from "react"

export function AccountRecoveryForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	const id = useId()

	return (
		<form
			className={cn("flex flex-col gap-6 max-w-xs mx-auto h-full", className)}
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
				<h1 className="text-2xl font-bold">Account Recovery</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Fill in the corresponding fields to recover your account.
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="studentId">Student Number</Label>
					<Input
						id="studentId"
						type="text"
						placeholder="e.g. SUM2023-12345"
						required
					/>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<div className="grid gap-2">
						<Label htmlFor="fname">First Name</Label>
						<Input
							id="fname"
							type="text"
							required
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="lname">Last Name</Label>
						<Input
							id="lname"
							type="text"
							required
						/>
					</div>
				</div>
				<DateField className="grid gap-2">
					<Label>Date of Birth</Label>
					<DateInput className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20">
						{(segment) => (
							<DateSegment
								segment={segment}
								className="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50"
							/>
						)}
					</DateInput>
				</DateField>
				<div className="grid gap-2">
					<Label htmlFor={id}>Campus</Label>
					<Select>
						<SelectTrigger id={id}>
							<SelectValue placeholder="Select Campus" />
						</SelectTrigger>
						<SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
							<SelectItem value="3">Atate Campus</SelectItem>
							<SelectItem value="7">Carranglan Campus</SelectItem>
							<SelectItem value="4">Fort Magsaysay Campus</SelectItem>
							<SelectItem value="5">Gabaldon Campus</SelectItem>
							<SelectItem value="13">Gapan Campus</SelectItem>
							<SelectItem value="1">Gen. Tinio St. Campus</SelectItem>
							<SelectItem value="8">Papaya Campus</SelectItem>
							<SelectItem value="9">Peñaranda Campus</SelectItem>
							<SelectItem value="10">San Antonio Campus</SelectItem>
							<SelectItem value="6">San Isidro Campus</SelectItem>
							<SelectItem value="11">San Leonardo Campus</SelectItem>
							<SelectItem value="14">Sto. Domingo Campus</SelectItem>
							<SelectItem value="2">Sumacab Campus</SelectItem>
							<SelectItem value="12">Talavera Campus</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="grid gap-2">
					<Label htmlFor={id}>Course</Label>
					<Select>
						<SelectTrigger id={id}>
							<SelectValue placeholder="Select Course" />
						</SelectTrigger>
						<SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
							<SelectItem value="0">Course 1</SelectItem>
							{/* Course is based on the selected campus :< */}
						</SelectContent>
					</Select>
				</div>
				<Button
					type="submit"
					className="w-full"
				>
					Submit
				</Button>
			</div>
		</form>
	)
}

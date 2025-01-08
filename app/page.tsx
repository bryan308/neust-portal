import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function LoginPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2 p-6">
			<div className="flex flex-1 items-center justify-center shadow-md">
				<div className="w-full h-full bg-white p-8 border">
					<LoginForm />
				</div>
			</div>
			<div className="relative hidden overflow-hidden bg-muted lg:block shadow-md">
				<div className="absolute w-full h-full bg-gradient-to-t from-primary to-transparent z-10" />
				<Image
					src="/neust.png"
					width={1477}
					height={1108}
					alt="NEUST General Tinio Campus"
					className="absolute inset-0 h-full w-[120%] object-cover dark:brightness-[0.2] dark:grayscale"
				/>
				<div className="absolute left-0 bottom-0 p-6 z-10">
					<div className="flex items-center gap-4">
						<Image
							src="/neust-logo.png"
							width={72}
							height={72}
							alt="logo"
							priority
							quality={100}
						/>
						<div>
							<h1 className="text-7xl text-[#F89318] font-bold">NEUST</h1>
							<p className="text-3xl text-white font-semibold">Online Enrollment</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

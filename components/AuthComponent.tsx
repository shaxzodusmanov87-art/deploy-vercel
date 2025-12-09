"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

export default function AuthComponent() {
	const { data: session } = useSession();
	const [activeModal, setActiveModal] = useState(false)


	if (session) {
		const user = session.user;

		return (
			<div className="flex items-center gap-3">
				<CardTitle className="text-sm font-medium whitespace-nowrap">
					{user?.name || "User"}
				</CardTitle>

				<Avatar className="w-10 h-10" onClick={() => setActiveModal(prev => !prev)}>
					<AvatarImage src={user?.image || ""} />
					<AvatarFallback>
						{user?.name?.slice(0, 2).toUpperCase() || "US"}
					</AvatarFallback>
				</Avatar>

				{activeModal &&
					<div className="absolute top-0 right-0 mt-10 mr-80">
						<Card className="max-w-sm mx-auto mt-10 shadow-lg">
							<CardHeader className="flex flex-col items-center">
								<Avatar className="w-20 h-20">
									<AvatarImage src={user?.image || ""} />
									<AvatarFallback>
										{user?.name?.slice(0, 2).toUpperCase() || "US"}
									</AvatarFallback>
								</Avatar>

								<CardTitle className="mt-4 text-center">
									{user?.name || "User"}
								</CardTitle>
							</CardHeader>

							<CardContent className="text-center space-y-4 flex flex-col">
								<p className="text-muted-foreground">{user?.email}</p>

								<Link href="/profile">
									<Button className="w-full">Профиль</Button>
								</Link>

								<Button
									variant="destructive"
									className="w-full"
									onClick={() => signOut()}
								>
									Sign out
								</Button>
							</CardContent>
						</Card>

					</div>
				}
			</div>
		);
	}

	return (
		<div className="flex justify-center">
			<Button onClick={() => signIn()} className="px-6 py-3">
				Sign in
			</Button>
		</div>
	);
}

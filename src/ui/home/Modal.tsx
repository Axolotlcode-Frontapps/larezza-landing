import { X } from "lucide-react";
import { Carrousel } from "@/ui/home/Carrousel";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/ui/shared/alert-dialog";
import { Button } from "../shared/button";

export function AlertDialogDemo() {
	return (
		<AlertDialog defaultOpen={true}>
			<AlertDialogContent className='fixed z-300 w-fit p-0 border-0'>
				<AlertDialogHeader className='relative'>
					<AlertDialogCancel asChild>
						<Button
							size='icon'
							variant='secondary'
							className='absolute top-5 right-5 z-100 text-base text-black opacity-40 cursor-pointer hover:opacity-100'
						>
							<X />
						</Button>
					</AlertDialogCancel>
				</AlertDialogHeader>

				<Carrousel />
			</AlertDialogContent>
		</AlertDialog>
	);
}

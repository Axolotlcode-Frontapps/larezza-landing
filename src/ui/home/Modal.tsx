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

export function AlertDialogDemo() {
	return (
		<AlertDialog defaultOpen={true}>
			<AlertDialogContent className='fixed z-300 md:max-w-lg lg:max-w-2xl'>
				<AlertDialogHeader>
					<AlertDialogTitle className='text-4xl font-bold text-right mt-4'>
						<AlertDialogCancel className='text-base text-white bg-primary md:p-5'>
							{" "}
							<X />{" "}
						</AlertDialogCancel>
					</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogDescription className='m-8 md:m-10'>
					<Carrousel />
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	);
}

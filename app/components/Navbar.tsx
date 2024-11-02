import { Menu, Minus } from "lucide-react";
import Link from "next/link";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./ui/drawer"
import { Button } from "./ui/Button";

export default function Navbar() {
    return <>
        <div className="flex justify-between py-5 px-10">
            <div className="flex gap-2 items-center">
                <div className="font-bold text-xl">Logo</div>
                <div className="font-thin">Easy traveling.</div>
            </div>

            <div className="lg:flex gap-5 md:hidden hidden">
                <Link href="#">
                    About us
                </Link>
                <Link href="#">
                    Blog
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
                <Link href="#">
                    Our Journeys
                </Link>
            </div>

            <div className="lg:hidden  block">
                <Drawer>
                    <DrawerTrigger> <Menu /></DrawerTrigger>
                    <DrawerContent>
                      
                        <DrawerHeader className="px-10">
                            <DrawerTitle>Navigator</DrawerTitle>
                            {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}

                            <div className="grid gap-3 mt-5">
                                <Link href="#" className="hover:text-yellow-300">
                                    About us
                                </Link>
                                <Link href="#" className="hover:text-yellow-300">
                                    Blog
                                </Link>
                                <Link href="#" className="hover:text-yellow-300">
                                    Contact
                                </Link>
                                <Link href="#" className="hover:text-yellow-300">
                                    Our Journeys
                                </Link>
                            </div>
                        </DrawerHeader>

                    </DrawerContent>
                </Drawer>
            </div>


        </div>
    </>
}
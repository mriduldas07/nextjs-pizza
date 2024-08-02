import { Phone, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="container py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>Pizza</span>
          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
              <SelectValue placeholder="Select Resturant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
              <SelectItem value="pizza-hut">Pizza hut</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center font-bold space-x-4">
            <li>
              <Link className="hover:text-primary" href={`/`}>
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href={`/`}>
                Orders
              </Link>
            </li>
          </ul>
          <div className="relative">
            <Link href={"/cart"} className="hover:text-primary">
              <ShoppingBasket />
            </Link>
            <span className="absolute -top-4 -right-5 h-6 w-6 flex justify-center items-center rounded-full bg-primary font-bold text-white">
              3
            </span>
          </div>
          <div className="flex items-center pl-12 gap-1">
            <Phone />
            <span>+8801571124907</span>
          </div>
          <div className="">
            <Button size={"sm"}>Logout</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

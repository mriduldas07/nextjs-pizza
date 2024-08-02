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
      <nav className="container py-5">
        <div className="flex items-center space-x-4">
          <span>Pizza</span>
          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
              <SelectValue placeholder="Select Resturant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
              <SelectItem value="pizza-hut">Pizza hut</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
    </header>
  );
}

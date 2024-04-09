import { Link } from "react-router-dom";
import { Bell, Package2, Users } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function HomeSidebar() {
  return (
    <div className="border-r bg-muted/40 w-[240px]">
      <div className="flex h-[calc(100%-53px)] max-h-screen flex-col gap-2">
        <div className="flex items-center border-b h-[60px] px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium px-4">
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-5 w-5" />
              친구
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

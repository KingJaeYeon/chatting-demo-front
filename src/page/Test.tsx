import {
  Badge,
  Bell,
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PlusCircle,
  Search,
  ShoppingCart,
  Upload,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";

export function Test() {
  return (
    <>
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
      <div>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/*  <div className="relative ml-auto flex-1 md:grow-0">*/}
          {/*    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />*/}
          {/*    <Input*/}
          {/*      type="search"*/}
          {/*      placeholder="Search..."*/}
          {/*      className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <DropdownMenu>*/}
          {/*    <DropdownMenuTrigger asChild>*/}
          {/*      <Button*/}
          {/*        variant="outline"*/}
          {/*        size="icon"*/}
          {/*        className="overflow-hidden rounded-full"*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          src="/placeholder-user.jpg"*/}
          {/*          width={36}*/}
          {/*          height={36}*/}
          {/*          alt="Avatar"*/}
          {/*          className="overflow-hidden rounded-full"*/}
          {/*        />*/}
          {/*      </Button>*/}
          {/*    </DropdownMenuTrigger>*/}
          {/*    <DropdownMenuContent align="end">*/}
          {/*      <DropdownMenuLabel>My Account</DropdownMenuLabel>*/}
          {/*      <DropdownMenuSeparator />*/}
          {/*      <DropdownMenuItem>Settings</DropdownMenuItem>*/}
          {/*      <DropdownMenuItem>Support</DropdownMenuItem>*/}
          {/*      <DropdownMenuSeparator />*/}
          {/*      <DropdownMenuItem>Logout</DropdownMenuItem>*/}
          {/*    </DropdownMenuContent>*/}
          {/*  </DropdownMenu>*/}
          {/*</header>*/}
          {/*<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">*/}
          {/*  <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">*/}
          {/*    <div className="flex items-center gap-4">*/}
          {/*      <Button variant="outline" size="icon" className="h-7 w-7">*/}
          {/*        <ChevronLeft className="h-4 w-4" />*/}
          {/*        <span className="sr-only">Back</span>*/}
          {/*      </Button>*/}
          {/*      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">*/}
          {/*        Pro Controller*/}
          {/*      </h1>*/}
          {/*      <div className="hidden items-center gap-2 md:ml-auto md:flex">*/}
          {/*        <Button variant="outline" size="sm">*/}
          {/*          Discard*/}
          {/*        </Button>*/}
          {/*        <Button size="sm">Save Product</Button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">*/}
          {/*      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">*/}
          {/*        <Card x-chunk="dashboard-07-chunk-0">*/}
          {/*          <CardHeader>*/}
          {/*            <CardTitle>Product Details</CardTitle>*/}
          {/*            <CardDescription>*/}
          {/*              Lipsum dolor sit amet, consectetur adipiscing elit*/}
          {/*            </CardDescription>*/}
          {/*          </CardHeader>*/}
          {/*          <CardContent>*/}
          {/*            <div className="grid gap-6">*/}
          {/*              <div className="grid gap-3">*/}
          {/*                <Label htmlFor="name">Name</Label>*/}
          {/*                <Input*/}
          {/*                  id="name"*/}
          {/*                  type="text"*/}
          {/*                  className="w-full"*/}
          {/*                  defaultValue="Gamer Gear Pro Controller"*/}
          {/*                />*/}
          {/*              </div>*/}
          {/*              <div className="grid gap-3">*/}
          {/*                <Label htmlFor="description">Description</Label>*/}
          {/*                <Textarea*/}
          {/*                  id="description"*/}
          {/*                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."*/}
          {/*                  className="min-h-32"*/}
          {/*                />*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*        <Card x-chunk="dashboard-07-chunk-1">*/}
          {/*          <CardHeader>*/}
          {/*            <CardTitle>Stock</CardTitle>*/}
          {/*            <CardDescription>*/}
          {/*              Lipsum dolor sit amet, consectetur adipiscing elit*/}
          {/*            </CardDescription>*/}
          {/*          </CardHeader>*/}
          {/*          <CardContent>*/}
          {/*            <ToggleGroup*/}
          {/*              type="single"*/}
          {/*              defaultValue="s"*/}
          {/*              variant="outline"*/}
          {/*            >*/}
          {/*              <ToggleGroupItem value="s">S</ToggleGroupItem>*/}
          {/*              <ToggleGroupItem value="m">M</ToggleGroupItem>*/}
          {/*              <ToggleGroupItem value="l">L</ToggleGroupItem>*/}
          {/*            </ToggleGroup>*/}
          {/*          </CardContent>*/}
          {/*          <CardFooter className="justify-center border-t p-4">*/}
          {/*            <Button size="sm" variant="ghost" className="gap-1">*/}
          {/*              <PlusCircle className="h-3.5 w-3.5" />*/}
          {/*              Add Variant*/}
          {/*            </Button>*/}
          {/*          </CardFooter>*/}
          {/*        </Card>*/}
          {/*        <Card x-chunk="dashboard-07-chunk-2">*/}
          {/*          <CardHeader>*/}
          {/*            <CardTitle>Product Category</CardTitle>*/}
          {/*          </CardHeader>*/}
          {/*          <CardContent>*/}
          {/*            <div className="grid gap-6 sm:grid-cols-3">*/}
          {/*              <div className="grid gap-3">*/}
          {/*                <Label htmlFor="category">Category</Label>*/}
          {/*                <Select>*/}
          {/*                  <SelectTrigger*/}
          {/*                    id="category"*/}
          {/*                    aria-label="Select category"*/}
          {/*                  >*/}
          {/*                    <SelectValue placeholder="Select category" />*/}
          {/*                  </SelectTrigger>*/}
          {/*                  <SelectContent>*/}
          {/*                    <SelectItem value="clothing">Clothing</SelectItem>*/}
          {/*                    <SelectItem value="electronics">*/}
          {/*                      Electronics*/}
          {/*                    </SelectItem>*/}
          {/*                    <SelectItem value="accessories">*/}
          {/*                      Accessories*/}
          {/*                    </SelectItem>*/}
          {/*                  </SelectContent>*/}
          {/*                </Select>*/}
          {/*              </div>*/}
          {/*              <div className="grid gap-3">*/}
          {/*                <Label htmlFor="subcategory">*/}
          {/*                  Subcategory (optional)*/}
          {/*                </Label>*/}
          {/*                <Select>*/}
          {/*                  <SelectTrigger*/}
          {/*                    id="subcategory"*/}
          {/*                    aria-label="Select subcategory"*/}
          {/*                  >*/}
          {/*                    <SelectValue placeholder="Select subcategory" />*/}
          {/*                  </SelectTrigger>*/}
          {/*                  <SelectContent>*/}
          {/*                    <SelectItem value="t-shirts">T-Shirts</SelectItem>*/}
          {/*                    <SelectItem value="hoodies">Hoodies</SelectItem>*/}
          {/*                    <SelectItem value="sweatshirts">*/}
          {/*                      Sweatshirts*/}
          {/*                    </SelectItem>*/}
          {/*                  </SelectContent>*/}
          {/*                </Select>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*      </div>*/}
          {/*      <div className="grid auto-rows-max items-start gap-4 lg:gap-8">*/}
          {/*        <Card x-chunk="dashboard-07-chunk-3">*/}
          {/*          <CardHeader>*/}
          {/*            <CardTitle>Product Status</CardTitle>*/}
          {/*          </CardHeader>*/}
          {/*          <CardContent>*/}
          {/*            <div className="grid gap-6">*/}
          {/*              <div className="grid gap-3">*/}
          {/*                <Label htmlFor="status">Status</Label>*/}
          {/*                <Select>*/}
          {/*                  <SelectTrigger id="status" aria-label="Select status">*/}
          {/*                    <SelectValue placeholder="Select status" />*/}
          {/*                  </SelectTrigger>*/}
          {/*                  <SelectContent>*/}
          {/*                    <SelectItem value="draft">Draft</SelectItem>*/}
          {/*                    <SelectItem value="published">Active</SelectItem>*/}
          {/*                    <SelectItem value="archived">Archived</SelectItem>*/}
          {/*                  </SelectContent>*/}
          {/*                </Select>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*        <Card*/}
          {/*          className="overflow-hidden"*/}
          {/*          x-chunk="dashboard-07-chunk-4"*/}
          {/*        >*/}
          {/*          <CardHeader>*/}
          {/*            <CardTitle>Product Images</CardTitle>*/}
          {/*            <CardDescription>*/}
          {/*              Lipsum dolor sit amet, consectetur adipiscing elit*/}
          {/*            </CardDescription>*/}
          {/*          </CardHeader>*/}
          {/*          <CardContent>*/}
          {/*            <div className="grid gap-2">*/}
          {/*              <img*/}
          {/*                alt="Product image"*/}
          {/*                className="aspect-square w-full rounded-md object-cover"*/}
          {/*                height="300"*/}
          {/*                src="/placeholder.svg"*/}
          {/*                width="300"*/}
          {/*              />*/}
          {/*              <div className="grid grid-cols-3 gap-2">*/}
          {/*                <button>*/}
          {/*                  <img*/}
          {/*                    alt="Product image"*/}
          {/*                    className="aspect-square w-full rounded-md object-cover"*/}
          {/*                    height="84"*/}
          {/*                    src="/placeholder.svg"*/}
          {/*                    width="84"*/}
          {/*                  />*/}
          {/*                </button>*/}
          {/*                <button>*/}
          {/*                  <img*/}
          {/*                    alt="Product image"*/}
          {/*                    className="aspect-square w-full rounded-md object-cover"*/}
          {/*                    height="84"*/}
          {/*                    src="/placeholder.svg"*/}
          {/*                    width="84"*/}
          {/*                  />*/}
          {/*                </button>*/}
          {/*                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">*/}
          {/*                  <Upload className="h-4 w-4 text-muted-foreground" />*/}
          {/*                  <span className="sr-only">Upload</span>*/}
          {/*                </button>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*        <Card x-chunk="dashboard-07-chunk-5">*/}
          {/*          <CardHeader>*/}
          {/*            <CardTitle>Archive Product</CardTitle>*/}
          {/*            <CardDescription>*/}
          {/*              Lipsum dolor sit amet, consectetur adipiscing elit.*/}
          {/*            </CardDescription>*/}
          {/*          </CardHeader>*/}
          {/*          <CardContent>*/}
          {/*            <div></div>*/}
          {/*            <Button size="sm" variant="secondary">*/}
          {/*              Archive Product*/}
          {/*            </Button>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="flex items-center justify-center gap-2 md:hidden">*/}
          {/*      <Button variant="outline" size="sm">*/}
          {/*        Discard*/}
          {/*      </Button>*/}
          {/*      <Button size="sm">Save Product</Button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</main>*/}
        </header>
      </div>
    </>
  );
}

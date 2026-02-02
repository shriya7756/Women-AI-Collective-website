"use client"

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },

  menu = [
    { title: "Home", url: "./LandingPage" },
    {
      title: "About",
      url: "./About",
      
    },
    {
      title: "Blog",
      url: "#",
      
    },
    {
      title: "Program",
      url: "./Program",
    },
    {
      title: "Contact",
      url: "#",
    },
  ],

}) => {
  return (
    <section className="sticky top-0 z-50 py-4 px-0 md:px-8 lg:px-16">
      <nav
        className=" 
          hidden lg:flex
          mx-auto 
          items-center justify-space-between 
          max-w-[1200px] h-[52px]
          pt-4  pb-4 pl-8 
          rounded-[99px]
          backdrop-blur-[10px]
          border border-[rgba(255,255,255,0.18)]
          shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_0_1px_10px_rgba(255,255,255,0.2)]
        "
      >
        <div className="flex items-center  w-full">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2 ">
            <Image
              src="/logo1.png"
              width={84}
              height={50}
              className=""
              alt={logo.alt}
            />
          </a>

          {/* Menu */}
          <div className="ml-auto justify-between text-[#ECF1F4]  w-[423px] h-[39px] bg-red ">
            <NavigationMenu>
              <NavigationMenuList className=" w-68 ">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between w-full
          rounded-[80px]
          bg-[rgba(236,241,244,0.03)]
          backdrop-blur-[10px]
          border border-[rgba(255,255,255,0.18)]
          shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_0_1px_10px_rgba(255,255,255,0.2)]"
        >
          {/* Logo */}
          <a href={logo.url} className="flex items-center">
            <Image 
              src="/logo1.png" 
              width={100}
              height={200}
              className=" px-6 " 
              alt={logo.alt} 
            />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-[#8C8CA1] hover:bg-[rgba(255,255,255,0.1)]"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              className="overflow-y-auto
                
                backdrop-blur-[10px]
                border-l border-[rgba(255,255,255,0.18)]"
            >
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <Image 
                      src="/logo1.png" 
                      width={60}
                      height={40}
                      alt={logo.alt} 
                    />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </section>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80 text-white">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-transparent hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors">
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline text-[#8C8CA1]">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold text-[#8C8CA1] hover:text-white transition-colors">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({
  item
}) => {
  return (
    <a
      className="hover:bg-transparent hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}>
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Navbar1;

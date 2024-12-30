import { Home, Users, Phone, Calendar, BarChart, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Team", url: "/teams", icon: Users },
  { title: "Calls", url: "/calls", icon: Phone },
  { title: "Analytics", url: "/analytics", icon: BarChart },
];

export default function AppSidebar() {
  return (
    <div className="bg-white">
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-green-500" style={{fontWeight:'bold', fontSize:'20px'}}>SalmanWap</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center gap-2 hover:bg-green-200">
                          <item.icon className="text-green-300" style={{fontSize:'10px'}} />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider></div>
  );
}

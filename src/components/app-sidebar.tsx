import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
  } from "@/components/ui/sidebar"
import { prisma } from "../../prisma/prisma";
import { getUser } from "@/auth/server";
import type { Note } from "../../prisma/app/generated/prisma/client";
  
 async function AppSidebar() {
    const user = await getUser();
    let notes: Note[] = [];
    if (user) {
        notes = await prisma.note.findMany({
          where: {
            authorId: user.id,
          },
          orderBy: {
            updatedAt: "desc",
          },
        });
      }
    return (
      <Sidebar>
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 mt-2 text-lg">
            {user ? (
              "Your Notes"
            ) : (
              <p>
                <Link href="/login" className="underline">
                  Login
                </Link>{" "}
                to see your notes
              </p>
            )}
          </SidebarGroupLabel>
          {user && <SidebarGroupContent notes={notes} />}
        </SidebarGroup>
        
        </SidebarContent>
      </Sidebar>
    )
  }

  export default AppSidebar;
  
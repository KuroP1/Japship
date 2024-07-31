import { Image, Group, Button, Box } from "@mantine/core";
import Link from "next/link";
import { NavLink } from "./Link";
import { useRouter } from "next/router";
import authService from "@/services/auth.service";

export function HeaderMegaMenu() {
  const router = useRouter();
  const isLoggedIn = authService.checkLogin();
  const user = authService.getCurrentUser();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleGotopm = () => {
    router.push("/profile");
  };

  const handleLogoutClick = () => {
    authService.logout();
    router.push("/");
  };

  return (
    <Box>
      <title>Japship</title>
      <header className="bg-[#ffffff]  border-[0px] lg:px-[4rem] h-20">
        <Group justify="space-between" h="100%">
          <Group w={140}>
            <Link href="/">
              <Image
                className="object-cover"
                src="../images/Logo.png"
                alt="home_icon"
                width={150}
              />
            </Link>
          </Group>

          <Group h="100%" gap={20} visibleFrom="sm">
            <NavLink content="Home" url="/" />

            <NavLink content="JapUp" url="/japUp" />

            <NavLink content="About Us" url="/aboutUs" />
          </Group>

          <Group visibleFrom="sm">
            {!isLoggedIn ? (
              <>
                <Button
                  variant="outline"
                  color="cyan"
                  radius="xl"
                  onClick={handleLoginClick}
                >
                  Log in
                </Button>
                <Button
                  variant="gradient"
                  radius="xl"
                  gradient={{ from: "blue", to: "cyan", deg: 90 }}
                  onClick={handleRegisterClick}
                >
                  Sign up
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  color="cyan"
                  radius="xl"
                  onClick={handleGotopm}
                >
                  {user.username}
                </Button>
                <Button
                  variant="outline"
                  color="cyan"
                  radius="xl"
                  onClick={handleLogoutClick}
                >
                  Logout
                </Button>
              </>
            )}
          </Group>
        </Group>
      </header>
    </Box>
  );
}

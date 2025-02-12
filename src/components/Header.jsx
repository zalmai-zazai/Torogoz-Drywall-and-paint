import { Button } from "./ui/button";

const Header = () => {
  //   const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img src="/logo.jpg" height={150} width={150} alt="" />

      <ul className=" hidden md:flex items-center gap-16">
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all text-gray-600">
          Home
        </li>
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all text-gray-600">
          About
        </li>
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all text-gray-600">
          Projects
        </li>

        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all text-gray-600">
          Testmonial
        </li>
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all text-gray-600">
          Contact Us
        </li>
      </ul>
      {/* <SignInButton mode="modal" forceRedirectUrl="/">
        <Button>Sign in</Button>
      </SignInButton> */}
      {/* {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button className="rounded-xl">Submit Listing</Button>
        </div>
      ) : (
        <Button className="rounded-xl">Submit Listing</Button>
      )} */}
      <Button>User</Button>
    </div>
  );
};

export default Header;

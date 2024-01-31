"use client";
import Avatar from "@/app/_components/Avatar/Avatar";
import Logo from "@/app/_components/Brand/Logo";
import Button from "@/app/_components/Buttons/Button";
import DropDown from "@/app/_components/DropDown/DropDown";
import Icon from "@/app/_components/Icons/Icon";
import useActive from "@/app/_hooks/useActive";
import React from "react";
import NavItems from "./NavItems";
import PhoneNumber from "@/app/_components/Utilities/PhoneNumber";
import { header } from "./headerStyle";

function Header() {
  const { isActive, handleActive } = useActive();

  const {
    base,
    headerContent,
    logo,
    menuWrapper,
    phoneNumberMobile,
    nav,
    navList,
    avatarWrapper,
    callWrapper,
    callMePhoneNumber,
    dropDown,
    toggleButton,
  } = header({ isActive: isActive });

  return (
    <>
      <header className={base()}>
        <div className={headerContent()}>
          <Logo color={"primary"} size={"lg"} className={logo()}>
            <span>a</span>
          </Logo>
          <div className={menuWrapper()}>
            <PhoneNumber
              number={"8 800 437-87-22"}
              className={phoneNumberMobile()}
            />
            <nav className={nav()}>
              <ul className={navList()}>
                <NavItems />
              </ul>
            </nav>
            <div className={avatarWrapper()}>
              <Avatar
                src={"/icons/avatar.svg"}
                width={50}
                height={50}
                alt={"mobile-avatar"}
              />
              <h6>Anthony Thomus</h6>
            </div>
          </div>
          <div className={callWrapper()}>
            <Button color={"red"} size={"sm"}>
              Call Me Back
            </Button>
            <PhoneNumber
              number={"8 800 437-87-22"}
              className={callMePhoneNumber()}
            />
          </div>
          <DropDown className={dropDown()}>
            <Avatar
              src={"/icons/avatar.svg"}
              width={50}
              height={50}
              alt={"avatar"}
            />
          </DropDown>
          <Button
            color={"red"}
            size={"sm"}
            className={toggleButton()}
            handleClick={handleActive}
          >
            {isActive ? (
              <Icon src="/icons/x.svg" alt="toggle-x" />
            ) : (
              <Icon src="/icons/bars.svg" alt="toggle-bars" />
            )}
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;

/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Image from "next/image";
import ForumIcon from "@mui/icons-material/Forum";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TranslateIcon from "@mui/icons-material/Translate";
import Link from "next/link";
import BookIcon from "@mui/icons-material/Book";
import { site } from "../utils/const";
import { useLocale } from "../hooks/useLocale";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const { t, locale } = useLocale();

  useEffect(() => {
    setReady(true);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  if (!ready) return <></>;

  return (
    <div id="section h-100">
      <div className="header1 po-relative">
        <Container className="w-100">
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="/" className="d-flex align-items-center">
              <Image src={"/logo.jpg"} alt="wrapkit" width="64" height="64" />
              <div className="mx-2">DeepEye</div>
            </NavbarBrand>
            {/* <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler> */}
            <Collapse
              isOpen={isOpen}
              navbar
              id="header1"
              className="d-flex justify-content-end"
            >
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem>
                  <NavLink
                    href={site.deepLog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DeepLog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/lab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DeepLab
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={site.deepMatching}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CmCn
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    {t.index.header.others}{" "}
                    <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem
                      href={site.community}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ForumIcon />
                      {t.index.header.community}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href={site.ec}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingCartIcon />
                      {t.index.header.shop}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href={site.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon />
                      Twitter
                    </DropdownItem>
                    <DropdownItem
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                      Instagram
                    </DropdownItem>
                    <DropdownItem
                      href={site.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MusicNoteIcon />
                      TikTok
                    </DropdownItem>
                    <DropdownItem
                      href={site.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon />
                      YouTube
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link
                    href={"/"}
                    locale={locale === "ja" ? "en" : "ja"}
                    passHref
                  >
                    <NavLink>
                      <TranslateIcon />
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;

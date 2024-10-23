import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import MetaData from "../MetaData";
const About = () => {
    const visitInstagram = () => {
        window.location = "http://instagram.com/kaushiiq_7x";
    };
    return (
        <div className="aboutSection">
            <MetaData title={"About Us"} />
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/dhyhb3uzs/image/upload/v1728108219/avatars/nk4mifoqtjokrj97nosr.png"
                            alt="Founder"
                        />
                        <Typography>Kaushik Tapaniya</Typography>
                        <Button onClick={visitInstagram} color="primary">
                            Visit Instagram
                        </Button>
                        <span>
                            This is a sample wesbite made by <a
                                href="https://github.com/Kaushik7984"
                                target="blank"
                            >@Kaushik7984.
                            </a>
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a href="https://www.linkedin.com/in/kaushik-tapaniya-624142239/" target="blank">
                            <LinkedIn className="SvgIcon" />
                        </a>

                        <a href="http://instagram.com/kaushiiq_7x" target="blank">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>

                        <a href="https://github.com/Kaushik7984" target="blank">
                            <GitHub className="githubSvgIcon" />
                        </a>

                        <a href="https://x.com/" target="blank">
                            <Twitter className="SvgIcon" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
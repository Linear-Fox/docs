import { useTheme } from "nextra-theme-docs";
import { useState, useEffect } from "react"; 
import Image from "next/image"; 
import Link from "next/link";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import urlcat from "urlcat";
import logo from "./public/lfx.png";

const useDark = () => {
    const { resolvedTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        setIsDark(resolvedTheme === "dark");
    }, [resolvedTheme]);
    return isDark;
};

const config = {
    project: {
        link: "https://github.com/Linear-Fox",
    },
    toc: {
        extraContent: () => {
            return (
                <>
                    <Link target="_blank" href="https://linearfox.com/">🦊 Linear Fox Website →</Link>
                    <Link target="_blank" href="https://discord.gg/fyJWS4yrM8">👨‍💻 Our Discord Server →</Link>
                </>
            );
        },
        float: true,
    },
    feedback: { content: "😊 ❓ Question? Give us feedback", lables: ["😊 Linear Fox Feedback →"] },
    navigation: { next: "👉 Next →", prev: "← Previous" },
    repository: 'https://github.com/linear-fox',
    docsRepository: 'https://github.com/linear-fox/docs',
    darkMode: true,
    darkModeToggle: true,
    darkModeToggleStyle: {
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 999,
    },
    darkModeToggleDark: {
        content: "🌙",
        title: "Switch to light mode",
    },
    darkModeToggleLight: {
        content: "🌞",
        title: "Switch to dark mode",
    },
    footer: {
        poweredBy: {
            content: "Powered by",
            link: "https://linearfox.com/",
            image: logo,
        },
        links: [
            {
                title: "🦊 Linear Fox",
                links: [
                    {
                        title: "🦊 Linear Fox Website",
                        link: "https://linearfox.com/",
                    },
                    {
                        title: "👨‍💻 Our Discord Server",
                        link: "https://discord.gg/fyJWS4yrM8",
                    },
                ],
            },
        ],
    },
    editThisPage: false,
    logo: () => {
        const isDark = useDark();
        return (
            <>
                <Image
                    src={isDark ? "/LinearFoxP.png" : "/LinearFoxP.png"}
                    alt="Linear Fox Logo"
                    width={70}
                    height={70}
                />
                <span className="ml-2 text-xl font-bold">Linear Fox Docs</span>
            </>
        );
    },
    useNextSeoProps() {
        const { route } = useRouter();
        if (route !== "/") {
          return {
            titleTemplate: "%s – Linear Fox Docs",
          };
        }
        return { titleTemplate: "Linear Fox Docs" };
    },
    head: () => {
        const { asPath } = useRouter(); 
        const { route } = useRouter();
        const { title } = useConfig();
        return (
            <>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Linear Fox Documentation" />
                <meta name="og:title" content={title} />
                <meta name="og:type" content="website" />
                <meta name="og:url" content={urlcat("https://docs.linearfox.com", asPath)} />
                <meta name="og:site_name" content="Linear Fox" />
                <link rel="icon" href="/512.png" />
                <link rel="apple-touch-icon" href="/lfx.png" /> 
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/lfx.png" color="#000000" />
                {route === "/" ? (
                <meta property="twitter:title" content="Linear Fox Docs" />
                ) : (
                <meta property="twitter:title" content={`${title} - Linear Fox Docs`} />
                )}
            </>
        );
    },
} 

export default config;
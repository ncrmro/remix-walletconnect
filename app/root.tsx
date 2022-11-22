import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "./connectors/walletConnect";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const connectors: [WalletConnect, Web3ReactHooks][] = [
  [walletConnect, walletConnectHooks],
];
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Web3ReactProvider connectors={connectors}>
          <Outlet />
        </Web3ReactProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

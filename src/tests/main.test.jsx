import { render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import Main from "../components/Wallet/components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useWalletQuery } from "../requests/useWalletQuery";

const mockedUseWalletQuery = useWalletQuery;

vitest.mock("../requests/useWalletQuery");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function wrapper({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

describe("Main component", () => {
  it("should render balance", () => {
    mockedUseWalletQuery.mockImplementation(() => ({
      isPending: false,
      isError: false,
      data: {
        status: 200,
        data: {
          balance: 100,
        },
      },
    }));
    render(<Main />, { wrapper });
    expect(screen.getByText(/USD\s100/i)).toBeInTheDocument();
  });

  it('renders "Fetching..." when data is pending', () => {
    mockedUseWalletQuery.mockImplementation(() => ({
      isPending: true,
      isError: false,
      data: null,
    }));

    const { getByText } = render(<Main />, { wrapper });
    expect(getByText("Fetching...")).toBeInTheDocument();
  });

  it('renders "Unable to fetch" when there is an error', () => {
    mockedUseWalletQuery.mockImplementation(() => ({
      isPending: false,
      isError: true,
      data: null,
    }));

    const { getByText } = render(<Main />, { wrapper });
    expect(getByText("Unable to fetch")).toBeInTheDocument();
  });
});

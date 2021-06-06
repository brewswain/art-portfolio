import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimateSharedLayout } from "framer-motion";

import "../styles/globals.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
   return (
      <QueryClientProvider client={queryClient}>
         <AnimateSharedLayout>
            <Component {...pageProps} />
         </AnimateSharedLayout>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   );
}

export default MyApp;

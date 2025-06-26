import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import { RouterProvider } from "react-router-dom";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { router } from "./Route/Route.tsx";
import { Provider } from "react-redux";
import store from "./redux/Store/store.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppWrapper>
          <RouterProvider router={router} />
          <Toaster richColors position="top-right" />
        </AppWrapper>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

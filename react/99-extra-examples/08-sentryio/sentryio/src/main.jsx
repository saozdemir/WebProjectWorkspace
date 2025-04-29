import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";
import {ErrorBoundary} from "@sentry/react";

Sentry.init({
    dsn: "https://6d8af704cf80f6dd3950f01be9770763@o4509184650379264.ingest.de.sentry.io/4509197181911120"
});

createRoot(document.getElementById('root')).render(
  <ErrorBoundary fallback={<p>Bir hata oluştu!</p>}>
      <StrictMode>
          <App />
      </StrictMode>
  </ErrorBoundary>

)

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// fallback ui
import { ErrorBoundary } from 'react-error-boundary';
// router page
import Home from './pages/Home';
import Signin from './pages/Signin';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';

import NotFound from './pages/NotFound';
import Error from './pages/Error';
import ScrollToTop from './hooks/useScrollToTop';

function Router() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/add' element={<Add />} />
          <Route path='/book/:id' element={<Detail />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default Router;

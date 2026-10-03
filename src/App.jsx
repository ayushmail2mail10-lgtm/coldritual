import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context Providers
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { OrderProvider } from './context/OrderContext';

// Navigation & Utilities
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import CategoryPage from './pages/CategoryPage';
import NewDrops from './pages/NewDrops';
import Trending from './pages/Trending';
import Sale from './pages/Sale';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Orders from './pages/Orders';
import LookbookPage from './pages/LookbookPage';
import BuildYourFitPage from './pages/BuildYourFitPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AdminRoute from './components/admin/AdminRoute';
import AdminOrders from './pages/admin/AdminOrders';

export default function App() {
  return (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <div className="flex flex-col min-h-screen bg-deepBlack text-offWhite selection:bg-icyBlue selection:text-deepBlack">
                  <ScrollToTop />
                  <Navbar />
                  <main className="flex-1">
                    <Routes>
                      {/* Main */}
                      <Route path="/" element={<Home />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/new-drops" element={<NewDrops />} />
                      <Route path="/trending" element={<Trending />} />
                      <Route path="/sale" element={<Sale />} />

                      {/* Categories */}
                      <Route path="/category/:slug" element={<CategoryPage />} />

                      {/* Shopping */}
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/checkout" element={<Checkout />} />

                      {/* Customer */}
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/account" element={<Account />} />
                      <Route path="/orders" element={<Orders />} />

                      {/* Additional */}
                      <Route path="/lookbook" element={<LookbookPage />} />
                      <Route path="/build-your-fit" element={<BuildYourFitPage />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />

                      {/* Admin Section (Protected) */}
                      <Route path="/admin" element={<AdminRoute><AdminOrders /></AdminRoute>} />
                      <Route path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />

                      {/* 404 */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  );
}

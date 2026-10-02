import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useOrders } from '../../context/OrderContext';
import { useAuth } from '../../context/AuthContext';
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Clock,
  CheckCircle2,
  Truck,
  AlertCircle,
  XCircle,
  RotateCcw,
  Search,
  Filter,
  ArrowUpDown,
  Eye,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  Trash2,
  RefreshCw,
  CreditCard
} from 'lucide-react';

const ORDER_STATUSES = [
  'Pending',
  'Confirmed',
  'Processing',
  'Shipped',
  'Out for Delivery',
  'Delivered',
  'Cancelled',
  'Returned',
  'Refunded',
];

const PAYMENT_STATUSES = ['Paid', 'Pending', 'Refunded'];

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    case 'Confirmed':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    case 'Processing':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    case 'Shipped':
      return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
    case 'Out for Delivery':
      return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
    case 'Delivered':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'Cancelled':
      return 'bg-red-500/10 text-red-400 border-red-500/30';
    case 'Returned':
      return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
    case 'Refunded':
      return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30';
    default:
      return 'bg-white/10 text-offWhite border-white/20';
  }
};

const getPaymentBadgeClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'paid':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'pending':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    case 'refunded':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    default:
      return 'bg-white/10 text-lightGray border-white/20';
  }
};

export default function AdminOrders() {
  const { orders, updateOrderStatus, updatePaymentStatus, deleteOrder } = useOrders();
  const { user, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('ALL');
  const [selectedPaymentFilter, setSelectedPaymentFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, amount-high, amount-low
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Metric calculations
  const metrics = useMemo(() => {
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(o => ['Pending', 'Confirmed'].includes(o.status)).length;
    const processingOrders = orders.filter(o => ['Processing', 'Shipped', 'Out for Delivery'].includes(o.status)).length;
    const deliveredOrders = orders.filter(o => o.status === 'Delivered').length;
    
    // Total sales excluding Cancelled and Refunded orders
    const totalSales = orders
      .filter(o => !['Cancelled', 'Refunded'].includes(o.status))
      .reduce((sum, o) => sum + (Number(o.total) || 0), 0);

    return {
      totalOrders,
      pendingOrders,
      processingOrders,
      deliveredOrders,
      totalSales,
    };
  }, [orders]);

  // Filtered & Sorted orders list
  const filteredOrders = useMemo(() => {
    return orders
      .filter(order => {
        // Status Filter
        if (selectedStatusFilter !== 'ALL' && order.status !== selectedStatusFilter) {
          return false;
        }

        // Payment Filter
        if (selectedPaymentFilter !== 'ALL' && (order.paymentStatus || '').toLowerCase() !== selectedPaymentFilter.toLowerCase()) {
          return false;
        }

        // Search Query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchId = (order.orderId || '').toLowerCase().includes(q);
          const matchName = (order.customerName || order.shippingAddress?.name || '').toLowerCase().includes(q);
          const matchEmail = (order.customerEmail || '').toLowerCase().includes(q);
          const matchPhone = (order.customerPhone || order.shippingAddress?.phone || '').toLowerCase().includes(q);
          const matchCity = (order.shippingAddress?.city || '').toLowerCase().includes(q);
          const matchProduct = (order.items || []).some(item => (item.name || '').toLowerCase().includes(q));

          return matchId || matchName || matchEmail || matchPhone || matchCity || matchProduct;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'amount-high') {
          return (Number(b.total) || 0) - (Number(a.total) || 0);
        }
        if (sortBy === 'amount-low') {
          return (Number(a.total) || 0) - (Number(b.total) || 0);
        }
        if (sortBy === 'oldest') {
          return new Date(a.date || 0) - new Date(b.date || 0);
        }
        // default newest
        return new Date(b.date || 0) - new Date(a.date || 0);
      });
  }, [orders, selectedStatusFilter, selectedPaymentFilter, searchQuery, sortBy]);

  // Keep selectedOrder in sync with orders state when updated
  const activeOrderDetails = useMemo(() => {
    if (!selectedOrder) return null;
    return orders.find(o => o.orderId === selectedOrder.orderId) || selectedOrder;
  }, [selectedOrder, orders]);

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite pb-24">
      {/* Admin Top Banner / Breadcrumb */}
      <div className="bg-softBlack border-b border-white/10 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-icyBlue/10 border border-icyBlue/30 text-icyBlue px-2.5 py-1 rounded text-xs font-mono font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              ARCHIVE CONTROLLER
            </div>
            <span className="text-white/20">/</span>
            <span className="font-mono text-xs text-lightGray uppercase tracking-widest font-semibold">
              ORDER FULFILLMENT CONSOLE
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-lightGray/70 hidden sm:inline">
              OPERATOR: <span className="text-offWhite font-semibold">{user?.email || 'admin@coldritual.in'}</span>
            </span>
            <Link
              to="/orders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-icyBlue hover:underline"
            >
              Customer View
              <ExternalLink className="w-3 h-3" />
            </Link>
            <button
              onClick={logout}
              className="text-red-400/80 hover:text-red-400 transition-colors uppercase"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Page Title & Subtitle */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-offWhite uppercase">
            ORDERS MANAGEMENT
          </h1>
          <p className="text-sm font-mono text-lightGray/70 mt-1">
            Real-time pan-India dispatch queue, live status mutation, and transaction telemetry.
          </p>
        </div>

        {/* 5 Summary KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
          {/* Card 1: Total Orders */}
          <div className="bg-softBlack border border-white/10 rounded-sm p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-lightGray/70 tracking-widest uppercase font-semibold">
                TOTAL ORDERS
              </span>
              <ShoppingBag className="w-4 h-4 text-icyBlue/80" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-offWhite">
              {metrics.totalOrders}
            </div>
            <div className="text-[10px] font-mono text-lightGray/50 mt-1">
              Active archive registry
            </div>
          </div>

          {/* Card 2: Pending Orders */}
          <div className="bg-softBlack border border-white/10 rounded-sm p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-amber-400/90 tracking-widest uppercase font-semibold">
                PENDING ORDERS
              </span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-amber-400">
              {metrics.pendingOrders}
            </div>
            <div className="text-[10px] font-mono text-lightGray/50 mt-1">
              Awaiting confirmation
            </div>
          </div>

          {/* Card 3: Processing */}
          <div className="bg-softBlack border border-white/10 rounded-sm p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-purple-400/90 tracking-widest uppercase font-semibold">
                PROCESSING
              </span>
              <Truck className="w-4 h-4 text-purple-400" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-purple-400">
              {metrics.processingOrders}
            </div>
            <div className="text-[10px] font-mono text-lightGray/50 mt-1">
              In transit / Out for delivery
            </div>
          </div>

          {/* Card 4: Delivered */}
          <div className="bg-softBlack border border-white/10 rounded-sm p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-emerald-400/90 tracking-widest uppercase font-semibold">
                DELIVERED
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400">
              {metrics.deliveredOrders}
            </div>
            <div className="text-[10px] font-mono text-lightGray/50 mt-1">
              Successfully fulfilled
            </div>
          </div>

          {/* Card 5: Total Sales (₹ INR) */}
          <div className="bg-softBlack border border-icyBlue/30 rounded-sm p-4 col-span-2 sm:col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-softBlack to-icyBlue/5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-icyBlue tracking-widest uppercase font-semibold">
                TOTAL SALES (INR)
              </span>
              <TrendingUp className="w-4 h-4 text-icyBlue" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-icyBlue">
              ₹{metrics.totalSales.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] font-mono text-lightGray/60 mt-1">
              Net realized gross
            </div>
          </div>
        </div>

        {/* Filter, Search & Controls Bar */}
        <div className="bg-softBlack border border-white/10 rounded-sm p-4 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="relative md:col-span-5">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-lightGray/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Order ID, Customer Name, Email, Phone, City..."
                className="w-full bg-deepBlack border border-white/10 rounded-sm pl-9 pr-8 py-2.5 text-xs font-mono text-offWhite placeholder:text-lightGray/40 focus:border-icyBlue focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-lightGray/50 hover:text-offWhite"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value)}
                  className="w-full appearance-none bg-deepBlack border border-white/10 rounded-sm px-3 py-2.5 text-xs font-mono text-offWhite focus:border-icyBlue focus:outline-none cursor-pointer pr-8"
                >
                  <option value="ALL">Status: All Statuses ({orders.length})</option>
                  {ORDER_STATUSES.map(st => {
                    const count = orders.filter(o => o.status === st).length;
                    return (
                      <option key={st} value={st}>
                        {st} ({count})
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-lightGray/50" />
              </div>
            </div>

            {/* Payment Filter */}
            <div className="md:col-span-2">
              <div className="relative">
                <select
                  value={selectedPaymentFilter}
                  onChange={(e) => setSelectedPaymentFilter(e.target.value)}
                  className="w-full appearance-none bg-deepBlack border border-white/10 rounded-sm px-3 py-2.5 text-xs font-mono text-offWhite focus:border-icyBlue focus:outline-none cursor-pointer pr-8"
                >
                  <option value="ALL">Payment: All</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Refunded">Refunded</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-lightGray/50" />
              </div>
            </div>

            {/* Sort Filter */}
            <div className="md:col-span-2">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-deepBlack border border-white/10 rounded-sm px-3 py-2.5 text-xs font-mono text-offWhite focus:border-icyBlue focus:outline-none cursor-pointer pr-8"
                >
                  <option value="newest">Sort: Newest First</option>
                  <option value="oldest">Sort: Oldest First</option>
                  <option value="amount-high">Amount: High → Low</option>
                  <option value="amount-low">Amount: Low → High</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-lightGray/50" />
              </div>
            </div>
          </div>

          {/* Quick status pills for rapid toggle */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none text-[11px] font-mono">
            <span className="text-lightGray/50 uppercase tracking-widest text-[10px] mr-1 hidden sm:inline">
              Quick Filter:
            </span>
            <button
              onClick={() => setSelectedStatusFilter('ALL')}
              className={`px-2.5 py-1 rounded-sm border whitespace-nowrap transition-colors ${
                selectedStatusFilter === 'ALL'
                  ? 'bg-offWhite text-deepBlack border-offWhite font-semibold'
                  : 'bg-white/5 text-lightGray/80 border-white/10 hover:border-white/30'
              }`}
            >
              All ({orders.length})
            </button>
            {ORDER_STATUSES.map(st => {
              const count = orders.filter(o => o.status === st).length;
              if (count === 0 && selectedStatusFilter !== st) return null;
              const isActive = selectedStatusFilter === st;
              return (
                <button
                  key={st}
                  onClick={() => setSelectedStatusFilter(st)}
                  className={`px-2.5 py-1 rounded-sm border whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-icyBlue text-deepBlack border-icyBlue font-semibold'
                      : 'bg-white/5 text-lightGray/80 border-white/10 hover:border-white/30'
                  }`}
                >
                  {st} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between mb-3 px-1 text-xs font-mono text-lightGray/70">
          <span>
            SHOWING <strong className="text-offWhite">{filteredOrders.length}</strong> OF {orders.length} ORDERS
          </span>
          {(searchQuery || selectedStatusFilter !== 'ALL' || selectedPaymentFilter !== 'ALL' || sortBy !== 'newest') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStatusFilter('ALL');
                setSelectedPaymentFilter('ALL');
                setSortBy('newest');
              }}
              className="text-icyBlue hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Filters
            </button>
          )}
        </div>

        {/* Orders Table Container */}
        <div className="bg-softBlack border border-white/10 rounded-sm overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/10 text-lightGray/70 text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-semibold">Order ID</th>
                  <th className="py-3.5 px-4 font-semibold">Customer</th>
                  <th className="py-3.5 px-4 font-semibold">Date</th>
                  <th className="py-3.5 px-4 font-semibold">Products</th>
                  <th className="py-3.5 px-3 font-semibold text-center">Qty</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Total (₹)</th>
                  <th className="py-3.5 px-4 font-semibold">Payment</th>
                  <th className="py-3.5 px-4 font-semibold">Order Status</th>
                  <th className="py-3.5 px-4 font-semibold">Shipping To</th>
                  <th className="py-3.5 px-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-16 text-center text-lightGray/50 font-mono">
                      <ShoppingBag className="w-10 h-10 mx-auto mb-3 opacity-30" />
                      <p className="text-sm text-offWhite uppercase">No Orders Found</p>
                      <p className="text-xs text-lightGray/40 mt-1">
                        Try modifying search query or filter parameters.
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => {
                    const totalQty = (order.items || []).reduce((acc, item) => acc + (item.quantity || 1), 0);
                    const firstItem = order.items?.[0];
                    const moreItemsCount = (order.items?.length || 0) - 1;

                    return (
                      <tr
                        key={order.orderId}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        {/* Order ID */}
                        <td className="py-3.5 px-4 font-semibold text-offWhite whitespace-nowrap">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="text-icyBlue hover:underline text-left font-bold"
                          >
                            {order.orderId}
                          </button>
                        </td>

                        {/* Customer Info */}
                        <td className="py-3.5 px-4 min-w-[160px]">
                          <div className="font-semibold text-offWhite truncate max-w-[160px]">
                            {order.customerName || order.shippingAddress?.name || 'Customer'}
                          </div>
                          <div className="text-[11px] text-lightGray/60 truncate max-w-[160px]">
                            {order.customerEmail || 'No email'}
                          </div>
                          <div className="text-[10px] text-lightGray/40 truncate max-w-[160px]">
                            {order.customerPhone || order.shippingAddress?.phone || 'No phone'}
                          </div>
                        </td>

                        {/* Date */}
                        <td className="py-3.5 px-4 text-lightGray/80 whitespace-nowrap text-[11px]">
                          {order.date}
                        </td>

                        {/* Products Preview */}
                        <td className="py-3.5 px-4 min-w-[200px]">
                          <div className="flex items-center gap-2">
                            {firstItem?.image ? (
                              <img
                                src={firstItem.image}
                                alt={firstItem.name}
                                className="w-8 h-10 object-cover rounded-sm border border-white/10 shrink-0"
                              />
                            ) : (
                              <div className="w-8 h-10 bg-white/5 rounded-sm border border-white/10 flex items-center justify-center shrink-0">
                                <Package className="w-3.5 h-3.5 text-lightGray/40" />
                              </div>
                            )}
                            <div className="truncate max-w-[150px]">
                              <p className="text-offWhite font-semibold truncate text-[11px]">
                                {firstItem?.name || 'Item'}
                              </p>
                              <p className="text-[10px] text-lightGray/50 truncate">
                                {firstItem?.size ? `Size: ${firstItem.size}` : ''}
                                {moreItemsCount > 0 ? ` +${moreItemsCount} more` : ''}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Quantity */}
                        <td className="py-3.5 px-3 text-center text-offWhite font-semibold whitespace-nowrap">
                          {totalQty}
                        </td>

                        {/* Total Amount (INR) */}
                        <td className="py-3.5 px-4 text-right font-bold text-offWhite whitespace-nowrap text-sm">
                          ₹{Number(order.total || 0).toLocaleString('en-IN')}
                        </td>

                        {/* Payment Method & Status */}
                        <td className="py-3.5 px-4 min-w-[130px] whitespace-nowrap">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold border mb-1 ${getPaymentBadgeClass(
                              order.paymentStatus || 'Paid'
                            )}`}
                          >
                            {order.paymentStatus || 'Paid'}
                          </span>
                          <div className="text-[10px] text-lightGray/60 truncate max-w-[120px]">
                            {order.paymentMethod || 'UPI'}
                          </div>
                        </td>

                        {/* Order Status (Interactive Quick Select) */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="relative inline-block w-full min-w-[140px]">
                            <select
                              value={order.status}
                              onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}
                              className={`w-full appearance-none px-2.5 py-1 text-[11px] font-mono font-semibold rounded-sm border cursor-pointer focus:outline-none focus:ring-1 focus:ring-icyBlue ${getStatusBadgeClass(
                                order.status
                              )}`}
                            >
                              {ORDER_STATUSES.map(st => (
                                <option key={st} value={st} className="bg-deepBlack text-offWhite font-mono">
                                  {st}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                          </div>
                        </td>

                        {/* Shipping Address */}
                        <td className="py-3.5 px-4 min-w-[140px] text-[11px]">
                          <div className="text-offWhite font-medium truncate max-w-[140px]">
                            {order.shippingAddress?.city || 'India'}
                            {order.shippingAddress?.state ? `, ${order.shippingAddress.state}` : ''}
                          </div>
                          <div className="text-[10px] text-lightGray/50 font-mono truncate max-w-[140px]">
                            PIN: {order.shippingAddress?.pincode || '400001'}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              title="View Order Details"
                              className="p-1.5 bg-white/5 hover:bg-white/10 text-offWhite hover:text-icyBlue rounded border border-white/10 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Permanently remove Order ${order.orderId} from archive?`)) {
                                  deleteOrder(order.orderId);
                                }
                              }}
                              title="Remove Order"
                              className="p-1.5 bg-white/5 hover:bg-red-500/20 text-lightGray hover:text-red-400 rounded border border-white/10 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Details Slide-over / Modal */}
      {activeOrderDetails && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div
            className="w-full max-w-2xl bg-softBlack border-l border-white/10 h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-200"
          >
            {/* Top Bar inside modal */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="font-mono text-[10px] text-icyBlue uppercase tracking-widest font-semibold block">
                    ARCHIVE RECORD
                  </span>
                  <h2 className="font-serif text-2xl font-bold uppercase text-offWhite flex items-center gap-3">
                    {activeOrderDetails.orderId}
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border uppercase ${getStatusBadgeClass(
                        activeOrderDetails.status
                      )}`}
                    >
                      {activeOrderDetails.status}
                    </span>
                  </h2>
                  <span className="font-mono text-xs text-lightGray/60 mt-1 block">
                    Logged on {activeOrderDetails.date}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedOrder(null)}
                  className="p-2 text-lightGray hover:text-offWhite bg-white/5 hover:bg-white/10 rounded-sm border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Controller Box */}
              <div className="bg-deepBlack border border-white/10 rounded-sm p-4 mb-6">
                <label className="block font-mono text-xs uppercase tracking-wider text-lightGray/70 font-semibold mb-2">
                  Update Fulfillment Status
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                  {ORDER_STATUSES.map(st => {
                    const isCurrent = activeOrderDetails.status === st;
                    return (
                      <button
                        key={st}
                        onClick={() => updateOrderStatus(activeOrderDetails.orderId, st)}
                        className={`text-left text-[11px] font-mono p-2 rounded-sm border transition-all ${
                          isCurrent
                            ? 'bg-icyBlue text-deepBlack font-bold border-icyBlue shadow'
                            : 'bg-white/5 text-lightGray/80 border-white/10 hover:border-white/30 hover:text-offWhite'
                        }`}
                      >
                        {isCurrent && '✓ '}
                        {st}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Customer & Shipping Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Customer Details */}
                <div className="bg-deepBlack/80 border border-white/10 rounded-sm p-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-icyBlue uppercase font-semibold text-[11px] mb-3">
                    <UserIcon className="w-3.5 h-3.5" />
                    Customer Details
                  </div>
                  <div className="space-y-2 text-lightGray">
                    <div>
                      <span className="text-lightGray/40 text-[10px] block">NAME</span>
                      <strong className="text-offWhite text-sm">
                        {activeOrderDetails.customerName || activeOrderDetails.shippingAddress?.name || 'Customer'}
                      </strong>
                    </div>
                    <div>
                      <span className="text-lightGray/40 text-[10px] block">EMAIL</span>
                      <a
                        href={`mailto:${activeOrderDetails.customerEmail}`}
                        className="text-offWhite hover:text-icyBlue truncate block"
                      >
                        {activeOrderDetails.customerEmail || 'No email provided'}
                      </a>
                    </div>
                    <div>
                      <span className="text-lightGray/40 text-[10px] block">PHONE</span>
                      <a
                        href={`tel:${activeOrderDetails.customerPhone || activeOrderDetails.shippingAddress?.phone}`}
                        className="text-offWhite hover:text-icyBlue block"
                      >
                        {activeOrderDetails.customerPhone || activeOrderDetails.shippingAddress?.phone || 'No phone'}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Shipping Destination */}
                <div className="bg-deepBlack/80 border border-white/10 rounded-sm p-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-icyBlue uppercase font-semibold text-[11px] mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    Shipping Destination
                  </div>
                  <div className="space-y-1.5 text-lightGray text-[11px] leading-relaxed">
                    <div className="text-offWhite font-semibold">
                      {activeOrderDetails.shippingAddress?.name || activeOrderDetails.customerName}
                    </div>
                    <div>{activeOrderDetails.shippingAddress?.street}</div>
                    {activeOrderDetails.shippingAddress?.landmark && (
                      <div className="text-lightGray/60">
                        Landmark: {activeOrderDetails.shippingAddress.landmark}
                      </div>
                    )}
                    <div className="text-offWhite">
                      {activeOrderDetails.shippingAddress?.city}, {activeOrderDetails.shippingAddress?.state} —{' '}
                      <span className="text-icyBlue font-bold">{activeOrderDetails.shippingAddress?.pincode}</span>
                    </div>
                    <div className="text-[10px] text-lightGray/40 pt-1">
                      Tracking: {activeOrderDetails.trackingNumber || 'EXP-IN-332901'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Ordered */}
              <div className="mb-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-lightGray/70 font-semibold mb-3 flex items-center justify-between">
                  <span>Ordered Items ({activeOrderDetails.items?.length || 0})</span>
                  <span className="text-[11px] text-lightGray/50">
                    Total Units:{' '}
                    {activeOrderDetails.items?.reduce((sum, item) => sum + (item.quantity || 1), 0)}
                  </span>
                </h3>

                <div className="space-y-3 bg-deepBlack/80 border border-white/10 rounded-sm p-4">
                  {(activeOrderDetails.items || []).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-4 pb-3 border-b border-white/5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-14 object-cover rounded-sm border border-white/10 shrink-0"
                        />
                        <div>
                          <h4 className="font-semibold text-offWhite text-xs uppercase">{item.name}</h4>
                          <p className="text-[10px] font-mono text-lightGray/60">{item.subtitle}</p>
                          <div className="text-[10px] font-mono text-lightGray/80 mt-1 flex items-center gap-2">
                            <span className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                              Size: {item.size}
                            </span>
                            <span className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                              Qty: {item.quantity}
                            </span>
                            {item.color && <span>{item.color}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="text-right font-mono">
                        <div className="text-xs font-bold text-offWhite">
                          ₹{((item.price || 0) * (item.quantity || 1)).toLocaleString('en-IN')}
                        </div>
                        <div className="text-[10px] text-lightGray/50">
                          ₹{(item.price || 0).toLocaleString('en-IN')} each
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment & Financial Ledger */}
              <div className="bg-deepBlack/90 border border-white/10 rounded-sm p-4 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2 text-offWhite font-semibold">
                    <CreditCard className="w-4 h-4 text-icyBlue" />
                    <span>Payment Ledger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-lightGray/60">Status:</span>
                    <select
                      value={activeOrderDetails.paymentStatus || 'Paid'}
                      onChange={(e) => updatePaymentStatus(activeOrderDetails.orderId, e.target.value)}
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border bg-deepBlack cursor-pointer ${getPaymentBadgeClass(
                        activeOrderDetails.paymentStatus || 'Paid'
                      )}`}
                    >
                      {PAYMENT_STATUSES.map(p => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-lightGray text-[11px]">
                  <div className="flex justify-between">
                    <span>Payment Gateway:</span>
                    <span className="text-offWhite">{activeOrderDetails.paymentMethod || 'UPI'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-offWhite">
                      ₹{Number(activeOrderDetails.subtotal || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                  {activeOrderDetails.discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Promo Discount:</span>
                      <span>-₹{Number(activeOrderDetails.discount).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping Charges:</span>
                    <span className="text-offWhite">
                      {activeOrderDetails.shippingFee === 0 ? 'FREE (Pan-India)' : `₹${activeOrderDetails.shippingFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10 text-offWhite font-bold text-sm">
                    <span>Final Invoiced Amount:</span>
                    <span className="text-icyBlue">
                      ₹{Number(activeOrderDetails.total || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 font-mono text-xs">
              <button
                onClick={() => {
                  if (window.confirm(`Delete Order ${activeOrderDetails.orderId}? This cannot be undone.`)) {
                    deleteOrder(activeOrderDetails.orderId);
                    setSelectedOrder(null);
                  }
                }}
                className="text-red-400 hover:text-red-300 py-2 px-3 rounded hover:bg-red-500/10 transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete Archive
              </button>

              <button
                onClick={() => setSelectedOrder(null)}
                className="bg-offWhite text-deepBlack font-semibold px-5 py-2 rounded-sm hover:bg-white transition-colors uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

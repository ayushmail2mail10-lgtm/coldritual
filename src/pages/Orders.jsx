import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle2, Clock, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { formatCurrency } from '../utils/formatCurrency';
import { businessConfig, getWhatsAppLink } from '../config/businessConfig';

const STATUS_STAGES = ['Confirmed', 'Processing', 'Shipped', 'Delivered'];

export default function Orders() {
  const { orders } = useOrders();

  const getStageIndex = (status) => {
    const idx = STATUS_STAGES.indexOf(status);
    return idx === -1 ? 0 : idx;
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-deepBlack text-offWhite">
        <Package className="w-16 h-16 text-lightGray/20 mb-4 stroke-1" />
        <h1 className="font-display font-black text-2xl uppercase tracking-wider mb-2">
          NO ORDERS ARCHIVED
        </h1>
        <p className="font-mono text-xs text-lightGray/70 max-w-sm mb-6">
          You haven't placed any ritual streetwear orders yet. All shipments with live tracking will appear here.
        </p>
        <Link
          to="/shop"
          className="bg-offWhite text-deepBlack px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest"
        >
          Explore Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-6 mb-10 border-b border-white/10">
          <span className="font-mono text-xs text-icyBlue uppercase tracking-widest">
            LOGISTICS & DISPATCH
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-offWhite mt-1">
            ORDER HISTORY & TRACKING
          </h1>
          <p className="font-mono text-xs text-lightGray/70 mt-1">
            Real-time pan-India courier milestones across Delhivery, Blue Dart & Express Air.
          </p>
        </div>

        {/* Orders Stack */}
        <div className="space-y-8">
          {orders.map((order) => {
            const currentStageIndex = getStageIndex(order.status);

            return (
              <div
                key={order.orderId}
                className="bg-softBlack border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Order Top Summary Line */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 font-mono text-xs">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display font-bold text-lg text-offWhite uppercase">
                        {order.orderId}
                      </span>
                      <span className="bg-white/10 px-2.5 py-0.5 text-icyBlue text-[11px] font-semibold uppercase">
                        {order.status}
                      </span>
                    </div>
                    <div className="text-lightGray/60 text-[11px] mt-1">
                      Placed on: <strong className="text-offWhite">{order.date}</strong> • AWB: {order.trackingNumber || 'EXP-IN-382910'}
                    </div>
                  </div>

                  <div className="text-right sm:text-right">
                    <span className="text-[10px] text-lightGray/60 uppercase block">Total Amount</span>
                    <span className="font-mono text-xl font-bold text-offWhite">
                      {formatCurrency(order.total)}
                    </span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">
                      {order.paymentMethod}
                    </span>
                  </div>
                </div>

                {/* Visual Tracking Progress Timeline */}
                <div className="py-2">
                  <div className="text-[10px] font-mono text-lightGray/50 uppercase tracking-widest mb-4">
                    Tracking Milestone: {order.estimatedDelivery || 'In Transit'}
                  </div>

                  <div className="relative">
                    {/* Connecting Bar */}
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-white/10 z-0" />
                    <div
                      className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 bg-icyBlue transition-all duration-500 z-0"
                      style={{
                        width: `${(currentStageIndex / (STATUS_STAGES.length - 1)) * 100}%`
                      }}
                    />

                    {/* Milestone Nodes */}
                    <div className="relative z-10 flex justify-between items-center">
                      {STATUS_STAGES.map((stage, idx) => {
                        const isCompleted = idx <= currentStageIndex;
                        const isCurrent = idx === currentStageIndex;

                        return (
                          <div key={stage} className="flex flex-col items-center">
                            <div
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-all ${
                                isCurrent
                                  ? 'bg-icyBlue text-deepBlack ring-4 ring-icyBlue/20 scale-110'
                                  : isCompleted
                                  ? 'bg-offWhite text-deepBlack'
                                  : 'bg-deepBlack border border-white/20 text-lightGray/40'
                              }`}
                            >
                              {isCompleted ? '✓' : idx + 1}
                            </div>
                            <span
                              className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-2 ${
                                isCompleted ? 'text-offWhite font-semibold' : 'text-lightGray/40'
                              }`}
                            >
                              {stage}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Ordered Items List */}
                <div className="pt-6 border-t border-white/5 space-y-3">
                  <div className="text-[11px] font-mono text-lightGray/60 uppercase">
                    Items in Shipment ({order.items.length}):
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-deepBlack border border-white/5 font-mono text-xs"
                      >
                        <div className="w-14 h-16 bg-neutral-900 border border-white/10 flex-shrink-0 overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-display font-bold uppercase text-offWhite truncate text-sm">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-lightGray/60 truncate">
                            Size: {item.size} • Qty: {item.quantity}
                          </div>
                          <div className="font-bold text-offWhite mt-1">
                            {formatCurrency(item.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address Footer in Card */}
                {order.shippingAddress && (
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-lightGray/70 gap-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-icyBlue" />
                      <span>
                        Destination: {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                      </span>
                    </div>
                    <span className="text-lightGray/40">Receiver: {order.shippingAddress.name}</span>
                  </div>
                )}

                {/* Need Help With This Order Section */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs bg-deepBlack/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 px-6 sm:px-8">
                  <span className="text-[11px] text-lightGray/60 uppercase font-semibold">
                    NEED HELP WITH THIS ORDER?
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/contact?orderId=${order.orderId}`}
                      className="border border-white/20 hover:border-offWhite bg-deepBlack px-3.5 py-1.5 uppercase text-[11px] text-offWhite transition-colors font-bold"
                    >
                      Contact Support
                    </Link>
                    <a
                      href={getWhatsAppLink(businessConfig.supportRepresentatives[0].whatsappNumber, order.orderId)}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-emerald-500/40 hover:border-emerald-500/80 bg-emerald-500/10 px-3.5 py-1.5 uppercase text-[11px] text-emerald-300 transition-colors font-bold flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Support</span>
                    </a>
                    <button
                      onClick={() => alert(`Tracking Number: ${order.trackingNumber || 'EXP-IN-8291048'}\nCarrier: Air Express Courier\nStatus: ${order.status}\nMilestone: ${order.estimatedDelivery}`)}
                      className="border border-white/20 hover:border-offWhite bg-deepBlack px-3.5 py-1.5 uppercase text-[11px] text-lightGray hover:text-offWhite transition-colors"
                    >
                      Track Order
                    </button>
                    <Link
                      to={`/contact?orderId=${order.orderId}&issue=return`}
                      className="border border-white/20 hover:border-offWhite bg-deepBlack px-3.5 py-1.5 uppercase text-[11px] text-lightGray hover:text-offWhite transition-colors"
                    >
                      Return / Refund
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

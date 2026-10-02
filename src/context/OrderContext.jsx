import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const OrderContext = createContext(null);
const ORDERS_STORAGE_KEY = 'coldritual_orders_v1';

const INITIAL_DEMO_ORDERS = [
  {
    orderId: "CR-92418",
    date: "28 Sep 2026",
    status: "Delivered",
    customerName: "Arjun Verma",
    customerEmail: "arjun.verma@ritualist.in",
    customerPhone: "+91 98765 43210",
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Paid",
    trackingNumber: "DELHIVERY-EXP-8291048",
    estimatedDelivery: "Delivered on 01 Oct 2026",
    shippingAddress: {
      name: "Arjun Verma",
      phone: "+91 98765 43210",
      street: "Flat 402, Monolith Heights, 12th Main",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560034"
    },
    items: [
      {
        id: "cr-hd-01",
        name: "FROST // 01",
        subtitle: "Heavyweight 450 GSM Hoodie",
        size: "L",
        color: "Glacial Black",
        price: 2799,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&w=1000&h=1250&q=85"
      },
      {
        id: "cr-ots-01",
        name: "VOID // 01",
        subtitle: "Heavyweight Void Graphic Oversized Tee",
        size: "XL",
        color: "Washed Carbon",
        price: 1299,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85"
      }
    ],
    subtotal: 4098,
    discount: 409,
    shippingFee: 0,
    total: 3689
  },
  {
    orderId: "CR-94812",
    date: "01 Oct 2026",
    status: "Shipped",
    customerName: "Arjun Verma",
    customerEmail: "arjun.verma@ritualist.in",
    customerPhone: "+91 98765 43210",
    paymentMethod: "UPI (PhonePe)",
    paymentStatus: "Paid",
    trackingNumber: "BLUEDART-AIR-7740192",
    estimatedDelivery: "Expected by tomorrow, 8 PM",
    shippingAddress: {
      name: "Arjun Verma",
      phone: "+91 98765 43210",
      street: "Flat 402, Monolith Heights, 12th Main",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560034"
    },
    items: [
      {
        id: "cr-crg-01",
        name: "UTILITY BLACK // 01",
        subtitle: "Tactical 8-Pocket Bungee Parachute Cargo",
        size: "L (33-34)",
        color: "Stealth Black",
        price: 2299,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&w=1000&h=1250&q=85"
      }
    ],
    subtotal: 2299,
    discount: 0,
    shippingFee: 0,
    total: 2299
  },
  {
    orderId: "CR-95104",
    date: "02 Oct 2026",
    status: "Processing",
    customerName: "Priya Sharma",
    customerEmail: "priya.sharma@gmail.com",
    customerPhone: "+91 98201 44552",
    paymentMethod: "Credit Card (Visa)",
    paymentStatus: "Paid",
    trackingNumber: "DELHIVERY-EXP-3349102",
    estimatedDelivery: "Dispatching from Bengaluru warehouse",
    shippingAddress: {
      name: "Priya Sharma",
      phone: "+91 98201 44552",
      street: "B-201, Sterling Tower, Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400050"
    },
    items: [
      {
        id: "cr-sh-01",
        name: "SHADOW // 01",
        subtitle: "Heavyweight Boxy Canvas Overshirt",
        size: "M",
        color: "Pitch Black",
        price: 2199,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&w=1000&h=1250&q=85"
      },
      {
        id: "cr-jns-01",
        name: "WASHED VOID // 01",
        subtitle: "Wide-Leg Acid Washed Baggy Denim",
        size: "30",
        color: "Acid Mineral Wash",
        price: 2499,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&w=1000&h=1250&q=85"
      }
    ],
    subtotal: 4698,
    discount: 469,
    shippingFee: 0,
    total: 4229
  },
  {
    orderId: "CR-96320",
    date: "02 Oct 2026",
    status: "Confirmed",
    customerName: "Kabir Malhotra",
    customerEmail: "kabir.m@gmail.com",
    customerPhone: "+91 99100 88219",
    paymentMethod: "UPI (Paytm)",
    paymentStatus: "Paid",
    trackingNumber: "AIR-EXP-9921045",
    estimatedDelivery: "3–4 business days via Express Air",
    shippingAddress: {
      name: "Kabir Malhotra",
      phone: "+91 99100 88219",
      street: "14/A, Greater Kailash 1",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110048"
    },
    items: [
      {
        id: "cr-ots-02",
        name: "AFTERDARK // 03",
        subtitle: "Distressed Cyber Monolith Oversized Tee",
        size: "L",
        color: "Obsidian Black",
        price: 1499,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1615903040611-e599dfaa6752?auto=format&fit=crop&w=1000&h=1250&q=85"
      }
    ],
    subtotal: 2998,
    discount: 200,
    shippingFee: 0,
    total: 2798
  },
  {
    orderId: "CR-97815",
    date: "03 Oct 2026",
    status: "Pending",
    customerName: "Rohan Nair",
    customerEmail: "rohan.nair@outlook.com",
    customerPhone: "+91 97412 33901",
    paymentMethod: "Cash on Delivery (COD)",
    paymentStatus: "Pending",
    trackingNumber: "EXP-IN-4920194",
    estimatedDelivery: "Pending order verification call",
    shippingAddress: {
      name: "Rohan Nair",
      phone: "+91 97412 33901",
      street: "Plot 88, Jubilee Hills Road No. 36",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500033"
    },
    items: [
      {
        id: "cr-sw-01",
        name: "FROST // 02",
        subtitle: "Heavyweight French Terry Crewneck",
        size: "XL",
        color: "Ice Slate",
        price: 2199,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&w=1000&h=1250&q=85"
      }
    ],
    subtotal: 2199,
    discount: 0,
    shippingFee: 0,
    total: 2199
  }
];

export function OrderProvider({ children }) {
  const { showToast } = useToast();
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_DEMO_ORDERS;
    } catch (e) {
      return INITIAL_DEMO_ORDERS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders', e);
    }
  }, [orders]);

  const placeOrder = ({
    items,
    shippingAddress,
    paymentMethod,
    subtotal,
    discount,
    shippingFee,
    total,
    customerName,
    customerEmail,
    customerPhone,
  }) => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newOrderId = `CR-${randomDigits}`;

    const newOrder = {
      orderId: newOrderId,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: "Confirmed",
      customerName: customerName || shippingAddress?.name || "Ritual Customer",
      customerEmail: customerEmail || "customer@ritualist.in",
      customerPhone: customerPhone || shippingAddress?.phone || "+91 98765 00000",
      paymentMethod,
      paymentStatus: paymentMethod?.toLowerCase().includes('cash on delivery') ? "Pending" : "Paid",
      trackingNumber: `EXP-IN-${Math.floor(1000000 + Math.random() * 9000000)}`,
      estimatedDelivery: "3–4 business days via Express Air",
      shippingAddress,
      items: items.map(item => ({
        id: item.productId || item.id,
        name: item.name,
        subtitle: item.subtitle,
        size: item.size,
        color: item.color,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      subtotal,
      discount,
      shippingFee,
      total,
    };

    setOrders(prev => [newOrder, ...prev]);
    showToast(`ORDER ${newOrderId} PLACED SUCCESSFULLY!`, 'success');
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.orderId.toLowerCase() === (orderId || '').toLowerCase()) {
        return { ...o, status: newStatus };
      }
      return o;
    }));
    showToast(`ORDER ${orderId} UPDATED TO: ${newStatus.toUpperCase()}`, 'success');
  };

  const updatePaymentStatus = (orderId, newPaymentStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.orderId.toLowerCase() === (orderId || '').toLowerCase()) {
        return { ...o, paymentStatus: newPaymentStatus };
      }
      return o;
    }));
    showToast(`ORDER ${orderId} PAYMENT UPDATED`, 'info');
  };

  const deleteOrder = (orderId) => {
    setOrders(prev => prev.filter(o => o.orderId.toLowerCase() !== (orderId || '').toLowerCase()));
    showToast(`ORDER ${orderId} REMOVED FROM ARCHIVE`, 'info');
  };

  const getOrderById = (orderId) => {
    return orders.find(o => o.orderId.toLowerCase() === (orderId || '').toLowerCase());
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
        updateOrderStatus,
        updatePaymentStatus,
        deleteOrder,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}

export default OrderContext;
